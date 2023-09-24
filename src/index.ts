import Scene from './Scene'
import App from './App'
import Light from './Light'
import Camera from './Camera'
import Renderer from './Renderer'
import Controls from './Controls'

class AssignmentObj {
    scene: Scene
    size: number
    light: Light
    camera: Camera
    renderer: Renderer
    controls: Controls
    app: App

    constructor() {
        this.scene = new Scene();
        this.size = 266;
        this.light = new Light(0xffffff, 1000);
        this.camera = new Camera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        this.renderer = new Renderer();
        this.controls = new Controls(this.camera.getCamera(), this.renderer.getRenderer().domElement);
        this.app = new App(
            this.scene.getScene(), 
            this.size, 
            this.light.getLight(), 
            this.camera.getCamera(), 
            this.renderer.getRenderer(), 
            this.controls.getControls()
        )

        this.initializeObjects()
        this.initializeEventListeners();
    }

    initializeObjects() {
        this.light.setPosition(2.5, 7.5, 15);
        this.camera.setPosition(undefined, undefined, 10);
        this.renderer.setRendererSize(window.innerWidth, window.innerHeight);
        this.controls.setDamping(true);
    }

    initializeEventListeners() {
        let arrows = document.querySelectorAll('.arrows');
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].addEventListener('click', () => this.app.onChangeIndex(i === 0 ? - 1 : 1), false)
        }

        window.addEventListener('resize', () => this.app.onResize(), false)
    }
}

new AssignmentObj()
















