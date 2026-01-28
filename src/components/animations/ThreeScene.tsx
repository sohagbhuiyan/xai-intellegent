"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Group | null>(null);
  const isDraggingRef = useRef(false);
  const previousMouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const hoveredNodeRef = useRef<THREE.Mesh | null>(null);
  const selectedNodesRef = useRef<Set<THREE.Mesh>>(new Set());
  
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add point light that follows mouse
    const pointLight = new THREE.PointLight(0x06b6d4, 1.5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Add secondary accent light
    const accentLight = new THREE.PointLight(0x8b5cf6, 0.8, 100);
    accentLight.position.set(-5, -5, 5);
    scene.add(accentLight);

    // Create sphere with nodes
    const group = new THREE.Group();
    sphereRef.current = group;

    // Create main sphere geometry with wireframe
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);

    // Add inner glow sphere
    const glowSphereGeometry = new THREE.SphereGeometry(1.95, 32, 32);
    const glowSphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
    const glowSphere = new THREE.Mesh(glowSphereGeometry, glowSphereMaterial);
    group.add(glowSphere);

    // Add nodes (particles) on the sphere surface
    const nodeCount = 80;
    const nodes: THREE.Mesh[] = [];
    const glows: THREE.Mesh[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      // Create node with enhanced material
      const nodeGeometry = new THREE.SphereGeometry(0.04, 8, 8);
      const nodeMaterial = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        emissive: 0x06b6d4,
        emissiveIntensity: 0.5,
      });
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.setFromSphericalCoords(2.05, phi, theta);
      node.userData.originalScale = 1;
      node.userData.phase = Math.random() * Math.PI * 2;
      nodes.push(node);
      group.add(node);

      // Add glow effect with animation data
      const glowGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.4,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.copy(node.position);
      glow.userData.phase = node.userData.phase;
      glows.push(glow);
      group.add(glow);

      // Add connecting lines between nearby nodes
      if (i > 0 && i % 5 === 0) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          nodes[i - 5].position,
          node.position,
        ]);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x6366f1,
          transparent: true,
          opacity: 0.2,
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
      }
    }

    scene.add(group);

    // Mouse interaction with raycasting for node detection
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMouseRef.current = { x: e.clientX, y: e.clientY };
      renderer.domElement.style.cursor = 'grabbing';
      
      // Check for node click
      updateMousePosition(e);
      if (cameraRef.current && sceneRef.current) {
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(nodes);
        
        if (intersects.length > 0) {
          const clickedNode = intersects[0].object as THREE.Mesh;
          
          // Toggle selection
          if (selectedNodesRef.current.has(clickedNode)) {
            selectedNodesRef.current.delete(clickedNode);
            // Reset color
            (clickedNode.material as THREE.MeshStandardMaterial).emissive.setHex(0x06b6d4);
          } else {
            selectedNodesRef.current.add(clickedNode);
            // Highlight color
            (clickedNode.material as THREE.MeshStandardMaterial).emissive.setHex(0xff6b6b);
          }
          
          // Update count
          setSelectedCount(selectedNodesRef.current.size);
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e);
      
      if (isDraggingRef.current) {
        const deltaX = e.clientX - previousMouseRef.current.x;
        const deltaY = e.clientY - previousMouseRef.current.y;

        // Update target rotation for smooth interpolation
        targetRotationRef.current.y += deltaX * 0.005;
        targetRotationRef.current.x += deltaY * 0.005;

        // Clamp X rotation to prevent flipping
        targetRotationRef.current.x = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, targetRotationRef.current.x)
        );

        previousMouseRef.current = { x: e.clientX, y: e.clientY };
      } else {
        // Hover detection for nodes
        if (cameraRef.current && sceneRef.current && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          
          // Check if mouse is over canvas
          if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
          ) {
            renderer.domElement.style.cursor = 'grab';
            
            // Raycast to detect node hover
            raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
            const intersects = raycasterRef.current.intersectObjects(nodes);
            
            // Reset previous hovered node
            if (hoveredNodeRef.current && (!intersects.length || intersects[0].object !== hoveredNodeRef.current)) {
              if (!selectedNodesRef.current.has(hoveredNodeRef.current)) {
                (hoveredNodeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;
              }
              hoveredNodeRef.current = null;
              setTooltip(null);
            }
            
            // Handle new hover
            if (intersects.length > 0) {
              const hoveredNode = intersects[0].object as THREE.Mesh;
              hoveredNodeRef.current = hoveredNode;
              
              if (!selectedNodesRef.current.has(hoveredNode)) {
                (hoveredNode.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.5;
              }
              
              renderer.domElement.style.cursor = 'pointer';
              
              // Show tooltip
              const nodeIndex = nodes.indexOf(hoveredNode);
              setTooltip({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                text: `Node ${nodeIndex + 1}`
              });
            }
          }
        }
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      renderer.domElement.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
      isDraggingRef.current = false;
      renderer.domElement.style.cursor = 'default';
      setTooltip(null);
      
      // Reset hovered node
      if (hoveredNodeRef.current && !selectedNodesRef.current.has(hoveredNodeRef.current)) {
        (hoveredNodeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;
        hoveredNodeRef.current = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!cameraRef.current) return;

      const delta = e.deltaY * 0.005;
      const newZ = cameraRef.current.position.z + delta;
      cameraRef.current.position.z = Math.max(3, Math.min(10, newZ));
    };

    renderer.domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    renderer.domElement.addEventListener("mouseleave", handleMouseLeave);
    renderer.domElement.addEventListener("wheel", handleWheel, { passive: false });
    renderer.domElement.style.cursor = 'grab';

    // Animation loop with smooth interpolation
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (sphereRef.current) {
        // Smooth rotation interpolation (lerp) - increased speed for visibility
        if (!isDraggingRef.current) {
          targetRotationRef.current.y += 0.005;
        }

        // Apply smooth damping to rotation
        const damping = 0.1;
        currentRotationRef.current.x +=
          (targetRotationRef.current.x - currentRotationRef.current.x) * damping;
        currentRotationRef.current.y +=
          (targetRotationRef.current.y - currentRotationRef.current.y) * damping;

        sphereRef.current.rotation.x = currentRotationRef.current.x;
        sphereRef.current.rotation.y = currentRotationRef.current.y;

        // Animate lights to follow mouse position
        if (mouseRef.current) {
          pointLight.position.x = mouseRef.current.x * 5;
          pointLight.position.y = mouseRef.current.y * 5;
          
          accentLight.position.x = -mouseRef.current.x * 3;
          accentLight.position.y = -mouseRef.current.y * 3;
        }

        // Animate nodes with pulsing effect
        nodes.forEach((node, i) => {
          const phase = node.userData.phase + elapsedTime;
          
          // Check if node is selected or hovered
          const isSelected = selectedNodesRef.current.has(node);
          const isHovered = hoveredNodeRef.current === node;
          
          let scale = 1 + Math.sin(phase) * 0.3;
          if (isHovered || isSelected) {
            scale *= 1.5; // Make selected/hovered nodes larger
          }
          node.scale.setScalar(scale);

          // Animate corresponding glow
          if (glows[i]) {
            let glowScale = 1 + Math.sin(phase) * 0.5;
            if (isSelected || isHovered) {
              glowScale *= 2;
            }
            glows[i].scale.setScalar(glowScale);
            
            const baseOpacity = 0.3 + Math.sin(phase) * 0.2;
            const glowOpacity = (isSelected || isHovered) ? baseOpacity * 1.5 : baseOpacity;
            (glows[i].material as THREE.MeshBasicMaterial).opacity = Math.min(glowOpacity, 0.8);
            
            // Change color for selected nodes
            if (isSelected) {
              (glows[i].material as THREE.MeshBasicMaterial).color.setHex(0xff6b6b);
            } else {
              (glows[i].material as THREE.MeshBasicMaterial).color.setHex(0x06b6d4);
            }
          }
        });

        // Gentle breathing effect for main sphere
        const breathingScale = 1 + Math.sin(elapsedTime * 0.5) * 0.02;
        sphere.scale.setScalar(breathingScale);
        
        // Pulse inner glow
        const glowPulse = 0.1 + Math.sin(elapsedTime * 0.8) * 0.05;
        (glowSphere.material as THREE.MeshBasicMaterial).opacity = glowPulse;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      renderer.domElement.removeEventListener("mouseleave", handleMouseLeave);
      renderer.domElement.removeEventListener("wheel", handleWheel);

      // Clean up Three.js resources
      nodes.forEach((node) => {
        node.geometry.dispose();
        (node.material as THREE.Material).dispose();
      });
      glows.forEach((glow) => {
        glow.geometry.dispose();
        (glow.material as THREE.Material).dispose();
      });
      sphere.geometry.dispose();
      (sphere.material as THREE.Material).dispose();
      glowSphere.geometry.dispose();
      (glowSphere.material as THREE.Material).dispose();

      // Clear references
      selectedNodesRef.current.clear();
      hoveredNodeRef.current = null;

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[600px]">
      <div ref={containerRef} className="w-full h-full" />
      
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute pointer-events-none bg-background-elevated/95 backdrop-blur-sm px-3 py-2 rounded-lg text-xs font-medium shadow-lg border border-brand-primary/20 z-10"
          style={{
            left: `${tooltip.x + 10}px`,
            top: `${tooltip.y - 30}px`,
            transform: 'translateY(-100%)',
          }}
        >
          <div className="text-brand-primary">{tooltip.text}</div>
          <div className="text-text-tertiary text-[10px] mt-0.5">Click to select</div>
        </div>
      )}
      
      {/* Selection Counter */}
      {selectedCount > 0 && (
        <div className="absolute bottom-4 right-4 bg-background-elevated/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-brand-primary/20">
          <span className="text-brand-primary">{selectedCount}</span>
          <span className="text-text-secondary ml-1">nodes selected</span>
        </div>
      )}
    </div>
  );
}