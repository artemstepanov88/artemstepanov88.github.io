

  function main() {
    const canvas = document.querySelector('#c');

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    });
  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxBufferGeometry(boxWidth, boxHeight, boxDepth);

  const cubes = [];  // just an array we can use to rotate the cubes
  const loader = new THREE.TextureLoader();

  const materials = [
    new THREE.MeshBasicMaterial({map: loader.load('img/1.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('img/2.png')}),
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
