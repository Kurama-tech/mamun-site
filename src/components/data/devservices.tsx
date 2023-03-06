import {
  LockClosedIcon, 
  ArrowPathIcon, 
  BoltIcon, 
  DevicePhoneMobileIcon, 
  UserIcon,
  CursorArrowRippleIcon,
  ArrowsPointingOutIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  PresentationChartBarIcon,
  CloudIcon,

  BanknotesIcon
} from '@heroicons/react/20/solid'
const Data = [
    {
        name: 'Website Development',
        key: 1,
        id: '#website',
        description: 'Standout with an Amazing Website',
        text: `Develop an Appealing Website that makes you unique and stand out in the crowd,
               Websites we develop are secure and always reliable, 
               website development with us is best in class and costs lesser than the market.`,
        pricing: '1000',
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
    },
    {
        name: 'Software Development',
        key: 2,
        id: '#software',
        description: 'Automate your busniess needs!',
        text: ` Ma'mun offers customized software development services. Our team of experts works closely with our clients to understand their unique needs and requirements, and then develops customized software solutions to meet those needs. We use the latest technologies and programming languages to develop high-quality, scalable, and secure software applications that help our clients streamline their operations and improve their bottom line.`,
        pricing: '2000',
        imageSrc: '/software.svg',
        imageAlt: 'Software Development',
        button: 'Get a Quote!',
        buttonhref: '/#talk',
        points: [
                {
                  name: 'Performance and Scalability',
                  description:
                    'Our Software has a high perfromace index to support all types of loads and it scales hasslefree without impacting perfromace',
                  icon: BoltIcon,
                },
                {
                  name: 'Secured',
                  description: 'All the software we make is secured,we handle security at the most priority, we also scan for vulnerabilities from time to time, ',
                  icon: LockClosedIcon,
                },
                {
                  name: 'Incredibley Low Costs',
                  description: 'We are the most cost effective, We can promise our pricing is the best in market, i.e we make software for all kinds of budgets',
                  icon: BanknotesIcon,
                },
                {
                    name: 'Support',
                    description: `With a Software we at Ma'mun provide a fully fleged support package of 1year for Free!`,
                    icon: ArrowPathIcon,
                },
            ]
    },
    {
        name: 'App Development',
        key: 3,
        id: '#app',
        description: 'Convenience on your hands',
        text: `Whether you need a simple mobile app or a complex enterprise-level solution, Mamun has the expertise and experience to deliver customized app development services that meet and exceed your expectations. Choose Mamun for all your mobile app development needs and take your business to the next level.`,
        pricing: '2000',
        imageSrc: '/appdev.svg',
        imageAlt: 'App Development',
        button: 'Get a Quote!',
        buttonhref: '/#talk',
        points: [
                {
                  name: 'Fast',
                  description:
                    'The apps we make loads quickly and respond promptly to user interactions.',
                  icon: BoltIcon,
                },
                {
                  name: 'Secured',
                  description: 'All the Apps we make are secured/ sgined and use encrypted ways to communicate.',
                  icon: LockClosedIcon,
                },
                {
                  name: 'UI/UX',
                  description: 'The apps we make are easy to use and navigate, with a clear and intuitive user interface. Users will be able to quickly and easily find the information or perform the tasks they need to',
                  icon: DevicePhoneMobileIcon,
                },
                {
                    name: 'Updates',
                    description: `The apps we build are updated regularly to fix bugs, add new features, and improve performance.`,
                    icon: ArrowPathIcon,
                },
            ]
    },
    {
        name: 'UI/UX Designing',
        key: 4,
        id: '#design',
        description: 'Better Look Better Feel!',
        text: `Mamun offers the best UI/UX design services to enhance your user experience. Our team of designers creates visually appealing and user-friendly interfaces to make your product stand out in the market. We design interfaces that are easy to use, navigate, and interact with, ensuring that your customers have a seamless experience with your product.`,
        pricing: '800',
        imageSrc: '/ui.svg',
        imageAlt: 'UI/UX design',
        button: 'Get a Quote!',
        buttonhref: '/#talk',
        points: [
                {
                  name: 'Intuitive',
                  description:
                    'Our designs are intuitive and easy to understand, so users can navigate and interact with the product without any confusion or frustration.',
                  icon: CursorArrowRippleIcon,
                },
                {
                  name: 'User-Centered:',
                  description: 'Our designs are centered around the users needs and preferences, ensuring that the user has a seamless and enjoyable experience using the product.',
                  icon: UserIcon,
                },
                {
                  name: 'Innovative',
                  description: 'Our designs are innovative, incorporating new and creative ideas that push the boundaries of what is possible and create a memorable user experience.',
                  icon: PaintBrushIcon,
                },
                {
                    name: 'Responsive',
                    description: `Our designs are responsive, adapting to different screen sizes and orientations to provide a consistent and enjoyable experience across all devices.`,
                    icon: ArrowsPointingOutIcon,
                },
            ]
    },
    {
        name: 'Managed Dev Ops',
        key: 5,
        id: '#sre',
        description: 'Struggling with managing deployments? ',
        text: `
        Mamun offers Managed DevOps Services that help businesses streamline their software development and deployment processes. Our team of DevOps experts works closely with clients to identify their unique needs and requirements, and then creates customized solutions that optimize their development workflows, increase efficiency, and reduce costs.
        `,
        pricing: '1500',
        imageSrc: '/devops.svg',
        imageAlt: 'SRE',
        button: 'Get a Quote!',
        buttonhref: '/#talk',
        points: [
                {
                  name: 'End-to-End',
                  description:
                    'We provide end-to-end DevOps services, including continuous integration and delivery (CI/CD), automated testing, containerization, and monitoring. Our DevOps services help clients achieve faster time-to-market, higher quality code, and greater collaboration between development and operations teams.',
                  icon: ArrowPathIcon,
                },
                {
                  name: 'Productivity',
                  description: 'By partnering with Mamun for Managed DevOps Services, clients can benefit from reduced downtime, increased scalability, improved security, and enhanced productivity. ',
                  icon: PresentationChartBarIcon,
                },
                {
                  name: 'Trust',
                  description: 'Our team has extensive experience working with a wide range of tools and technologies, ensuring that we can create customized solutions that meet and exceed our clients expectations.',
                  icon: ShieldCheckIcon,
                },
            ]
    },
    {
        name: 'Legacy to New Era',
        key: 6,
        id: '#sre',
        description: 'Legacy / slow softawre? Make it young! ',
        text: `
        Mamun specializes in upgrading outdated legacy software to modern technology standards. Our team of experts will analyze your existing software, identify its weaknesses, and suggest the necessary upgrades to make it more efficient, user-friendly, and secure. We use the latest technologies and tools to make sure your software is up-to-date and performing at its best.
        `,
        pricing: '3000',
        imageSrc: '/upgrades.svg',
        imageAlt: 'upgrades',
        button: 'Get a Quote!',
        buttonhref: '/#talk',
        points: [
                {
                  name: 'Migrate to Cloud',
                  description:
                    `Mamun's team of experts works with clients to identify their legacy systems, evaluate their needs and requirements, and then create a customized plan to upgrade and modernize their software. This can include migrating to cloud-based systems, replacing outdated technologies, updating software architecture, and improving system performance and security.`,
                  icon: CloudIcon,
                },
                {
                  name: 'Benifits',
                  description: 'Upgrading legacy software offers several benefits, including improved system reliability, increased scalability, reduced downtime, and improved security. Modernizing your software can also help you stay competitive by providing faster time-to-market, increased efficiency, and improved customer experience.',
                  icon: PresentationChartBarIcon,
                },
                {
                  name: 'Commitment, Communication and Trust',
                  description: `At Mamun, we understand that upgrading legacy software can be a complex process, which is why we work closely with our clients throughout the entire process to ensure a smooth transition. Our team has extensive experience working with a wide range of legacy systems and technologies, ensuring that we can create customized solutions that meet and exceed our clients' expectations.`,
                  icon: ShieldCheckIcon,
                },
            ]
    }
]

export default Data;