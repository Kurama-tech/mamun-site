import {LockClosedIcon, ArrowPathIcon, BoltIcon, DevicePhoneMobileIcon, BanknotesIcon} from '@heroicons/react/20/solid'
const Data = [
    {
        name: 'On Prem Servers',
        key: 1,
        id: '#host',
        description: 'Host on Prem, Its cheaper than cloud',
        text: `Mamun offers on-prem hosting services to keep your data safe and secure. We understand the importance of data security, which is why we provide a secure hosting environment for your software. Our hosting services are reliable, efficient, and scalable, making sure that your software can handle any workload.`,
        pricing: '300',
        imageSrc: '/onprem.svg',
        imageAlt: 'Host on Prem',
        button: 'Get a Quote!',
        buttonhref: '/#talk',
        points: [
                {
                    id: 1,
                    name: 'Customized Memory and CPU',
                },
                {
                    id: 2,
                    name: 'Hosted in UAE and INDIA',
                },
                {
                    id: 3,
                    name: 'Extermly Fast with Gigabit Ethernet',
                },
                {
                    id: 4,
                    name: 'Secured and Load Balanced',
                },
            ]
    }
]

export default Data;