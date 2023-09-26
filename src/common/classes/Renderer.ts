import * as THREE from 'three'
import { IDimensions2D } from '../interfaces/Common';
import IRendererInterface from '../interfaces/Renderer';

export default abstract class Renderer {
    protected renderer: THREE.WebGLRenderer
    
    constructor(canvas: HTMLElement) {
        this.renderer = new THREE.WebGLRenderer({ canvas: canvas });
    }

    setRendererSize(dimensions: IDimensions2D) {
        this.renderer.setSize(dimensions.width, dimensions.height);
    }

    render(props: IRendererInterface ) {
        this.renderer.render(props.scene, props.camera);
    }

    getDOMElement() {
        return this.renderer.domElement;
    }

    getRenderer() {
        return this.renderer;
    }
}