// src/ModelViewer.js
"use client"

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ setLoading }) => {
  const { scene, animations } = useGLTF('/robot_playground.glb');
  const mixer = useRef();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
    setLoading(false); // Stop loading once the model is loaded
    return () => mixer.current?.stopAllAction();
  }, [animations, scene, setLoading]);

  useFrame((_, delta) => mixer.current?.update(delta));

  scene.scale.set(1.4, 1.6, 1);
  scene.position.set(0, -1.8, 0);

  return <primitive object={scene} />;
};

const ModelViewer = () => {
  const [loading, setLoading] = useState(true);

  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #555',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
  };

  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={{ height: '700px', width: '700px', marginRight: '-60px', position: 'relative' }}>
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}>
          <style>{keyframesStyle}</style>
          <div style={spinnerStyle}></div>
        </div>
      )}
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Model setLoading={setLoading} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
