import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader'
import Stats from 'three/examples/jsm/libs/stats.module'

export default class App {
    scene: THREE.Scene;
    size: number;
    id: number;
    light: THREE.PointLight;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer
    controls: OrbitControls
    loader: PCDLoader
    stats: Stats

    constructor(
        scene: THREE.Scene, 
        size: number,
        light: THREE.PointLight,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer,
        controls: OrbitControls,
    ) {
        this.scene = scene;
        this.size = size;
        this.id = 0;
        this.light = light;
        this.camera = camera;
        this.renderer = renderer;
        this.controls = controls;
        this.loader = new PCDLoader();
        this.stats = new Stats();

        this.setupStats();
        this.setupRenderer();
        this.setupScene();
        this.loadImageFromPCD();
        this.animate();
    }

    setupScene = () => {
        this.scene.add(new THREE.AxesHelper(5));
        this.scene.add(this.light);
    }

    setupRenderer() {
        document.body.appendChild(this.renderer.domElement)
    }

    setupStats = () => {
        document.body.appendChild(this.stats.dom);
    }

    loadImageFromPCD = () => {
        this.loader.load(
            // resource URL
            `models/desktop/frame_${this.id}.pcd`,
            // called when the resource is loaded
            ( points ) => {
                if (this.scene.children.length === 3) {
                    this.scene.children.pop();
                }
                this.scene.add( points );
            },
            // called when loading is in progresses
            function ( xhr ) {
            },
            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );
    }

    onChangeIndex = (index: number) => {
        this.id = (index + this.id + this.size) % this.size;
        console.log(this.id);
        this.loadImageFromPCD();
    }

    onResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.render()
    }

    render = () => {
        this.renderer.render(this.scene, this.camera);
    }

    animate = () => {
        requestAnimationFrame(this.animate)
        this.controls.update()
        this.render()
        this.stats.update()
    }
}