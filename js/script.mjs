import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/loaders/GLTFLoader.js';

 function main() {
    const canvas = document.querySelector('#c');

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    });
  const fov = 50;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.x = 50;
    camera.position.y = 50;
    camera.position.z = 50;

    // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();
    // Controls
 const scene = new THREE.Scene();
  const boxWidth = 18;
  const boxHeight = 18;
  const boxDepth = 18;
  const geometry = new THREE.BoxBufferGeometry(boxWidth, boxHeight, boxDepth);

  const cubes = [];  // just an array we can use to rotate the cubes
  const loader = new THREE.TextureLoader();
  
  
  
  
// 3d model test !!!!!!!!!!!!!!
  
  const loade = new GLTFLoader();



// Load a glTF resource
loade.load(
	// resource URL
	'img/yourMesh.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
  
  
  
  

  
  
  //  3d model test !!!!!!!!!!!!!
  
  
  
  
  const materials = [
    new THREE.MeshBasicMaterial({map: loader.load('img/1.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('img/2.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('img/3.JPG')}),
    new THREE.MeshBasicMaterial({map: loader.load('img/4.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('img/5.JPG')}),
    new THREE.MeshBasicMaterial({map: loader.load('img/6.jpg')}),
  ];
  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);
  cubes.push(cube);  // add to our list of cubes to rotate

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    cubes.forEach((cube, ndx) => {
      const speed = .1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
      cube.rotation.z = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
