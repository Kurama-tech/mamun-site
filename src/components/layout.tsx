import Header from './header'
import Footer, { FooterServices } from './footer'
import { ReactNode } from 'react'
import BreadCrumbs from './services/BreadCrumbs'

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

export function LayoutServices({ children }: Props) {
  return (
    <>
      <header className='sticky top-0 z-50'>
       <BreadCrumbs />
      </header>
      <main>{children}</main>
      <FooterServices />
    </>
  )
}
