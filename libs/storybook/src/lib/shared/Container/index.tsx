import { PropsWithChildren } from 'react'

/* eslint-disable-next-line */
export interface ContainerProps {}

export function Container(props: PropsWithChildren<ContainerProps>) {
  return (
    <div className='bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center'>
      <div className='w-full text-center mx-auto'>{props.children}</div>
    </div>
  )
}

export default Container
