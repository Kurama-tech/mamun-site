import Header from './header'
import Footer from './footer'
import { ReactNode } from 'react'


interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header className='sticky top-0 z-50'>
        <Header />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}