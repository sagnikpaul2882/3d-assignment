import * as THREE from 'three'
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader'
import Stats from 'three/examples/jsm/libs/stats.module'
import ObjectScene from './objectRenderer/classes/ObjectScene';
import PointLight from './objectRenderer/classes/PointLight';
import PerspectiveCamera from './objectRenderer/classes/PerspectiveCamera';
import WebGLRenderer from './objectRenderer/classes/WebGLRenderer';
import OrbitControls from './objectRenderer/classes/OrbitControls';

export default class App {
    scene: ObjectScene;
    size: number;
    id: number;
    light: PointLight;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer
    controls: OrbitControls
    loader: PCDLoader
    stats: Stats

    constructor(canvas: HTMLElement) {
        this.scene = new ObjectScene();
        this.size = 266;
        this.id = 0;
        this.light = new PointLight({ color: 0xffffff, intensity: 1000 });
        this.camera = new PerspectiveCamera({ fov: 75, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 100 });
        this.renderer = new WebGLRenderer(canvas);
        this.controls = new OrbitControls({ camera: this.camera.getCamera(), domElem: this.renderer.getRenderer().domElement });
        this.loader = new PCDLoader();
        this.stats = new Stats();

        this.initializeObjects();
        this.initializeEventListeners();
        this.setupStats();
        this.setupRenderer();
        this.setupScene();
        this.loadImageFromPCD();
        this.animate();
    }

    initializeEventListeners() {
        let arrows = document.querySelectorAll('.arrows');
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].addEventListener('click', () => this.onChangeIndex(i === 0 ? - 1 : 1), false)
        }

        window.addEventListener('resize', () => this.onResize(), false)
    }

    initializeObjects() {
        this.light.setPosition({ x: 2.5, y: 7.5, z: 15 });
        this.camera.setPosition({ z: 10 });
        this.renderer.setRendererSize({ width: window.innerWidth, height: window.innerHeight });
        this.controls.setDamping(true);
    }

    setupScene = () => {
        this.scene.add(new THREE.AxesHelper(5));
        this.scene.add(this.light.getLight());
    }

    setupRenderer() {
        document.body.appendChild(this.renderer.getDOMElement())
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
                if (this.scene.getChildren().length === 3) {
                    this.scene.removeLastChildren()
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
        this.camera.setAspect({ width: window.innerWidth, height: window.innerHeight })
        this.camera.updateProjectionMatrix()
        this.renderer.setRendererSize({ width: window.innerWidth, height: window.innerHeight })
        this.render()
    }

    render = () => {
        this.renderer.render({ scene: this.scene.getScene(), camera: this.camera.getCamera() });
    }

    animate = () => {
        requestAnimationFrame(this.animate)
        this.controls.update()
        this.render()
        this.stats.update()
    }
}