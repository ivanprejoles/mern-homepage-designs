// import { FormExample } from "@/components/general/form-example";
import { motion } from "framer-motion";

import { ImagesSlider } from "@/components/ui/image-slider";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish";
import Pages from "@/lib/pages-data";
// import { useEffect } from "react";

const Home = () => {
    
    const placeholders = Pages.map(page => page.title)

    const images = [
        '/imageSlider/1.png',
        '/imageSlider/2.png',
        '/imageSlider/3.png',
        '/imageSlider/2.png',
        '/imageSlider/3.png',
    ]


    return (
        <>
            <section
                className="relative  bg-cover bg-center bg-no-repeat"
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
                                {`Let's find your page`}
                                <PlaceholdersAndVanishInput
                                    placeholders={placeholders}
                                />
                            </h1>

                            <p className="mt-4 max-w-md sm:text-xl/relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                                numquam ea!
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                >
                                Get Started
                                </a>

                                <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                >
                                Learn More
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 h-full flex items-center justify-center md:p-3">
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
                {/* <div className="absolute flex justify-between overflow-hidden">

                </div> */}
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