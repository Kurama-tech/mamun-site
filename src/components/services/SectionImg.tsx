import { features } from "process"
import Data from "../data/services"

export default function SectionWithImg() {
  return (
    <div>
    {Data.map((service) => {
    return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id={service.id} key={service.key}>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">{service.discription}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.name}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.text}
            </p>
            <div className="mt-5">
            <a
                href={service.buttonhref}
                className="rounded-md px-3.5 bg-primary py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                {service.button}
            </a>
            </div>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {service.points.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
                </div>
            ))}
            </dl>
        </div>
        </div>
        <img
        src={service.imageSrc}
        alt={service.imageAlt}
        className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
        width={2432}
        height={1442}
        />
    </div>
    </div>
    </div>)
    })}
    </div>
  )
}
