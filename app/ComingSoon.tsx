'use client';

import { useMediaQuery } from 'react-responsive'


export default function ComingSoon() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    return (
        <div className={`z-5 fixed ${!isDesktopOrLaptop ? 'bottom-0' : 'top-0'} left-0 w-full bg-blue-500 text-white py-2 px-4`}>
        <p className="text-center">
          BridgeSplash Minecraft Network is coming soon!<br />
          Early access to SMP & Oneblock is available now.
        </p>
      </div>
    )
}