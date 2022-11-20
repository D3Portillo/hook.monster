import { type PropsWithChildren } from "react"
import Link from "next/link"
import Image from "next/image"

import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import Section from "@/components/layout/Section"
import asset_logo from "@/assets/logo.png"

function Footer() {
  return (
    <Section
      as="footer"
      aria-label="Site Footer"
      className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8"
    >
      <Image height={64} src={asset_logo} alt="hook.monster logo" />
      <section className="flex flex-wrap mt-16 gap-12 border-t border-zinc-50 pt-16">
        <LinkSection title="Services">
          <LinkItem>Monster Notify</LinkItem>
          <LinkItem>Magic Simple Auth</LinkItem>
          <LinkItem>Queue Message Service</LinkItem>
        </LinkSection>

        <LinkSection title="Company">
          <LinkItem>About</LinkItem>
          <LinkItem>Roadmap</LinkItem>
        </LinkSection>

        <LinkSection title="Helpful Links">
          <LinkItem>FAQs</LinkItem>
        </LinkSection>
        <div className="flex-grow" />
        <div className="w-full md:max-w-md">
          <p className="text-lg font-medium text-gray-900">Request access</p>
          <div className="mt-8">
            <p className="leading-relaxed text-gray-500">
              We{"'"}re currently under develop and planning to launch very
              soon. If you want product updates or access to the platform please
              request an invite here.
            </p>

            <form className="flex mt-4 flex-col gap-4 lg:items-start">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                className="w-full rounded-full border border-zinc-100 px-6 py-3"
                type="email"
                placeholder="Your email"
              />

              <button className="block rounded-full bg-pink-500 px-8 py-3 font-medium text-white transition hover:bg-pink-600">
                Send request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between mt-16 border-t border-zinc-100 pt-6">
        <p className="text-sm text-gray-500">2022 ― Nullius in verba</p>
        <div className="flex gap-4 items-center">
          <Link
            href="/"
            target="_blank"
            className="transition-opacity hover:opacity-80"
          >
            <span className="sr-only">Github</span>
            <AiOutlineGithub className="text-2xl" />
          </Link>

          <Link
            href="/"
            target="_blank"
            className="transition-opacity hover:opacity-80"
          >
            <span className="sr-only">Twitter</span>
            <AiOutlineTwitter className="text-3xl" />
          </Link>
        </div>
      </section>
    </Section>
  )
}

function LinkItem({ children }: PropsWithChildren) {
  return (
    <li>
      <Link
        className="text-gray-700 transition hover:text-gray-700/75"
        href="#"
      >
        {children}
      </Link>
    </li>
  )
}

function LinkSection({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="text-left">
      <p className="text-lg font-medium text-gray-900">{title}</p>
      <ul className="space-y-4 text-sm mt-8">{children}</ul>
    </div>
  )
}

export default Footer
