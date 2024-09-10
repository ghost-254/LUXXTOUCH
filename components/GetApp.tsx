// GetApp.tsx

import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h1 className="bold-20 text-green-200 lg:bold-20 xl:max-w-[320px]">Want to become a Masseuse/Massesur?</h1>
          <h2 className="bold-40 lg:bold-30 xl:max-w-[320px]">Get for free on playstore now!</h2>
          <p className="regular-16 text-gray-10">Currently Available on Android Only!</p>
          
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Get App Here Now!"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
              href="https://firebasestorage.googleapis.com/v0/b/lux-prod-ca2d3/o/lux.apk?alt=media&token=a283d09a-8aeb-4349-9c48-c232a8065eb8"
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