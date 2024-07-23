// src/ModelViewer.js
"use client"

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene, animations } = useGLTF('/robot_playground.glb');
  const mixer = useRef();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
    return () => mixer.current?.stopAllAction();
  }, [animations, scene]);

  useFrame((_, delta) => mixer.current?.update(delta));

  scene.scale.set(1.4, 1.6, 1);
  scene.position.set(0, -1.8, 0);

  return <primitive object={scene} />;
};


const ModelViewer = () => {
  return (
    <div style={{ height: '700px', width : '700px', marginRight: '-60px' }}>
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
      <Model  />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
    </div>
  );
};

export default ModelViewer;
