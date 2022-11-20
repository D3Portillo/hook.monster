import { PropsWithChildrenCx } from "@/types/shared"
import { classnames } from "@/lib/helper"

function Button({ children, className }: PropsWithChildrenCx) {
  return (
    <button
      className={classnames(
        className,
        "block rounded-full bg-pink-500 px-8 py-3 font-medium text-white transition hover:bg-pink-600"
      )}
    >
      {children}
    </button>
  )
}

export default Button
