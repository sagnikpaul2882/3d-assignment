import * as THREE from 'three'

export default class Light {
    light: THREE.PointLight
    
    constructor(color: number, intensity: number) {
        this.light = new THREE.PointLight(color, intensity)
    }

    setPosition(x: number, y: number, z: number) {
        this.light.position.set(x, y, z);
    }

    getLight() {
        return this.light;
    }
}