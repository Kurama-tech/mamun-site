import { CheckIcon } from '@heroicons/react/20/solid'


interface Point {
  id: number
  name: string
}

interface Service {
  name: string
  key: number
  id: string
  description: string
  text: string
  pricing: string
  imageSrc: string
  imageAlt: string
  button: string
  buttonhref: string
  points: Point[]
}

interface Mother {
  service: Service
}

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function OnPrem({service}: Mother) {
  return (
    <div className="bg-white py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.name}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.description}
          </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-3 aspect-h-2">
              <img
                className="object-contain"
                src={service.imageSrc}
                alt={service.imageAlt}
              />
            </div>
          </div>
        </div>
      </div>
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {service.text}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {service.points.map((feature) => (
                <li key={feature.id} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-lightgray py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-3">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Starting at</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{service.pricing}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">AED/month</span>
                </p>
                <a
                  href={service.buttonhref}
                  className="mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  {service.button}
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  *Terms and Conditions apply
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
