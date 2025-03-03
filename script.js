// تهيئة المشهد
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas3D') });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// تحميل الخط
const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font) {
    const textGeometry = new THREE.TextGeometry('مرحبا', {
        font: font,
        size: 1,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelSegments: 5
    });

    const material = new THREE.MeshBasicMaterial({ color: 0xff6600 });
    const textMesh = new THREE.Mesh(textGeometry, material);

    textMesh.position.set(-2, 0, -5);
    scene.add(textMesh);
});

// ضبط الكاميرا
camera.position.z = 5;

// التحديث المستمر للمشهد
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
