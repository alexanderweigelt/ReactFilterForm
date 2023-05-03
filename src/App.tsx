import { type FC } from 'react'
import logo from './assets/react.svg'
import Form from './Form'

const App: FC = () => {
  return (
    <div className={'flex h-screen flex-col justify-between lg:container lg:mx-auto px-3 lg:px-0'}>
      <header className={'flex pb-3 lg:mb-3 lg:border-b w-full items-center justify-between'}>
        <img src={logo} className={'max-w-[120px]'} alt="logo"/>
        <h1 className={'text-5xl font-bold text-gray-500'}>
          Filter
        </h1>
      </header>
      <main>
        <Form />
      </main>
      <footer className={'text-center py-4'}>
        <p className={'text-sm'}>&copy; 2023 by Alexander Weigelt</p>
      </footer>
    </div>
  )
}

export default App
