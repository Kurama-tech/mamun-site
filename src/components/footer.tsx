import HeaderData from "./headerdata"

export default function Footer() {
    return (

        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://mamun.ae/" className="hover:underline">Mamun™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                {HeaderData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.path} className="mr-4 hover:underline md:mr-6 ">{item.name}</a>
                        </li>
                    )
                })}

            </ul>
        </footer>

    )
}

export function FooterServices() {
    return (

        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://mamun.ae/" className="hover:underline">Mamun™</a>. All Rights Reserved.
            </span>
        </footer>
    )
}