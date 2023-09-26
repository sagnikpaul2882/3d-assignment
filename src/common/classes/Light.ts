import * as THREE from 'three'
import LightInterface from '../interfaces/Light';
import { Positions3D } from '../interfaces/common';

export default abstract class Light {
    protected light: THREE.PointLight
    
    constructor(props: LightInterface) {
        this.light = new THREE.PointLight(props.color, props.intensity)
    }

    setPosition(position: Positions3D) {
        this.light.position.set(position.x, position.y, position.z);
    }

    getLight() {
        return this.light;
    }
}