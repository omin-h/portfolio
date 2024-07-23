// src/ModelViewer.js
"use client"

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene, animations } = useGLTF('/earth.glb');
  const mixer = useRef();
  const modelRef = useRef();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
    return () => mixer.current?.stopAllAction();
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.004; // Adjust the speed of the rotation as needed
    }
  });

  scene.scale.set(1.3, 1.3, 1.3);
  scene.position.set(0.2, -0.8, 0);

  return <primitive ref={modelRef} object={scene} />;
};

const ModelViewer = () => {
  const modelRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (modelRef.current) {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        modelRef.current.position.x = scrollPosition;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '700px', width: '700px', marginRight: '-60px' }}>
      <Canvas camera={{ position: [1, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <spotLight position={[10, 20, 30]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
