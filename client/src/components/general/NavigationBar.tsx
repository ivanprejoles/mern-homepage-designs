import { Link } from "react-router-dom";
import { Github, LinkedinIcon } from "lucide-react";

import { NavigationMenus } from "@/routes/_components/navigation-menu";
import { Routers } from "@/lib/pages-data";
import { ModeToggle } from "@/components/ui/mode-toggle";
import CollapseMenu from "./collapse-menu";

const NavigationBar = () => {
    return (  
        <header className="  fixed z-[1000] top-0 w-full border-b backdrop-blur-sm dark:backdrop-blur-sm bg-white/[0.1] dark:bg-black/[0.1] border-neutral-200/[.1] dark:border-white/[0.1]">
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
                                            <p className="text-black transition  dark:text-white hover:underline">
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
                                        <p className="text-black transition  dark:text-white  hover:underline">
                                            About Me
                                        </p>                                        
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="transition ease-out delay-75 duration-300 flex flex-row rounded-md px-2 gap-2 py-2.5 text-sm font-medium bg-white/[.1] text-purple-600 border border-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-white/[.5] hover:text-white/[.9] hover:border-white/[.9] dark:bg-black/[.1] dark:hover:border-black/[.9] dark:hover:text-black dark:hover:to-black/[.5]"
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
                                        className="transition ease-out delay-75 duration-300 flex flex-row rounded-md px-2 gap-2 py-2.5 text-sm font-medium bg-white/[.1] text-blue-600 border border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-white/[.5] hover:text-white/[.9] hover:border-white/[.9] dark:bg-black/[.1] dark:hover:border-black/[.9] dark:hover:text-black dark:hover:to-black/[.5]"
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
                            <CollapseMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default NavigationBar;