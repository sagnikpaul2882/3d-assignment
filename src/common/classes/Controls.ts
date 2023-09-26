import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import IControlsInterface from '../interfaces/Controls';

export default abstract class Controls {
    protected controls: OrbitControls

    constructor(props: IControlsInterface) {
        this.controls = new OrbitControls(props.camera, props.domElem);
    }

    setDamping(value: boolean) {
        this.controls.enableDamping = value;
    }

    update() {
        this.controls.update()
    }

    getControls() {
        return this.controls;
    }
}