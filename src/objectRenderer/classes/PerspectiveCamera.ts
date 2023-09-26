import * as THREE from 'three'
import Camera from "../../common/classes/Camera";
import { IDimensions2D } from "../../common/interfaces/Common";
import ICameraInterface from '../../common/interfaces/Camera';

export default class PerspectiveCamera extends Camera {
    protected camera: THREE.PerspectiveCamera

    constructor(cameraProps: ICameraInterface) {
        super();
        let { fov, aspect, near, far } = cameraProps;
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    }

    setAspect(dimensions: IDimensions2D) {
        if (this.camera instanceof THREE.PerspectiveCamera) {
            this.camera.aspect = dimensions.width / dimensions.height;
        }
    }

    public getCamera() : THREE.PerspectiveCamera {
        return this.camera;
    }

    public updateProjectionMatrix() {
        this.camera.updateProjectionMatrix();
    }
}