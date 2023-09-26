import * as THREE from 'three'
import ILightInterface from '../interfaces/Light';
import { IPositions3D } from '../interfaces/Common';

export default abstract class Light {
    protected light: THREE.PointLight
    
    constructor(props: ILightInterface) {
        this.light = new THREE.PointLight(props.color, props.intensity)
    }

    setPosition(position: IPositions3D) {
        this.light.position.set(position.x, position.y, position.z);
    }

    getLight() {
        return this.light;
    }
}