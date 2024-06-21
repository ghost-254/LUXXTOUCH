// GetApp.tsx

import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h1 className="bold-20 text-slate-200 lg:bold-20 xl:max-w-[320px]">Want to become a Masseuse/Massesur?</h1>
          <h2 className="bold-40 lg:bold-30 xl:max-w-[320px]">Get for free on playstore now!</h2>
          <p className="regular-16 text-gray-10">Currently Available on Android Only!</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phone_profile.png" alt="phone" width={400} height={600} />
        </div>
      </div>
    </section>
  )
}

export default GetApp