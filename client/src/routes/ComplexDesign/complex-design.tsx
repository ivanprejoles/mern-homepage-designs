

import './lib/complex.css'

import { faImage, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';
import {
    motion,
} from "framer-motion";

import { InfiniteVerticalMovingCards } from '@/components/ui/infinite-vertical-moving-cards'
import { Button } from '@/components/ui/button';
import UsablePin from '@/components/general/usable-pin';
import { Github, LinkedinIcon } from 'lucide-react';

const ScaleAnimation = {
    hidden: {
        opacity: 0,
        scale: 1.4,
    },
    reveal: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }
    }
}
const delayScaleAnimation = {
    hidden: {
        opacity: 0,
        scale: 1,
    },
    reveal: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            delay: 1,
        }
    }
}
const opacityAnimation = {
    hidden: {
        opacity: .2,
        y: 0
    },
    reveal: {
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
        }
    }
}
const positionAnimation = {
    hidden: {
        y: 100,
        opacity: .2,
    },
    reveal: {
        y:0,
        opacity:1,
        transition: {
            duration: .6,
        }
    }
}
const delayPositionAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    reveal: {
        y:0,
        opacity:1,
        transition: {
            duration: .6,
            delay:.2
        }
    }
}

const ComplexDesign = () => {
    
    const products = [
        {
          title: "Moonbeam",
          link: "https://gomoonbeam.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
        },
        {
          title: "Cursor",
          link: "https://cursor.so",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cursor.png",
        },
        {
          title: "Rogue",
          link: "https://userogue.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/rogue.png",
        },
       
        {
          title: "Editorially",
          link: "https://editorially.org",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editorially.png",
        },
        {
          title: "Editrix AI",
          link: "https://editrix.ai",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editrix.png",
        },
        {
          title: "Pixel Perfect",
          link: "https://app.pixelperfect.quest",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },
       
        {
          title: "Algochurn",
          link: "https://algochurn.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
          title: "Aceternity UI",
          link: "https://ui.aceternity.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },
        {
          title: "SmartBridge",
          link: "https://smartbridgetech.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
        },
        {
          title: "Renderwork Studio",
          link: "https://renderwork.studio",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
        },
       
        {
          title: "Creme Digital",
          link: "https://cremedigital.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
        },
        {
          title: "Golden Bells Academy",
          link: "https://goldenbellsacademy.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
        },
        {
          title: "Invoker Labs",
          link: "https://invoker.lol",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
        },
        {
          title: "E Free Invoice",
          link: "https://efreeinvoice.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
        },
      ];
    
      const ships = [
        {
            title: 'Cool Badge',
            description: 'Cool badge with cool background.',
            image: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2FIconarchive-Badge-Trophy-Badge-Trophy-09.512.png?alt=media&token=a96004f7-c8d8-463b-8144-3524906179a8',
            background: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fbg%2Fwallpaperflare.com_wallpaper.jpg?alt=media&token=d0f60179-87a7-4a4d-8794-9972d2838ff6'
        },
        {
            title: 'Nice Badge',
            description: 'Nice badge with nice background!',
            image: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2FIconarchive-Badge-Trophy-Badge-Trophy-11.512.png?alt=media&token=8e2aff0c-b623-4696-82ac-c0273ca7d06c',
            background: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fbg%2Fpink_violet_gradient_glowing_particles_background_hd_abstract.jpg?alt=media&token=62eb89e3-3c29-409e-9132-a8e6774637c6'
        },
        {
            title: 'Best Badge',
            description: 'This is much better!',
            image: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2FIconarchive-Badge-Trophy-Badge-Trophy-16.512.png?alt=media&token=b70897dc-3a49-4c84-a91d-e5dbea8cd9f9',
            background: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fbg%2Fblack-and-purple-futuristic-abstract-994gbb2x9x12lpe3.jpg?alt=media&token=8e05aa26-a0e7-4e83-855d-71d3bdcb7f01'
        }
    ]
      
    
  return (
    <main className='text-[#fafafa] mona-sans h-auto w-full relative flex justify-center items-center flex-col p-0 bg-black' role='main' aria-label='Main Complex Design'>
        <article className='w-full h-auto flex flex-col' aria-label='Complex Design' role='article' aria-labelledby='Complex Design'>
            <section role='section' aria-label='Main Section' className="w-full h-[50rem] relative">
                <div className="w-full h-full relative">
                    <motion.div
                        variants={delayScaleAnimation}
                        viewport={{
                            once: true
                        }}
                        initial="hidden"
                        whileInView="reveal"
                        className="absolute top-0 left-0 right-0 mx-auto pointer-events-none inset-0 flex items-center w-full h-full justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
                    ></motion.div>
                    <motion.img 
                        variants={ScaleAnimation}
                        viewport={{
                            once: true
                        }}
                        initial="hidden"
                        whileInView="reveal"
                        src="/page_image/ComplexPage/gradient-bg.jpg" 
                        className='w-full h-full object-cover' 
                    />
                </div>
                <motion.div 
                    variants={positionAnimation}
                    viewport={{
                        once: true
                    }}
                    initial="hidden"
                    whileInView="reveal"
                    className="absolute w-full h-[20rem] bottom-0 left-0 right-0 m-auto"
                >
                    <div className=" w-full h-[20rem] bottom-0 left-0 right-0 mx-auto absolute bg-gradient-to-t from-black via-black to-transparent" />
                    <div 
                        className="w-full md:w-[90%] lg:w-[50%] h-full absolute bottom-0 left-0 right-0 mx-auto flex flex-col gap-6"
                    >
                        <h1 
                            className='font-bold text-3xl sm:text-6xl text-center h-auto p-1'
                        >
                            Build Your Website Application
                        </h1>
                        <div className="flex-1 mt-2 flex flex-col  w-full">
                            <p
                                className='text-center h-auto md:px-10'
                            >
                                Make a website application that is more user-friendly. Ivan is here to build your homepage design to the next level.
                            </p>
                            <div 
                                className="flex-row flex justify-center items-start gap-9 p-8"
                            >
                                <Link to='https://www.linkedin.com/in/ivan-patrick-prejoles/' target='_blank'>
                                <button className="relative inline-flex h-12 overflow-hidden rounded-2xl  p-[1px] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-400">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="gap-[10px] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-black px-6 py-1 text-sm font-medium text-pink-500 backdrop-blur-3xl border-2 bordersl border-none">
                                        <LinkedinIcon />
                                        My LinkedIn
                                    </span>
                                </button>
                                </Link>
                                <Link to='https://github.com/ivanprejoles' target='_blank'>
                                    <button 
                                        className="
                                            gap-[10px] 
                                            inline-flex 
                                            h-12 
                                            animate-shimmer 
                                            items-center 
                                            justify-center
                                            rounded-2xl 
                                            border 
                                            border-pink-600
                                            bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                                            bg-[length:200%_100%] 
                                            px-2
                                            md:px-6 
                                            font-medium 
                                            text-pink-500 
                                            transition-colors 
                                            focus:outline-none 
                                            focus:ring-2
                                            focus:ring-red-400
                                            focus:ring-offset-2 
                                            focus:ring-offset-cyan-50"
                                    >
                                        <Github />
                                        My Github
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
            <section className='w-full h-auto block' aria-label='Second Section' aria-labelledby='Images Section'>
                <div className="h-[2rem] md:h-[5rem] w-full bg-black" />  
                <div className="w-full h-[15rem] bg-black flex flex-col items-center justify-center">
                    <motion.div 
                        className="w-full lg:w-3/4 h-2/3 flex flex-col items-center gap-4"
                        variants={opacityAnimation}
                        viewport={{
                            once: true
                        }}
                        initial="hidden"
                        whileInView="reveal"
                    >
                        <strong className='font-bold sm:text-lg line-clamp-1 text-[#FFD9D9] tracking-wide'>See Others' Website</strong>
                        <h2 className='font-semibold text-3xl md:text-5xl line-clamp-1  tracking-wide p-1'>Websites Not Mine</h2>
                        <p className='line-clamp-2 text-center md:line-clamp-1 text-sm md:text-base text-gray-300 tracking-wide '>Infinite moving cards makes it better to see website images.</p>
                    </motion.div>
                </div>
                <div 
                    className="w-full h-[70rem] bg-[#0E0D1C] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <InfiniteVerticalMovingCards
                        items={products}
                        direction="left"
                        speed="slow"
                        pauseOnHover={false}
                        />
                    <InfiniteVerticalMovingCards
                        items={products}
                        direction="right"
                        speed="slow"
                        pauseOnHover={false}
                        className='hidden sm:block'
                        />
                    <InfiniteVerticalMovingCards
                        items={products}
                        direction="left"
                        speed="slow"
                        className='px-0 hidden lg:block'
                        pauseOnHover={false}
                    />
                    <div className="z-[21] w-full h-[10rem] top-0 left-0 right-0 mx-auto absolute bg-gradient-to-t from from-transparent via-black to-black" />
                    <div className="z-[21] w-full h-[10rem] bottom-0 left-0 right-0 mx-auto absolute bg-gradient-to-t from-[#17152F] via-[#17152F] to-transparent" />
                </div>
                <div className="h-[5rem] w-full bg-[#17152F]" />
            </section>
            <section className="w-full h-auto block bg-[#17152F]" aria-label='Third Section' aria-labelledby='Images Section'>
                <div className="w-full h-[15rem] bg-[#17152F] flex flex-col items-center justify-center">
                    <motion.div 
                        variants={opacityAnimation}
                        viewport={{
                            once: true
                        }}
                        initial="hidden"
                        whileInView="reveal"
                        className="w-full lg:w-3/4 h-2/3 flex flex-col items-center gap-4"
                    >
                        <strong className='font-bold sm:text-lg line-clamp-1 text-[#FFD9D9] tracking-wide'>React Skills</strong>
                        <h2 className='font-semibold text-3xl md:text-5xl line-clamp-2 md:line-clamp-1 text-center tracking-wide p-1'>React Skills Building UI</h2>
                        <p className='line-clamp-2 text-center md:line-clamp-1 text-sm md:text-base text-gray-300 tracking-wide '>Skilled at integrating pre-built React components. Simple and to the point</p>
                    </motion.div>
                </div>
                <div 
                    className="h-[70rem] md:h-[47rem] w-full flex items-center justify-center"
                >
                    <div className="w-full h-full rounded-3xl md:w-[80%] md:h-[80%] grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-10">
                        <motion.div 
                            variants={positionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="rounded-3xl overflow-hidden flex flex-col border border-slate-600"
                        >
                            <div className="h-[50%] md:h-[70%] overflow-hidden">
                                <img 
                                    src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fcontent-image%2F5172543.jpg?alt=media&token=59aed34a-fc28-49a0-8ce1-d6f64bac275b' 
                                    className='w-full h-full object-cover hover:scale-125 hover:-skew-x-3 transition-all duration-700 ease-in-out' 
                                />
                            </div>
                            <div className="overflow-hidden flex-1 flex  flex-col p-7 gap-6 bg-[#23213A]">
                                <div className='md:h-[4rem] flex flex-col'>
                                    <h3 className="w-full text-xl md:text-3xl font-semibold text-center line-clamp-2 md:line-clamp-1 text-ellipsis">Integrates Component UI</h3>
                                    <p className='flex-1 text-center line-clamp-2 md:line-clamp-1'>Builds easy to maintain usable Component Design!</p>
                                </div>
                                <div className="flex-1 flex flex-row items-center justify-center gap-2">
                                    <Button variant="outline" className='bg-transparent border-white'>Just A Button</Button>
                                    <Button variant="outline" className='bg-transparent border-white'>No Function</Button>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={delayPositionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="rounded-3xl overflow-hidden flex flex-col border border-slate-600"
                        >
                            <div className="h-[50%] md:h-[70%] overflow-hidden">
                                <img 
                                    src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fcontent-image%2F7045877.jpg?alt=media&token=82bf674c-a317-4a03-9a0f-16668ae99119' 
                                    className='w-full h-full object-cover hover:scale-125 hover:skew-x-3 transition-all duration-700 ease-in-out' 
                                />
                            </div>
                            <div className="overflow-hidden flex-1 flex flex-col p-7 gap-6 bg-[#23213A]">
                                <div className='md:h-[4rem] flex flex-col'>
                                    <h3 className="w-full text-     xl md:text-3xl font-semibold text-center line-clamp-2 md:line-clamp-1 text-ellipsis">React Developer</h3>
                                    <p className='flex-1 text-center line-clamp-2 md:line-clamp-1'>Builds components and homepage designs using React!</p>
                                </div>
                                <div className="flex-1 flex flex-row items-center justify-center gap-2">
                                    <Button variant="outline" className='bg-transparent border-white'>For Component</Button>
                                    <Button variant="outline" className='bg-transparent border-white'>Purpose Only</Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="h-[5rem] w-full bg-[#17152F]" />
            </section>
            <section className="w-full h-auto block bg-[#17152F]" aria-label="Fourth Section" aria-labelledby="Badge Section">
                <div className="w-full h-[15rem] bg-[#17152F] flex flex-col items-center justify-center">
                    <motion.div 
                        variants={opacityAnimation}
                        viewport={{
                            once: true
                        }}
                        initial="hidden"
                        whileInView="reveal"
                        className="w-full lg:w-3/4 h-2/3 flex flex-col items-center gap-4"
                    >
                        <strong className='font-bold md:text-lg line-clamp-1 text-[#FFD9D9] tracking-wide'>Integrated UI Library</strong>
                        <h2 className='font-semibold text-3xl md:text-5xl line-clamp-2 md:line-clamp-1 text-center  tracking-wide p-1'>Beautiful Integrated Cards</h2>
                        <p className='line-clamp-2 text-center md:line-clamp-1 text-sm md:text-base text-gray-300 tracking-wide '>Explore one of my designs integrated from well-known UI Library.</p>
                    </motion.div>
                </div>
                <motion.div 
                    variants={positionAnimation}
                    viewport={{
                        once: true
                    }}
                    initial="hidden"
                    whileInView="reveal"
                    className="flex w-full flex-wrap h-auto xl:h-[30rem] py-14 flex-col md:flex-row gap-10 md:gap-1 items-center justify-center "
                >
                    {ships.map((ship, key) => (
                        <UsablePin
                            className="text-white bg-[#23213A] border-slate-600" 
                            containerClassName='scale-125'
                            key={key}
                            title={ship.title} 
                            background={ship.background} 
                            description={ship.description} 
                            image={ship.image}
                        />
                    ))}
                </motion.div>
                <div className="h-[5rem] w-full bg-[#17152F]" />
            </section>
            <section className="w-full h-auto block bg-[#17152F]" aria-label='Fifth Section' aria-labelledby='Information Section'>
                <div className="w-full h-[15rem] bg-[#17152F] flex flex-col items-center justify-center">
                    <motion.div 
                        variants={opacityAnimation}
                        viewport={{
                            once: true
                        }}
                        initial="hidden"
                        whileInView="reveal"
                        className="w-full lg:w-3/4 h-2/3 flex flex-col items-center gap-4"
                    >
                        <strong className='font-bold md:text-lg line-clamp-1 text-[#FFD9D9] tracking-wide'>About Me</strong>
                        <h2 className='font-semibold text-3xl md:text-5xl line-clamp-2 md:line-clamp-1 text-center  tracking-wide p-1'>The Creator Behind This</h2>
                        <p className='line-clamp-2 text-center md:line-clamp-1 text-sm md:text-base text-gray-300 tracking-wide'>Ivan Prejoles, MERN and NextJS developer.</p>
                    </motion.div>
                </div>
                {/* images zigzag */}

                <div 
                    className="h-auto w-full lg:px-[5rem]"
                >
                    <div className="h-auto md:h-[30rem] w-full grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
                        <motion.div 
                            variants={positionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center row-start-2 md:row-start-1"
                        >
                            <div className="w-[80%] h-[70%] flex flex-col place-items-start justify-center gap-2 md:p-[3rem]">
                                <div className="bg-transparent border border-gray-600 p-[9px] rounded-md w-[46px] flex justify-center items-center mb-2">
                                    <FontAwesomeIcon
                                        className="circle awesomesvg w-full h-full"
                                        icon={faChartBar}
                                        mask={faSquareFull}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold tracking-wider">Learns At My Own Pace</h3>
                                <p className='tracking-wider'>Adaptable and Self-motivated learner, comfortable adjusting my pace to master new skills while collaborating effectively with teammates.</p>
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={delayPositionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="w-[80%] h-[70%] flex flex-col items-start justify-center">
                                <img 
                                    src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fcontent-image%2Fopenart-image_CE3NyY5N_1717299510693_raw-removebg-preview.png?alt=media&token=1eeefbf4-7080-43c4-b1e2-5584038be41b' 
                                    className='w-full lg:w-[80%] h-full object-cover hover:scale-105 transition-all' 
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="h-auto md:h-[30rem] w-full grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
                        <motion.div 
                            variants={positionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="w-[80%] h-[70%] flex flex-col items-end justify-center">
                                <img 
                                    src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fcontent-image%2Fopenart-image_noRxbmHR_1717300631384_raw-removebg-preview.png?alt=media&token=60508449-22cb-44d4-9b3c-8a45f493f115' 
                                    className='w-full lg:w-[80%] h-full object-cover hover:scale-105 transition-all' 
                                />
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={delayPositionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center "
                        >
                            <div className="w-[80%] h-[70%] flex flex-col place-items-start justify-center gap-2 md:p-[3rem]">
                                <div className="bg-transparent border border-gray-600 p-[9px] rounded-md w-[46px] flex justify-center items-center mb-2">
                                    <FontAwesomeIcon
                                        className="circle awesomesvg w-full h-full"
                                        icon={faChartBar}
                                        mask={faSquareFull}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold tracking-wider">Collaboration Skill</h3>
                                <p className='tracking-wider'>Can collaborate with teamwork skills. I can effectively work with others towards a common goal, sharing ideas, delegating tasks, and compromising when necessary.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="h-auto md:h-[30rem] w-full grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
                        <motion.div 
                            variants={positionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center row-start-2 md:row-start-1"
                        >
                            <div className="w-[80%] h-[70%] flex flex-col place-items-start justify-center gap-2 md:p-[3rem]">
                                <div className="bg-transparent border border-gray-600 p-[9px] rounded-md w-[46px] flex justify-center items-center mb-2">
                                    <FontAwesomeIcon
                                        className="circle awesomesvg w-full h-full"
                                        icon={faImage}
                                        mask={faSquareFull}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold tracking-wider">Gets Better, Faster</h3>
                                <p className='tracking-wider'>Can accelerate my skill development through hands-on projects, propelling my career with confidence.</p>
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={delayPositionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="w-[80%] h-[70%] flex flex-col justify-center">
                                <img 
                                    src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fcontent-image%2Fopenart-image_2yQENQ0r_1717299442236_raw-removebg-preview.png?alt=media&token=f5730d84-f6bc-430d-98eb-1622b0b11b0a' 
                                    className='w-full lg:w-[80%] h-full object-cover hover:scale-105 transition-all' 
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="h-auto md:h-[30rem] w-full grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
                        <motion.div 
                            variants={positionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="w-[80%] h-[70%] flex flex-col items-end justify-center">
                                <img 
                                    src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fcontent-image%2Fopenart-image_bqTTPcXT_1717302150919_raw-removebg-preview.png?alt=media&token=c4677801-10df-4f24-8332-5102d6ec3792' 
                                    className='w-full lg:w-[80%] h-full object-cover hover:scale-105 transition-all' 
                                />
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={delayPositionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="w-[80%] h-[70%] flex flex-col place-items-start justify-center gap-2 md:p-[3rem]">
                                <div className="bg-transparent border border-gray-600 p-[9px] rounded-md w-[46px] flex justify-center items-center mb-2">
                                    <FontAwesomeIcon
                                        className="circle awesomesvg w-full h-full"
                                        icon={faChartBar}
                                        mask={faSquareFull}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold tracking-wider">Certified React UI Dev</h3>
                                <p className='tracking-wider'>builds a high-quality homepage with interactive and reusable UI components using React within a short timeframe.</p>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="h-auto md:h-[30rem] w-full grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
                        <motion.div 
                            variants={positionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center row-start-2 md:row-start-1"
                        >
                            <div className="w-[80%] h-[70%] flex flex-col place-items-start justify-center gap-2 md:p-[3rem]">
                                <div className="bg-transparent border border-gray-600 p-[9px] rounded-md w-[46px] flex justify-center items-center mb-2">
                                    <FontAwesomeIcon
                                        className="circle awesomesvg w-full h-full"
                                        icon={faChartBar}
                                        mask={faSquareFull}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold tracking-wider">Actively Learning React</h3>
                                <p className='tracking-wider'>Updated React developer with a focus on best practices.</p>
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={delayPositionAnimation}
                            viewport={{
                                once: true
                            }}
                            initial="hidden"
                            whileInView="reveal"
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="w-[80%] h-[70%] flex flex-col items-center justify-center">
                                <img 
                                    src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fcomplex%2Fcontent-image%2Fopenart-image_47Oxn4Lq_1717302368365_raw-removebg-preview.png?alt=media&token=f8b621d5-b0db-402c-ad4f-edf6cf909ac3' 
                                    className='w-full lg:w-[80%] h-full object-cover hover:scale-105 transition-all' 
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="h-[2rem] md:h-[5rem] w-full bg-[#17152F]" />
            </section>
        </article>
    </main>
  )
}

export default ComplexDesign