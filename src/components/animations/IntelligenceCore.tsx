"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function IntelligenceCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const coreGroupRef = useRef<THREE.Group | null>(null);
  const layersRef = useRef<THREE.Mesh[]>([]);
  const nodesRef = useRef<THREE.Mesh[]>([]);
  const connectionsRef = useRef<THREE.Line[]>([]);
  const isDraggingRef = useRef(false);
  const previousMouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0.2, y: 0 });
  const currentRotationRef = useRef({ x: 0.2, y: 0 });
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const hoveredNodeRef = useRef<THREE.Mesh | null>(null);
  
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [hoveredInfo, setHoveredInfo] = useState<{ text: string; x: number; y: number } | null>(null);
  const [layerCount, setLayerCount] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 12);
    cameraRef.current = camera;

    // Renderer with enhanced settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 2, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7c3aed, 1.5, 50);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Create Intelligence Core - Multi-layered rotating system
    const coreGroup = new THREE.Group();
    coreGroupRef.current = coreGroup;

    // Layer data - representing data processing stages
    const layerData = [
      { radius: 4, thickness: 0.05, color: 0x00d4ff, speed: 0.3, segments: 6 },
      { radius: 3.2, thickness: 0.08, color: 0x0ea5e9, speed: -0.4, segments: 5 },
      { radius: 2.4, thickness: 0.06, color: 0x06b6d4, speed: 0.5, segments: 4 },
      { radius: 1.6, thickness: 0.09, color: 0x7c3aed, speed: -0.6, segments: 3 },
    ];

    // Create layers with geometric patterns
    layerData.forEach((layer, index) => {
      // Main ring
      const ringGeometry = new THREE.TorusGeometry(layer.radius, layer.thickness, 16, layer.segments * 8);
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: layer.color,
        emissive: layer.color,
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      
      // Random initial rotation for each layer
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ring.userData.baseRotation = { x: ring.rotation.x, y: ring.rotation.y };
      ring.userData.speed = layer.speed;
      ring.userData.layer = index;
      
      layersRef.current.push(ring);
      coreGroup.add(ring);

      // Add geometric nodes on each layer
      const nodeCount = layer.segments;
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const nodeGeometry = new THREE.OctahedronGeometry(0.1, 0);
        const nodeMaterial = new THREE.MeshStandardMaterial({
          color: layer.color,
          emissive: layer.color,
          emissiveIntensity: 0.8,
          metalness: 0.9,
          roughness: 0.1,
        });
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        
        node.position.x = Math.cos(angle) * layer.radius;
        node.position.y = Math.sin(angle) * layer.radius;
        node.position.z = 0;
        
        node.userData.layer = index;
        node.userData.angle = angle;
        node.userData.radius = layer.radius;
        node.userData.phase = Math.random() * Math.PI * 2;
        node.userData.info = `Layer ${index + 1} - Node ${i + 1}`;
        
        nodesRef.current.push(node);
        ring.add(node);
      }
    });

    // Create connections between nodes across layers
    const createConnections = () => {
      // Clear old connections
      connectionsRef.current.forEach(line => {
        coreGroup.remove(line);
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      connectionsRef.current = [];

      // Create new connections
      for (let i = 0; i < nodesRef.current.length - 1; i++) {
        if (Math.random() > 0.7) { // 30% connection density
          const node1 = nodesRef.current[i];
          const node2 = nodesRef.current[i + 1];
          
          const points = [
            node1.getWorldPosition(new THREE.Vector3()),
            node2.getWorldPosition(new THREE.Vector3()),
          ];
          
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending,
          });
          const line = new THREE.Line(lineGeometry, lineMaterial);
          
          connectionsRef.current.push(line);
          coreGroup.add(line);
        }
      }
    };

    createConnections();
    // update public UI-safe layer count (avoid reading refs during render)
    setLayerCount(layersRef.current.length);
    scene.add(coreGroup);

    // Core glow effect
    const coreGlowGeometry = new THREE.SphereGeometry(1, 32, 32);
    const coreGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const coreGlow = new THREE.Mesh(coreGlowGeometry, coreGlowMaterial);
    coreGroup.add(coreGlow);

    // Mouse interaction
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
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e);
      
      if (isDraggingRef.current) {
        const deltaX = e.clientX - previousMouseRef.current.x;
        const deltaY = e.clientY - previousMouseRef.current.y;

        targetRotationRef.current.y += deltaX * 0.005;
        targetRotationRef.current.x += deltaY * 0.005;

        targetRotationRef.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationRef.current.x));

        previousMouseRef.current = { x: e.clientX, y: e.clientY };
      } else {
        // Hover detection
        if (cameraRef.current && sceneRef.current && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          
          if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
          ) {
            renderer.domElement.style.cursor = 'grab';
            
            raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
            const intersects = raycasterRef.current.intersectObjects(nodesRef.current);
            
            // Reset previous hover
            if (hoveredNodeRef.current && (!intersects.length || intersects[0].object !== hoveredNodeRef.current)) {
              (hoveredNodeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.8;
              hoveredNodeRef.current = null;
              setHoveredInfo(null);
            }
            
            // New hover
            if (intersects.length > 0) {
              const node = intersects[0].object as THREE.Mesh;
              hoveredNodeRef.current = node;
              (node.material as THREE.MeshStandardMaterial).emissiveIntensity = 2;
              
              renderer.domElement.style.cursor = 'pointer';
              setHoveredInfo({
                text: node.userData.info,
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
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
      setHoveredInfo(null);
      
      if (hoveredNodeRef.current) {
        (hoveredNodeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.8;
        hoveredNodeRef.current = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!cameraRef.current) return;

      const delta = e.deltaY * 0.01;
      const newZ = cameraRef.current.position.z + delta;
      cameraRef.current.position.z = Math.max(8, Math.min(20, newZ));
    };

    renderer.domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    renderer.domElement.addEventListener("mouseleave", handleMouseLeave);
    renderer.domElement.addEventListener("wheel", handleWheel, { passive: false });
    renderer.domElement.style.cursor = 'grab';

    // Animation loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (coreGroupRef.current) {
        // Smooth rotation
        const damping = 0.05;
        currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * damping;
        currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * damping;

        coreGroupRef.current.rotation.x = currentRotationRef.current.x;
        coreGroupRef.current.rotation.y = currentRotationRef.current.y;

        // Auto rotation when not dragging
        if (!isDraggingRef.current) {
          targetRotationRef.current.y += 0.002;
        }

        // Animate layers - counter-rotating
        layersRef.current.forEach((layer, index) => {
          const speed = layer.userData.speed;
          layer.rotation.z = elapsedTime * speed * 0.2;
          
          // Depth pulsing
          const pulse = Math.sin(elapsedTime + index) * 0.1;
          layer.position.z = pulse;
        });

        // Animate nodes
        nodesRef.current.forEach((node) => {
          const phase = node.userData.phase + elapsedTime;
          
          // Pulsing scale
          const scale = 1 + Math.sin(phase * 2) * 0.2;
          node.scale.setScalar(scale);
          
          // Rotation
          node.rotation.x += 0.01;
          node.rotation.y += 0.015;
          
          // Highlight hovered
          if (hoveredNodeRef.current === node) {
            node.scale.setScalar(1.5);
          }
        });

        // Animate lights
        pointLight1.position.x = Math.sin(elapsedTime * 0.5) * 15;
        pointLight1.position.y = Math.cos(elapsedTime * 0.3) * 15;
        
        pointLight2.position.x = Math.cos(elapsedTime * 0.4) * 12;
        pointLight2.position.y = Math.sin(elapsedTime * 0.6) * 12;

        // Animate core glow
        coreGlow.scale.setScalar(1 + Math.sin(elapsedTime * 0.8) * 0.15);
        (coreGlow.material as THREE.MeshBasicMaterial).opacity = 0.1 + Math.sin(elapsedTime) * 0.05;

        // Update connections periodically
        if (Math.floor(elapsedTime * 2) % 10 === 0 && connectionsRef.current.length > 0) {
          const randomConnection = connectionsRef.current[Math.floor(Math.random() * connectionsRef.current.length)];
          (randomConnection.material as THREE.LineBasicMaterial).opacity = Math.min((randomConnection.material as THREE.LineBasicMaterial).opacity + 0.1, 0.4);
        }
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

      // Cleanup Three.js
      layersRef.current.forEach((layer) => {
        layer.geometry.dispose();
        (layer.material as THREE.Material).dispose();
      });
      
      nodesRef.current.forEach((node) => {
        node.geometry.dispose();
        (node.material as THREE.Material).dispose();
      });
      
      connectionsRef.current.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      
      coreGlow.geometry.dispose();
      (coreGlow.material as THREE.Material).dispose();

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[600px]">
      <div ref={containerRef} className="w-full h-full" />
      
      {/* Tooltip */}
      {hoveredInfo && (
        <div
          className="absolute pointer-events-none bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium shadow-2xl border border-cyan-500/30 z-10"
          style={{
            left: `${hoveredInfo.x + 15}px`,
            top: `${hoveredInfo.y - 40}px`,
          }}
        >
          <div className="text-cyan-400">{hoveredInfo.text}</div>
        </div>
      )}
      
      {/* Info panel */}
      <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-4 py-3 rounded-lg text-xs border border-white/10">
        <div className="text-white/60 mb-1">Intelligence Core</div>
        <div className="text-white/90">
          {layerCount} Processing Layers
        </div>
        <div className="text-cyan-400 text-[10px] mt-2">
          Drag to rotate • Scroll to zoom
        </div>
      </div>
    </div>
  );
}