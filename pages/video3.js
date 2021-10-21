import Head from 'next/head'
import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Glitch from '../components/Glitch'
import Fuse from '../components/Fuse'
import Vaurus from '../components/Vaurus'


export default function VideoTwo() {
    return (
      <>
        <Head>
          <title>Vitaly OBJs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Canvas>
            <OrbitControls 
              autoRotate
              autoRotateSpeed={1.0}
              enablePan={false}
              enableZoom={false}
              enableDamping
              dampingFactor={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              maxAzimuthAngle={0}
              minAzimuthAngle={0}
            />
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 15, 10]} angle={0.3}/>
            <Suspense fallback={<Html><div> </div></Html>}>
              <Fuse />
              <Glitch />
              <Vaurus />
            </Suspense>
        </Canvas>
        
      </>
    )
  }