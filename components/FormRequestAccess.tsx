import { classnames } from "@/lib/helper"
import toast from "react-hot-toast"

function handleSubmit(e: any) {
  e.preventDefault()
  const form = e.currentTarget as HTMLFormElement
  const emailItem = form.querySelector("[type=email]")
  const { value: email } = emailItem as HTMLInputElement
  if (email) {
    let toaster = toast.loading("Adding you...")
    fetch(`/api/subscribe/${email}`).then(() => {
      toast.dismiss(toaster)
      toast.success("Done :)")
    })
  }
  form.reset()
}

function FormRequestAccess({ className }: { className?: string }) {
  return (
    <form
      onSubmit={handleSubmit}
      className={classnames(className, "flex flex-col gap-4 lg:items-start")}
    >
      <label htmlFor="email" className="sr-only">
        Email
      </label>

      <input
        required
        className="w-full outline-none rounded-full border border-zinc-100 px-6 py-3"
        type="email"
        placeholder="Your email"
      />

      <button className="block rounded-full bg-pink-500 px-8 py-3 font-medium text-white transition hover:bg-pink-600">
        Send request
      </button>
    </form>
  )
}

export default FormRequestAccess
