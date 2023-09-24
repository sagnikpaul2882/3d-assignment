import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Controls {
    controls: OrbitControls

    constructor(camera: THREE.PerspectiveCamera, domElem: HTMLCanvasElement) {
        this.controls = new OrbitControls(camera, domElem);
    }

    setDamping(value: boolean) {
        this.controls.enableDamping = value;
    }

    getControls() {
        return this.controls;
    }
}