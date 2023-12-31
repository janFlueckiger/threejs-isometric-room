/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber"
import { a } from "@react-spring/three"

import roomScene from "../assets/3d/isometricRoom.glb"

const Room = (props) => {
    const roomRef = useRef();

    const { nodes, materials } = useGLTF(roomScene);

    return (
        <a.group ref={roomRef} {...props}>
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                position={[0, 2, 0]}
                scale={2}
            />
        </a.group>
    );
}
export default Room;