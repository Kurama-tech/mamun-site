import {HeartIcon, GlobeAltIcon, StarIcon}from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    // any props that come into the component
}

function ListItem({ children }: Props) {
  return (
    <li className="flex items-center mb-2">
      <StarIcon className="h-5 w-5 text-primary fill-primary mr-2" />
      <span className="text-gray-700">{children}</span>
    </li>
  )
}


export default function Services() {
    return (
        <div className="relative bg-white mx-auto max-w-7xl px-5 py-1 sm:px-1 sm:py-4 lg:px-1">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 mb-8">
        <div className="max-w-7xl mt-10">
            <div className='flex lg:order-2'>
            <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto text-justify">
            Ma&rsquo;mun&rsquo;s services provide end-to-end solutions for all your software needs. Our team of experts works with you every step of the way, ensuring that you get the best possible results. Trust Mamun to help you take your business to the next level!, some of our all star services are
            </p>
            <br />
            <div className="flex flex-col">
            <ul className="mt-4">
            <ListItem>Develop Appealing Busniess Sites</ListItem>
            <ListItem>Custom Dashboards/ORM&rsquo;s/CRM&rsquo;s</ListItem>
            <ListItem>Develop cross-platform App&rsquo;s</ListItem>
            <ListItem>Develop Secure Software/Websites</ListItem>
            <ListItem>Improve your UX/UI design</ListItem>
            <ListItem>SRE / Manage Deployments</ListItem>
            <ListItem>On Prem Hosting</ListItem>
            </ul>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
                href="/services"
                className="rounded-md w-25 px-3.5 bg-primary py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Know More!
              </a>
            </div>
            </div>
            </div>
          </div>
            </div>
            <div className='flex lg:order-1'>
            <img
              className="w-auto"
              src="/about.svg"
              alt="Hero"
            />
            </div>
        </div>
      </div>
    )
  }