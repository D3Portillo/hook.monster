import { Fragment } from "react"
import Head from "next/head"
import Image from "next/image"

import Footer from "@/components/Footer"
import Section from "@/components/layout/Section"
import Button from "@/components/Button"

import asset_logo from "@/assets/logo.png"

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Hook.Monster | The on-chain IFTTT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <nav className="p-4 border-b">
        <div className="flex items-center justify-between gap-8 mx-auto max-w-screen-xl">
          <Image height={42} src={asset_logo} alt="hook.monster logo" />
          <div className="flex-grow text-gray-600 hidden md:flex items-center gap-4 justify-end">
            <div className="hover:text-black">Services</div>
            <div className="hover:text-black">Pricing</div>
            <div className="hover:text-black">Docs</div>
          </div>
          <Button>Launch app</Button>
        </div>
      </nav>
      <Section className="min-h-screen">
        <div className="mx-auto mt-[15vh] max-w-3xl py-12 min-h-screen text-center">
          <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-3xl sm:text-5xl font-bold text-transparent">
            Easy pipe on-chain events to the off-chain world
          </h1>
          <p className="mx-auto text-gray-600 mt-4 max-w-2xl sm:leading-relaxed">
            Query smart contracts, listen to events, forward them on Discord and
            Telegram. Custom notifications for your users. Trigger, monitor and
            automate on-chain activity
          </p>
          <Button className="text-lg mt-4 mx-auto">Start for free</Button>
        </div>
      </Section>
      <Footer />
    </Fragment>
  )
}
