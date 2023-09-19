import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader'
import Stats from 'three/examples/jsm/libs/stats.module'

const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))

const size = 266;

let id = 0;

const light = new THREE.PointLight(0xffffff, 1000)
light.position.set(2.5, 7.5, 15)
scene.add(light)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 10

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })

const loader = new PCDLoader();

const loadImageFromPCD = () => {
    console.log(id);
    loader.load(
        // resource URL
        `models/desktop/frame_${id}.pcd`,
        // called when the resource is loaded
        function ( points ) {
            if (scene.children.length === 3) {
                scene.children.pop();
            }
            scene.add( points );
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

const onClickArrow = (index: number) => {
    id = (index + id) % size;
    loadImageFromPCD();
}

let arrows = document.querySelectorAll('.arrows');
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', () => onClickArrow(i === 0 ? - 1 : 1), false)
}

loadImageFromPCD();

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

const stats = new Stats()
document.body.appendChild(stats.dom)

function animate() {
    requestAnimationFrame(animate)

    controls.update()

    render()

    stats.update()
}

function render() {
    renderer.render(scene, camera)
}

animate()