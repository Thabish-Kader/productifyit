"use client";
import React, { memo, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
	AccumulativeShadows,
	Center,
	Environment,
	Grid,
	OrbitControls,
	RandomizedLight,
	useGLTF,
	useTexture,
} from "@react-three/drei";
import { GLTBox } from "@/types";
import { button, useControls } from "leva";

import * as THREE from "three";
import { useSnapshot } from "valtio";
import state from "@/store";

useGLTF.preload("./product.glb");

export const Box = (props: any) => {
	const snap = useSnapshot(state);
	const { nodes, materials } = useGLTF("./product.glb") as GLTBox;
	const groupRef = useRef<THREE.Group>();
	const frontTexture = useTexture(snap.frontSide);
	const backTexture = useTexture(snap.backSide);
	const sideTexture = useTexture(snap.splineSide);
	const sideTexture2 = useTexture(snap.splineSide2);
	const topTexture = useTexture(snap.topSide);

	const { gl } = useThree();

	const screeenShot = useControls({
		screenshot: button(() => {
			const link = document.createElement("a");
			link.setAttribute("download", "canvas.png");
			link.setAttribute(
				"href",
				gl.domElement
					.toDataURL("image/png")
					.replace("image/png", "image/octet-stream")
			);
			link.click();
		}),
	});

	return (
		<group ref={groupRef} {...props} dispose={null}>
			{/* NOTE: the first mesh's material has been omitted because it is not
			necessary, which means less effort for the GPU, leading to optimized
			performace. */}

			<mesh geometry={nodes.Cube.geometry} scale={[0.38, 1.37, 0.9]} />
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.bookcover.geometry}
				material={materials.bookcover}
				position={[0.39, 0, -0.01]}
				rotation={[1.57, 0, -1.57]}
				scale={[2.38, 2.6, -2.76]}
			>
				<meshBasicMaterial attach="material" map={frontTexture} />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.bookcover001.geometry}
				material={materials.bookcover}
				position={[-0.39, 0, -0.01]}
				rotation={[4.71, 0, 1.57]}
				scale={[-2.37, 2.38, 2.77]}
				dispose={null}
			>
				<meshBasicMaterial attach="material" map={backTexture} />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.bookspine.geometry}
				material={materials.bookspine}
				position={[0, 0, 0.91]}
				rotation={[1.57, 0, 0]}
				scale={[1.03, 1, -2.77]}
			>
				<meshBasicMaterial attach="material" map={sideTexture} />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.bookspine001.geometry}
				material={materials.bookspine}
				position={[0, 0, -0.92]}
				rotation={[-1.57, 9.43, 3.13]}
				scale={[-1.02, -1, -2.76]}
			>
				<meshBasicMaterial attach="material" map={sideTexture2} />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.booktop.geometry}
				material={materials.booktop}
				position={[0, 1.38, 0]}
				scale={[1.01, 1, -1.82]}
			>
				<meshBasicMaterial attach="material" map={topTexture} />
			</mesh>
		</group>
	);
};

const Shadows = memo(() => (
	<AccumulativeShadows
		temporal
		frames={100}
		color="#000207"
		colorBlend={0.5}
		alphaTest={0.9}
		scale={30}
		position-y={-0.69}
	>
		<RandomizedLight amount={10} radius={5} position={[5, 4, -9]} />
	</AccumulativeShadows>
));

Shadows.displayName = "Shadows";

export const MyCanvasv2 = () => {
	const { gridSize, backGroundColor, ...gridConfig } = useControls({
		gridSize: [10.5, 10.5],
		cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
		cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
		cellColor: "#6f6f6f",
		sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
		sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
		sectionColor: "#4c549e",
		fadeDistance: { value: 50, min: 0, max: 100, step: 1 },
		fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
		followCamera: false,
		infiniteGrid: true,
		backGroundColor: "#303035",
	});
	return (
		<Canvas
			shadows
			camera={{
				position: [
					2.7013018570806646, 1.8544143006514187, -6.654632270359344,
				],
				fov: 25,
			}}
			gl={{ preserveDrawingBuffer: true }}
		>
			<color attach="background" args={[backGroundColor]} />
			<Center>
				<Box scale={0.5} rotation-y={-10.55} position-y={1.6} />
			</Center>
			<Environment preset="city" />
			<OrbitControls maxPolarAngle={Math.PI / 2} />
			<Shadows />
			<Grid position={[0, -0.69, 0]} args={gridSize} {...gridConfig} />
		</Canvas>
	);
};
