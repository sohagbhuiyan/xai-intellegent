"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

interface ParticleTransformationProps {
  scrollProgress: MotionValue<number>;
}

export default function ParticleTransformation({ scrollProgress }: ParticleTransformationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    particleCount: number;
    positions: Float32Array;
    originalPositions: Float32Array;
    targetPositions: Float32Array;
    velocities: Float32Array;
    clock: THREE.Clock;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particle system
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Initialize particles with random chaos
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Chaotic initial state - random positions
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 30 + Math.random() * 20;
      
      originalPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      originalPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      originalPositions[i3 + 2] = radius * Math.cos(phi);

      // Random velocities for initial motion
      velocities[i3] = (Math.random() - 0.5) * 0.5;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.5;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.5;

      // Order target state - structured grid
      const gridSize = Math.ceil(Math.cbrt(particleCount));
      const index = i;
      const x = (index % gridSize) - gridSize / 2;
      const y = Math.floor((index / gridSize) % gridSize) - gridSize / 2;
      const z = Math.floor(index / (gridSize * gridSize)) - gridSize / 2;
      const spacing = 3;
      
      targetPositions[i3] = x * spacing;
      targetPositions[i3 + 1] = y * spacing;
      targetPositions[i3 + 2] = z * spacing;

      // Copy original to current positions
      positions[i3] = originalPositions[i3];
      positions[i3 + 1] = originalPositions[i3 + 1];
      positions[i3 + 2] = originalPositions[i3 + 2];

      // Color gradient - cyan to white
      const colorMix = Math.random();
      colors[i3] = 0.2 + colorMix * 0.8; // R
      colors[i3 + 1] = 0.8 + colorMix * 0.2; // G
      colors[i3 + 2] = 1.0; // B
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material with custom shader for glow
    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Ambient light for subtle illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const clock = new THREE.Clock();

    // Store refs
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      particleCount,
      positions,
      originalPositions,
      targetPositions,
      velocities,
      clock,
    };

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      targetRotation.x = mouse.y * 0.3;
      targetRotation.y = mouse.x * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (!sceneRef.current) return;
      
      const { 
        scene, 
        camera, 
        renderer, 
        particles, 
        positions, 
        originalPositions, 
        targetPositions, 
        velocities, 
        clock 
      } = sceneRef.current;

      const elapsedTime = clock.getElapsedTime();
      
      // Get scroll progress (0 = chaos, 1 = order)
      const progress = scrollProgress.get();
      const transformProgress = Math.min(Math.max(progress * 2, 0), 1); // 0-0.5 scroll = 0-1 transform
      
      // Smooth camera rotation based on mouse
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
      
      particles.rotation.x = currentRotation.x;
      particles.rotation.y = currentRotation.y;

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        if (transformProgress < 0.01) {
          // Pure chaos - add velocity and drift
          positions[i3] += velocities[i3] + Math.sin(elapsedTime + i) * 0.02;
          positions[i3 + 1] += velocities[i3 + 1] + Math.cos(elapsedTime + i) * 0.02;
          positions[i3 + 2] += velocities[i3 + 2] + Math.sin(elapsedTime * 0.5 + i) * 0.02;
          
          // Boundary check - keep in bounds
          const maxBound = 50;
          if (Math.abs(positions[i3]) > maxBound) velocities[i3] *= -0.8;
          if (Math.abs(positions[i3 + 1]) > maxBound) velocities[i3 + 1] *= -0.8;
          if (Math.abs(positions[i3 + 2]) > maxBound) velocities[i3 + 2] *= -0.8;
        } else {
          // Interpolate between chaos and order
          const easeProgress = transformProgress * transformProgress * (3 - 2 * transformProgress); // smoothstep
          
          positions[i3] = originalPositions[i3] + (targetPositions[i3] - originalPositions[i3]) * easeProgress;
          positions[i3 + 1] = originalPositions[i3 + 1] + (targetPositions[i3 + 1] - originalPositions[i3 + 1]) * easeProgress;
          positions[i3 + 2] = originalPositions[i3 + 2] + (targetPositions[i3 + 2] - originalPositions[i3 + 2]) * easeProgress;
          
          // Add subtle breathing to ordered state
          if (transformProgress > 0.9) {
            const breathe = Math.sin(elapsedTime * 0.5 + i * 0.1) * 0.1;
            positions[i3] += breathe;
            positions[i3 + 1] += breathe * 0.5;
          }
        }
      }
      
      geometry.attributes.position.needsUpdate = true;
      
      // Gentle automatic rotation
      particles.rotation.y += 0.0005;
      
      // Adjust particle size based on transformation
      (particles.material as THREE.PointsMaterial).size = 0.15 + transformProgress * 0.1;
      (particles.material as THREE.PointsMaterial).opacity = 0.6 + transformProgress * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!sceneRef.current) return;
      
      const { camera, renderer } = sceneRef.current;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (sceneRef.current) {
        const { renderer, particles } = sceneRef.current;
        
        particles.geometry.dispose();
        (particles.material as THREE.Material).dispose();
        
        if (containerRef.current && renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
      
      sceneRef.current = null;
    };
  }, [scrollProgress]);

  return <div ref={containerRef} className="w-full h-full" />;
}