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


export default function About() {
    return (
        <div className="relative bg-white mx-auto max-w-7xl px-5 py-1 sm:px-1 sm:py-4 lg:px-1">
      <div className="mx-auto max-w-7xl py-1 sm:px-1 sm:py-4 lg:px-1">
      <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl text-center">
                About Ma&rsquo;mun
      </h2>
      <div className="grid mt-5 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 mb-5">
            <p className="bg-gray-200 p-4 text-lg leading-8 text-black text-justify">
            Welcome to Ma&rsquo;mun, your all-in-one software solutions provider! 
            Our team of experts specializes in upgrading legacy software and websites,
            providing the best UI/UX designs, managing deployments, and offering on-prem hosting.
            We understand the importance of having reliable and efficient software, 
            and we&rsquo;re here to make that happen for you.
            </p>
            <p className="bg-gray-200 p-4 mb-3 text-lg leading-8 text-white text-justify bg-primary rounded-xl">
            With Ma&rsquo;mun, 
            you can trust that your software needs are in good hands. 
            Let us help you take your business to the next level with our comprehensive software solutions. 
            Contact us today to get started!    
            </p>
            <br />
            </div>
        <div className="col-span-1 mb-5">
            <p className="bg-gray-200 p-4 text-lg leading-8 text-white text-justify bg-primary rounded-xl">
            Ma&rsquo;mun is a limited liability company (LLC) based in the UAE, with a team of 10 experts who specialize in each of our core categories.
            Our team of experts has extensive experience in their respective fields, and they work together to provide secure end-to-end solutions.

            </p>
            <br />
        </div>
        </div>
      </div>
    </div>
    )
  }