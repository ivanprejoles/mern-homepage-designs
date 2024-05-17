// import { FormExample } from "@/components/general/form-example";
import { motion } from "framer-motion";

import { ImagesSlider } from "@/components/ui/image-slider";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish";
import Pages from "@/lib/pages-data";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

const Home = () => {
    
    const placeholders = Pages.map(page => ({title: page.title, link: page.href, textColor: page.textColor}))

    const images = Pages.map(page => ({image: page.image, link: page.href}))


    return (
        <>
            <section
                className="relative bg-cover bg-center bg-no-repeat min-h-[100vh] h-full"
            >
                <div>
                    <div
                        className="absolute inset-0 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                        
                    </div>
                    <div
                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex lg:h-screen items-center  lg:px-8"
                    >
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col items-center">
                            <h1 className="text-3xl font-extrabold sm:text-5xl w-auto text-center">
                                {`Explore Home Pages`}
                                <PlaceholdersAndVanishInput
                                    placeholders={placeholders}
                                />
                            </h1>

                            <p className="mt-4 max-w-md sm:text-xl/relaxed">
                                Discover a curated selection of high-quality homepages tailored to your needs, offering a variety of styles and functionalities for your next project.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <Link
                                    to="page"
                                    className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-950 dark:border-white border focus:outline-none focus:ring sm:w-auto"
                                >
                                    Explore Pages
                                </Link>

                                <a
                                    href="https://myportfolio-ten-lac-65.vercel.app/"
                                    target="_blank"
                                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow border-black hover:bg-gray-100 border focus:outline-none focus:ring sm:w-auto"
                                >
                                    About Me
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 h-full flex items-center justify-center sm:px-28 sm:py-20 object-cover rounded-md">
                            <ImagesSlider className="h-full" images={images}>
                                <motion.div
                                    initial={{
                                    opacity: 0,
                                    y: -80,
                                    }}
                                    animate={{
                                    opacity: 1,
                                    y: 0,
                                    }}
                                    transition={{
                                    duration: 0.6,
                                    }}
                                    className="z-50 flex flex-col justify-center items-center"
                                >

                                </motion.div>
                            </ImagesSlider>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative  bg-cover bg-center bg-no-repea">
                <img src="" className="h-full max-w-full"/>
                <div className="w-full h-full min-w-[40%]"></div>
                <img src="" alt="" />
                {/* <FormExample /> */}
            </section>  
        </>  
    );
}
 
export default Home;