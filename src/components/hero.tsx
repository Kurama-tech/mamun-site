import Typer from "./typer"


export default function Hero() {
    return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-1 sm:px-1 sm:py-4 lg:px-1">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Want to
                <Typer />
                - Ma&rsquo;mun!
            </h2>
            <p className="mt-6 text-lg leading-8 text-black text-justify">
            Hala! Upgrade your software, enhance your user experience, and secure your data with Mamun - your one-stop-shop for all your software needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md px-3.5 bg-primary py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get in Touch!
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-black">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 lg:mt-8">
            <img
              className="w-auto"
              src="/hero.svg"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
    )
  }