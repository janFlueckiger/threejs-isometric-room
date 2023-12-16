import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader.jsx";

import Room from "../models/Room.jsx";

const Home = () => {
    const adjustRoomForScreenSize = () =>{
        let screenScale= null
        let screenPosition = [0, -1.5, -1.5];
        let rotation = [0.4, -0.75, 0]
        if (window.innerWidth < 768){
            screenScale = [0.9, 0.9, 0.9];
        }else{
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation];
    }
    const [roomScale, roomPosition, roomRotation] = adjustRoomForScreenSize()
    return(
        <section className="w-full h-screen relative">
            {/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                POPUP
            </div>*/}
            <Canvas
                className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight />
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />
                    <Room
                        position={roomPosition}
                        scale={roomScale}
                        rotation={roomRotation}
                    />
                </Suspense>
            </Canvas>

        </section>
    )
}

export default Home