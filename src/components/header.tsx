import { Fragment, useState, useEffect, forwardRef } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ArrowUpIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, GlobeAltIcon, ServerIcon} from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Url } from 'next/dist/shared/lib/router/router'

const products = [
  { name: 'WebSite Development', description: 'Make your busniess grow with an amazing site that projects what you do!', href: '/services/dev/0', icon: GlobeAltIcon },
  { name: 'Software Development', description: 'Build a Software and Automate your busniess needs!', href: '/services/dev/1', icon: ComputerDesktopIcon },
  { name: 'App Development', description: 'Build an Amazing Cross Platform App for your Needs', href: '/services/dev/2', icon: DevicePhoneMobileIcon },
  { name: 'Upgrade Legacy Software', description: 'Website/App/Software Slow? Upgrade with us for a very low price', href: '/services/dev/5', icon: ArrowUpIcon },
  { name: 'UI/UX Designing', description: 'Make your customers happy by Providing them a great UI/UX', href: '/services/dev/3', icon: SquaresPlusIcon },
  { name: 'Managed DevOps', description: 'Tired of Pipelines? Cloud Accounts? Let us manage so that your can focus on your busniess', href: '/services/dev/4', icon: ArrowPathIcon },
  { name: 'On Prem Hosting', description: 'Host your code on our state of the art servers', href: '/services/onprem/0', icon: ServerIcon },
]
const callsToAction = [
  { name: 'Contact sales', href: '#talk', icon: PhoneIcon }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  
  function OnRouteChange(link: any){
    router.push(link)
  }

  return (
    <header className="bg-white border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex order-1 lg:hidden">
            <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen && (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
            {mobileMenuOpen && (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#portfolio" className="text-sm font-semibold leading-6 text-gray-900">
            Portfolio
          </a>
          <a href="#about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </a>
        </Popover.Group>
        <div className="flex justify-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ma&rsquo;mun!</span>
            <img
            className="w-auto h-12 lg:h-20" 
            src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/Mamoon-2.png?alt=media&token=f13dcfec-6677-436a-94ff-712745d872a0"
            alt="" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
                href="#talk"
                className="rounded-md px-3.5 bg-primary py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get in Touch!
              </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Mamun!</span>
              <img
                className="h-8 w-auto"
                src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/Mamoon-2.png?alt=media&token=f13dcfec-6677-436a-94ff-712745d872a0"
                alt=""
              />
            </Link>
              <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg mt-8 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                
                </Disclosure>
                <a
                  onClick={()=>{setMobileMenuOpen(false)}}
                  href="#about"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  onClick={()=>{setMobileMenuOpen(false)}}
                  href="#portfolio"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  onClick={()=>{setMobileMenuOpen(false)}}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
              <a
                href="#talk"
                onClick={()=>{setMobileMenuOpen(false)}}
                className="rounded-md px-3.5 bg-primary py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get in Touch!
              </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
