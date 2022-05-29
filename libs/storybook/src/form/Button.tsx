import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export const styles = {
  primary: 'border-indigo-500 bg-indigo-500 hover:bg-indigo-600',
  success: 'border-green-500 bg-green-500 hover:bg-green-600',
  error: 'border-red-500 bg-red-500 hover:bg-red-600',
  warning: 'border-yellow-500 bg-yellow-500 hover:bg-yellow-600',
  info: 'border-teal-500 bg-teal-500 hover:bg-teal-600',
} as const

/* eslint-disable-next-line */
export type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export default function Button({ children, ...props }: ButtonProps) {
  const className = props.className || ''
  return (
    <button
      {...props}
      type={'button'}
      className={'border text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline'.concat(
        className,
      )}
    >
      {children}
    </button>
  )
}
