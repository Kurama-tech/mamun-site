/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import axios from 'axios';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("") 
  const [InvalidName, setInvalidName] = useState(true);
  const [InvalidPhone, setInvalidPhone] = useState(true);
  const [InvalidMessage, setInvalidMessage] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleEmailChange = (e: { target: { value: any } }) => {
    const emailInput = e.target.value;
    if (emailInput === ""){
      setEmail(emailInput);
      setIsValid(true);
    }
    else{
      setEmail(emailInput);
      setIsValid(validateEmail(emailInput));
    }
  };

  const handleNameChange = (e: { target: { value: any } }) => {
    const name = e.target.value;
    if (name === ""){
      setName(name);
      setInvalidName(true);
    }
    else{
      setName(name);
      setInvalidName(validateName(name));
    }
  };

  const handlePhoneChange = (e: { target: { value: any } }) => {
    const name = e.target.value;
    if (name === ""){
      setPhone(name);
      setInvalidPhone(true);
    }
    else{
      setPhone(name);
      setInvalidPhone(validatePhone(name));
    }
  };

  const handleMessageChange = (e: { target: { value: any } }) => {
    const message = e.target.value;
    if (message === ""){
      setMessage(message);
      setInvalidMessage(true);
    }
    else{
      setMessage(message);
      setInvalidMessage(validateMessage(message));
    }
  };

  const handlePost = async (email: string) => {
    const URL = 'https://us-central1-mamun-public.cloudfunctions.net/sendMailMamun'

    

    let data = {
        name: name,
        company: company,
        message: message,
        phone: phone,
        email: email
    }
    try {
      const response = await axios.post(URL, data);
      console.log(response.data)
      setLoading(false)
      setResponse(response.data)
    } catch (error) {
      setLoading(false)
      console.error(error);
      setResponse(String(error))
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setLoading(true)
    e.preventDefault();
    if (email != ""){
      console.log(email); // Replace with your desired behavior
      handlePost(email)
    }
    else {
      setIsValid(false)
    }
    
  };


  const validateEmail = (emailInput: string) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailInput);
  };

  const validateName = (emailInput: string) => {
    const nameRegex = /^.{5,}/;
    return nameRegex.test(emailInput)

  }

  const validateMessage = (emailInput: string) => {
    const nameRegex = /^.{15,}/;
    return nameRegex.test(emailInput)

  }

  const validatePhone = (phoneInput: string) => {
    const phoneRegex = /^(?:\+?\d{1,3}[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    return phoneRegex.test(phoneInput)

  }
  

  return (
    <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
      {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
      <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl text-center">
               Get in Touch
      </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Sumbit this form to get a call back or email form us!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name*
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                value={name}
                required
                onChange={handleNameChange}
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {!InvalidName && (
               <p className="mt-2 text-sm text-scarlet dark:text-scarlet"><span className="font-medium">Oops! </span>Please Make sure you have more than 4 characters!</p>
               )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email*
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                {!isValid && (
               <p className="mt-2 text-sm text-scarlet dark:text-scarlet"><span className="font-medium">Oops! </span>Please enter a valid email address!</p>
               )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number*
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                name="phone-number"
                id="phone-number"
                required
                placeholder='+971 000 555 5555'
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              {!InvalidPhone && (
               <p className="mt-2 text-sm text-scarlet dark:text-scarlet"><span className="font-medium">Oops! </span>Seems like you have entered an invalid phone</p>
               )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message*
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                value={message}
                onChange={handleMessageChange}
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {!InvalidMessage && (
               <p className="mt-2 text-sm text-scarlet dark:text-scarlet"><span className="font-medium">Oops! </span>Please Enter a Message that has atleast 20 characters</p>
               )}
            </div>
          </div>
          {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group> */}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md px-3.5 bg-primary py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Let&rsquo;s talk
          </button>
          {loading && (
          <div role="status">
            <svg aria-hidden="true" className="mt-5 w-8 h-8 mr-2 text-primary animate-spin dark:text-primary fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>)}
        </div>
        {response && (
            <p className='text-primary mt-5'>{response}</p>
        )}
      </form>
    </div>
  )
}
