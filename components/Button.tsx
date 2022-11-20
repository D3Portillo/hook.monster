import { PropsWithChildrenCx } from "@/types/shared"
import { classnames } from "@/lib/helper"

function Button({
  children,
  className,
  flavor = "pink",
}: PropsWithChildrenCx<{
  flavor?: "pink" | "black" | "whiter"
}>) {
  return (
    <button
      className={classnames(
        className,
        flavor === "pink" && "bg-pink-500 hover:bg-pink-600",
        flavor === "black" && "bg-black hover:bg-opacity-80",
        flavor === "whiter"
          ? "bg-zinc-50 border border-zinc-50 text-gray-800 hover:text-black hover:bg-white hover:border-zinc-100"
          : "text-white",
        "rounded-full px-8 py-3 font-medium transition"
      )}
    >
      {children}
    </button>
  )
}

export default Button
