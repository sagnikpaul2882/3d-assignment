import * as THREE from 'three'

export default class Scene {
    scene: THREE.Scene

    constructor() {
        this.scene = new THREE.Scene();
    }

    getScene() {
        return this.scene;
    }
}