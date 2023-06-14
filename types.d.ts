import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTBox = GLTF & {
	nodes: {
		Cube: THREE.Mesh;
		Scene: THREE.Mesh;
		bookbottom: THREE.Mesh;
		bookcover: THREE.Mesh;
		bookcover001: THREE.Mesh;
		bookspine: THREE.Mesh;
		bookspine001: THREE.Mesh;
		booktop: THREE.Mesh;
	};
	materials: {
		"": THREE.MeshStandardMaterial;
		bookcover: THREE.MeshStandardMaterial;
		bookspine: THREE.MeshStandardMaterial;
		bookcover: THREE.MeshStandardMaterial;
		booktop: THREE.MeshStandardMaterial;
	};
};
