import { ButtonHTMLAttributes, PropsWithChildren, memo } from 'react'

export type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

function Button({ children, ...props }: ButtonProps) {
  const className = props.className || ''
  return (
    <button
      {...props}
      type={'button'}
      className={'border text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline '.concat(
        className,
      )}
    >
      {children}
    </button>
  )
}

export default memo(Button)
