import * as THREE from 'three'
import { Positions3DOptional } from '../interfaces/common';

export default abstract class Camera {
    protected camera!: THREE.PerspectiveCamera | THREE.OrthographicCamera;

    public setPosition(position: Positions3DOptional) {
        let { x, y, z} = position;

        if (x !== undefined) {
            this.camera.position.x = x;
        }

        if (y !== undefined) {
            this.camera.position.y = y;
        }

        if (z !== undefined) {
            this.camera.position.z = z;
        }
    }

    public getCamera() : THREE.PerspectiveCamera | THREE.OrthographicCamera {
        return this.camera;
    }
}