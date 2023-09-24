import * as THREE from 'three'

export default class Renderer {
    renderer: THREE.WebGLRenderer
    
    constructor() {
        this.renderer = new THREE.WebGLRenderer();
    }

    setRendererSize(width: number, height: number) {
        this.renderer.setSize(width, height);
    }

    getRenderer() {
        return this.renderer;
    }
}