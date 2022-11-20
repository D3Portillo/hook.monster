import { classnames } from "@/lib/helper"
import { PropsWithChildrenCx } from "@/types/shared"

function Section({
  as: Container = "section",
  className,
  children,
  ...props
}: PropsWithChildrenCx<{
  as?: any
}>) {
  return (
    <Container
      {...props}
      className={classnames(
        className,
        "w-full max-w-screen-xl mx-auto px-4 lg:px-8"
      )}
    >
      {children}
    </Container>
  )
}

export default Section
