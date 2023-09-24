import Scene from './Scene'
import App from './App'
import Light from './Light'
import Camera from './Camera'
import Renderer from './Renderer'
import Controls from './Controls'

const scene = new Scene();

const size = 266 // number of images

const light = new Light(0xffffff, 1000);
light.setPosition(2.5, 7.5, 15);

const camera = new Camera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.setPosition(undefined, undefined, 10);

const renderer = new Renderer();
renderer.setRendererSize(window.innerWidth, window.innerHeight);

const controls = new Controls(camera.getCamera(), renderer.getRenderer().domElement);
controls.setDamping(true);

const app = new App(
    scene.getScene(), 
    size, 
    light.getLight(), 
    camera.getCamera(), 
    renderer.getRenderer(), 
    controls.getControls()
)

let arrows = document.querySelectorAll('.arrows');
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', () => app.onChangeIndex(i === 0 ? - 1 : 1), false)
}

window.addEventListener('resize', () => app.onResize(), false)
