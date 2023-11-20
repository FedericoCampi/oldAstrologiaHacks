import { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';

const Component3D = () =>{

    const iphone = useLoader(GLTFLoader,"/iphone14/scene.gltf");

    console.log(iphone)
    return(
        <mesh>
            <hemisphereLight intensity={0.15}groundColor='black'/>
            <pointLight intensity={1}/>

            <primitive
                object={iphone.scene}
            />
        </mesh>
    )
}

// const iphoneCanva = () => {
//     return(
//         <Canvas
//             frameloop='demand'
//             shadows
//             camera={{ position: [20, 3, 5], fov: 25 }}
//             gl={{ preserveDrawingBuffer: true }}
//         >
//             <Suspense fallback={'Loading...'}>
//                 <OrbitControls enableZoom={false}
//                     maxPolarAngle={Math.PI / 2}
//                     minPolarAngle={Math.PI / 2}
//                 />
//                 <Component3D/>
//             </Suspense>
//             <Preload all/>
//         </Canvas>
//     )
// }

export default Component3D