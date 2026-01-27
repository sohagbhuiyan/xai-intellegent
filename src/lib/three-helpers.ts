import * as THREE from "three";

/**
 * Create a responsive camera
 */
export function createCamera(
  width: number,
  height: number
): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;
  return camera;
}

/**
 * Create a renderer with optimal settings
 */
export function createRenderer(
  width: number,
  height: number
): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  return renderer;
}

/**
 * Generate points on a sphere surface
 */
export function generateSpherePoints(
  count: number,
  radius: number
): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;

    const point = new THREE.Vector3();
    point.setFromSphericalCoords(radius, phi, theta);
    points.push(point);
  }

  return points;
}

/**
 * Create a glow material
 */
export function createGlowMaterial(
  color: number,
  opacity: number = 0.3
): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
  });
}

/**
 * Animate rotation with damping
 */
export function animateRotation(
  object: THREE.Object3D,
  targetRotation: { x: number; y: number },
  damping: number = 0.05
): void {
  object.rotation.x += (targetRotation.x - object.rotation.x) * damping;
  object.rotation.y += (targetRotation.y - object.rotation.y) * damping;
}

/**
 * Handle window resize for Three.js
 */
export function handleResize(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  width: number,
  height: number
): void {
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}