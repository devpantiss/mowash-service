import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Globe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create OrbitControls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Create a sphere for the globe
    const radius = 2;
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    
    // Load texture and handle errors
    const earthTexture = textureLoader.load(
      'https://threejsfundamentals.org/threejs/resources/images/earth.jpg',
      () => console.log('Texture loaded successfully'),
      undefined,
      (err) => console.error('Error loading texture', err)
    );

    const material = new THREE.MeshBasicMaterial({ map: earthTexture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    console.log('Globe added to scene:', globe);

    // Position the camera and center on the globe
    camera.position.z = 5;

    // Rotate globe to center on Odisha, India
    const odishaLat = 20.9517;
    const odishaLong = 85.0985;
    const latRad = (90 - odishaLat) * (Math.PI / 180);
    const lonRad = odishaLong * (Math.PI / 180);
    globe.rotation.y = -lonRad;
    globe.rotation.x = latRad;

    // Handle animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen" />;
};

export default Globe;
