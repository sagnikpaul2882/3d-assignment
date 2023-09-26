export default interface RendererInterface {
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
}