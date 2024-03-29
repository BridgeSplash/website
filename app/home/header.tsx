'use client';
import Image from 'next/image';
import Status from './server-status';
import Typewriter from 'typewriter-effect';
import Navbar from '../navbar/navbar';


export default function Header() {
  return (
    <header className="text-center text-white min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-end space-y-10 sm:mt-20 pt-16 lg:mt-16 lg:pt-8 pb-8">
        <div className="flex justify-center">
          <Image
            className="relative logo"
            src="/title.svg"
            alt="BridgeSplash Logo"
            width={472}
            height={120}
            draggable={false}
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="flex text-xl mt-4">Minecraft server for the Bridge community</p>
        </div>
        <div className='text-xl mt-4'>
          <Typewriter
            options={{
              strings: ['Bridge', "OneBlock", "FFA", "Duels", "SMP", "Wizard Frog", "Cosmetics"],
              autoStart: true,
              loop: true,
              wrapperClassName:"text-4xl"
            }}
          />
        </div>
        <div className="flex justify-center">
          <Status />
        </div>
      </div>
    </header>
  );
}
