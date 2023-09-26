import * as THREE from 'three'

export default abstract class Scene {
    protected scene: THREE.Scene

    constructor() {
        this.scene = new THREE.Scene();
    }

    getScene() {
        return this.scene;
    }

    add(item: THREE.Object3D) {
        this.scene.add(item);
    }

    getChildren(): THREE.Object3D[] {
        return this.scene.children;
    }

    removeLastChildren() {
        this.scene.children.pop();
    }
}