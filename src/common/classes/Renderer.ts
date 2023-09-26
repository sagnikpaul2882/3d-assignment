import * as THREE from 'three'
import { Dimensions2D } from '../interfaces/common';
import RendererInterface from '../interfaces/Renderer';

export default abstract class Renderer {
    protected renderer: THREE.WebGLRenderer
    
    constructor(canvas: HTMLElement) {
        this.renderer = new THREE.WebGLRenderer({ canvas: canvas });
    }

    setRendererSize(dimensions: Dimensions2D) {
        this.renderer.setSize(dimensions.width, dimensions.height);
    }

    render(props: RendererInterface ) {
        this.renderer.render(props.scene, props.camera);
    }

    getDOMElement() {
        return this.renderer.domElement;
    }

    getRenderer() {
        return this.renderer;
    }
}