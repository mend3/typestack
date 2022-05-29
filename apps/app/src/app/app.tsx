import './app.module.scss'

import { Link, Route, Routes } from 'react-router-dom'

import { Button, Container, Storybook } from '@typestack/storybook'

export function App() {
  return (
    <>
      <nav className='flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto'>
        <h2 className='text-3xl font-bold'>
          <Link to='/'>
            Type<span className='text-amber-800'>S</span>tack
          </Link>
        </h2>

        <ul className='flex flex-row-reverse md:space-x-5 w-full items-center'>
          <li>
            <Link
              to='/buttons'
              className='font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300'
            >
              Buttons
            </Link>
          </li>
          <li>
            <Link
              to='/storybook'
              className='font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300'
            >
              Storybook
            </Link>
          </li>
          <li>
            <Link
              to='/page-2'
              className='font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300'
            >
              Page 2
            </Link>
          </li>
        </ul>
      </nav>
      <div />

      <Container>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                This is the generated root route. <Link to='/page-2'>Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path='/page-2'
            element={
              <div>
                <Link to='/'>Click here to go back to root page.</Link>
              </div>
            }
          />
          <Route path='/storybook' element={<Storybook />} />
          <Route
            path='/buttons'
            element={
              <>
                <Button className='border-indigo-500 bg-indigo-500 hover:bg-indigo-600 '>Primary</Button>
                <Button className='border-green-500 bg-green-500 hover:bg-green-600'>Success</Button>
                <Button className='border-red-500 bg-red-500 hover:bg-red-600'>Error</Button>
                <Button className='border-yellow-500 bg-yellow-500 hover:bg-yellow-600'>Info</Button>
                <Button className='border-teal-500 bg-teal-500 hover:bg-teal-600'>Warning</Button>
              </>
            }
          />
        </Routes>
        {/* END: routes */}
      </Container>
    </>
  )
}

export default App
