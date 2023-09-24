import * as THREE from 'three'

export default class Camera {
    camera: THREE.PerspectiveCamera

    constructor(fov: number, aspect: number, near: number, far: number) {
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    }

    setPosition(x: number | undefined, y: number | undefined, z: number | undefined) {
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

    setAspect(width: number, height: number) {
        this.camera.aspect = width / height;
    }

    getCamera() {
        return this.camera;
    }
}