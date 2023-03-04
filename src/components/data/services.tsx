import {LockClosedIcon, ArrowPathIcon, BoltIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid'
const Data = [
    {
        name: 'Website Development',
        key: 1,
        id: '#website',
        discription: 'Standout with an Amazing Website',
        text: `Develop an Appealing Website that makes you unique and stand out in the crowd,
               Websites we develop are secure and always reliable, 
               website development with us is best in class and costs lesser than the market.`,
        pricing: '1000 AED',
        imageSrc: '/webdev.svg',
        imageAlt: 'Website Development',
        button: 'Get a Quote!',
        buttonhref: '/#talk',
        points: [
                {
                  name: 'Fast Load Times & Light Weight',
                  description:
                    'The Websites we develop are have extermly good performance, which makes it blazingly fast and lighter.',
                  icon: BoltIcon,
                },
                {
                  name: 'Secured',
                  description: 'Its in our policy by which we enforce https for all URLs, APIs etc, we also have a security team that provides our clients with SSL certs and Manages them.',
                  icon: LockClosedIcon,
                },
                {
                  name: 'Responsiveness',
                  description: 'All the Websites We make are Responsive and we make sure that it works on all devices/ browsers perfectly.',
                  icon: DevicePhoneMobileIcon,
                },
                {
                    name: 'Support',
                    description: `With a Website we at Ma'mun provide a fully fleged support package of 1year for Free!`,
                    icon: ArrowPathIcon,
                },
            ]
    }
]

export default Data;