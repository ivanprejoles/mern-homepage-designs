import { Link } from "react-router-dom";
import { Github, LinkedinIcon } from "lucide-react";

import { NavigationMenus } from "@/routes/_components/navigation-menu";
import { Routers } from "@/lib/pages-data";
import { ModeToggle } from "@/components/ui/mode-toggle";

const NavigationBar = () => {
    return (  
        <header className="bg-white dark:bg-gray-900 fixed z-[1000] top-0 w-full border-b backdrop-blur-sm bg-white/[0.6] dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="h-full w-[3rem] md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600 dark:text-teal-300 h-full w-full relative" to={'/'}>
                            <span className="sr-only">Home</span>
                            <img
                                src="/assets/Ivan_homepage.svg"
                                className="w-full h-full absolute top-0 left-0 hover:scale-105"
                            />
                        </Link>
                    </div>
                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <NavigationMenus />
                                {Routers.map((router, idx) => (
                                    <li key={idx}>
                                        <Link to={router.link}>
                                            <p className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 hover:underline">
                                                {router.title}
                                            </p>                                        
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link 
                                        to="https://myportfolio-ten-lac-65.vercel.app/"
                                        target="_blank"
                                    >
                                        <p className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 hover:underline">
                                            About Me
                                        </p>                                        
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="transition ease-out delay-75 duration-300 flex flex-row rounded-md px-2 gap-2 py-2.5 text-sm font-medium bg-white text-purple-600 border border-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-white hover:text-white hover:border-white dark:bg-black dark:hover:border-black dark:hover:text-black dark:hover:to-black"
                                    href="https://github.com/ivanprejoles"
                                    target="_blank"
                                >
                                    <Github />
                                    <p className="w-auto h-auto text-center flex flex-col justify-center">
                                        My Github
                                    </p>
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="transition ease-out delay-75 duration-300 flex flex-row rounded-md px-2 gap-2 py-2.5 text-sm font-medium bg-white text-blue-600 border border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-white hover:text-white hover:border-white dark:bg-black dark:hover:border-black dark:hover:text-black dark:hover:to-black"
                                        href="https://www.linkedin.com/in/ivan-patrick-prejoles-688469248/"
                                        target="_blank"
                                    >
                                        <LinkedinIcon />
                                        <p className="w-auto h-auto text-center flex flex-col justify-center">
                                            My LinkedIn
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <ModeToggle />

                            <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path stroke="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default NavigationBar;