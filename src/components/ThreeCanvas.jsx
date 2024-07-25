import { useEffect } from 'react';
import * as THREE from 'three';
import { Wireframe } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeCanvas = () => {
  useEffect(() => {
    let renderer, scene, camera, clock, controls, particleSystem;

    const settings = {
      particleCount: 2000,
      particleSize: 10,
      autoRotate: true
    };

    const vertexShader = `
      uniform float uTime;
      attribute float size;
      attribute vec3 customColor;
      varying vec3 vColor;

      void main() {
        vColor = customColor;

        vec3 pos = position;
        pos.y += sin(uTime + position.x * 10.0) * 5.0;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = size * (300.0 / -mvPosition.z);
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;

      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) {
          discard;
        }

        gl_FragColor = vec4(vColor, 1.0);
      }
    `;

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      camera = new THREE.PerspectiveCamera(75, w / h, 1, 10000);
      camera.position.z = 1000;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      clock = new THREE.Clock();

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(w, h);
      renderer.setAnimationLoop(animate);

      const canvasDiv = document.getElementById('threejs-canvas');
      if (canvasDiv) {
        canvasDiv.appendChild(renderer.domElement);
      }

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = false;

      window.addEventListener('resize', onWindowResize, false);

      createParticles();
    };

    const onWindowResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    const createParticles = () => {
      const particles = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const sizes = [];

      const color = new THREE.Color();

      for (let i = 0; i < settings.particleCount; i++) {
        positions.push((Math.random() * 2 - 1) * 1000);
        positions.push((Math.random() * 2 - 1) * 1000);
        positions.push((Math.random() * 2 - 1) * 1000);

        color.setHSL(i / settings.particleCount, 1.0, 0.5);
        colors.push(color.r, color.g, color.b);

        sizes.push(settings.particleSize);
      }

      particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      particles.setAttribute('customColor', new THREE.Float32BufferAttribute(colors, 3));
      particles.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

      const uniforms = {
        uTime: { value: 1.0 }
      };

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true
      });

      particleSystem = new THREE.Points(particles, material);
      scene.add(particleSystem);
    };

    const animate = () => {
      controls.update();

      const elapsedTime = clock.getElapsedTime();
      particleSystem.material.uniforms.uTime.value = elapsedTime;

      if (settings.autoRotate) {
        particleSystem.rotation.y += 0.001;
      }

      render();
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div id="threejs-canvas" className="fixed inset-0 w-full h-full" />
  )
};

export default ThreeCanvas;