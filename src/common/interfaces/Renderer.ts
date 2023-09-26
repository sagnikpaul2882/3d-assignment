export default interface IRendererInterface {
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
}