import './lib/gaming_platform.css'

import { ReactNode, useRef } from "react";

import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap,
} from "framer-motion";
import { cn } from '@/lib/utils';
import AnimatedTextCharacter from './_components/AnimatedTextCharacter';

    const charVariants = {
        hidden: {
            opacity: 0,
        },
        reveal: {
            opacity: 1,
        },
    }

    const RotateScaleVariants = {
        hidden: {
            opacity: 0,
            rotate: -10,
            scale: 2,
            y: 20,
            x: -10
        },
        reveal: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            y: 0,
            x: 0,
        }
    }

    const TextRevealAnimation = ({
        type,
        text,
        duration,
        className
    }: {type: string, text: string, duration: number, className?: string}) => {

        const textChars = splitStringUsingRegex(text)
        if (type === 'description') {
            return (
                <motion.h2
                    className={cn(
                        'max-w-3xl min-w-4 text-center line-clamp-2 text-ellipsis font-sans text-base md:text-lg font-semibold px-4',
                        className
                    )}
                    initial="hidden"
                    whileInView="reveal"
                    transition={{staggerChildren: .005}}
                    viewport={{
                        once: false,
                        amount: 0.5
                    }}
                >
                    {textChars.map((char, index) => (
                        <motion.span
                            className='uppercase'
                            key={index}
                            variants={charVariants} 
                            transition={{duration}}
                            
                        >
                            {char}   
                        </motion.span>
                    ))}
                </motion.h2>
            )
        }

        if (type === 'button') {
            return (
                <motion.button
                    className={cn(
                        'bg-yellow-400 w-[10rem] h-auto rounded-md text-white font-extrabold py-1',
                        className
                    )}
                    variants={RotateScaleVariants}
                    initial='hidden'
                    whileInView='reveal'
                    whileTap={{ scale: 0.3 }}
                    transition={{duration, times: .5}}
                >
                    {text}
                </motion.button>
            )
        }
        
    }

    const splitStringUsingRegex = (input: string): string[] => {
        const characters: string[] = []
        const regex = /[\s\S]/gu
        let match;

        while((match = regex.exec(input)) !== null) {
            characters.push(match[0])
        }

        return characters
    }
  
  
  const MainSection = () => {
    // Main Image
    const fadeInImage = {
        initial: {
            opacity: 0,
            scale: 1.4,
            x: -197,
            y: -200,
            rotate: -4,
        },
        animate: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotate:0,
            transition: {
                delay: .3,
                duration:.6,
                stiffness: 182,
                damping: 63,
                mass: 1
            }
        },
    }
    // Main Text
    const fadeInText = {
        initial: {
            opacity: 0,
            scale: 0.7,
            x: 0,
            y: 0
        },
        animate: {
            opacity: 1,
            scale: 1.1,
            x: 0,
            y: 0,
            transition: {
                delay: .3,
                duration:.7,
                ease: [0.31, 0.4, .7, 1]
            }
        },
    }
    
    return (
        <div className="h-[100vh] w-full bg-gradient-to-r from-[#6918D0] to-[#75E0FC] relative snap-center overflow-hidden">
            <div className=" top-0 left-0 w-full h-full relative">
                <motion.img 
                    variants={fadeInText}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: false,
                        amount: 0.5
                    }}
                    src='/page_image/GamingPlatform/home_text.png' 
                    className="absolute h-1/2 md:h-3/4 top-16 md:top-0 left-0 right-0 mx-auto" 
                />
                <motion.img 
                    variants={fadeInImage}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: false,
                        amount: 0.5
                    }}
 
                    src='/page_image/GamingPlatform/HomeImage.png' 
                    className="absolute h-full top-0 left-0 right-0 mx-auto hidden md:block" 
                />
            </div>
            <div className="absolute bottom-10 left-0 right-0 w-full h-[10rem] flex flex-col items-center justify-center gap-4">
                <TextRevealAnimation 
                    className='text-white font-semibold text-sm md:text-base'
                    type='description'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    duration={.8}
                />
                <TextRevealAnimation type='button' text='Learn More' duration={.9} className='my-4' />
            </div>
        </div>
    )
  }

  interface SecondSectionProps {
    images: string[],
    cardsColor: string
  }
  
  const SecondSection = ({
    images,
    cardsColor
  }: SecondSectionProps) => {
    const ThreeGrid = {
        initial: {
            opacity: 0,
            scale: 1.7,
            x: 0,
            y: -32,
            rotate: -15,
            
        },
        animate: (number: number) => ({
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotate:0,
            transition: {
                delay: .2 * number,
                duration:.4,
                stiffness: 122,
                damping: 63,
                mass: 1
            }
        }),
    }
      
    return (
        <div className="min:h-[100vh] flex flex-col w-full bg-white dark:bg-black snap-center gap-8 px-10 overflow-hidden pb-10 py-16">
            <div className="h-auto flex flex-col items-center justify-center gap-4" >
                <h2 className="w-full md:max-w-4xl font-bold min-w-4 text-center line-clamp-1 text-ellipsis font-sans text-5xl">
                    <AnimatedTextCharacter 
                        position='bottom' 
                        className='text-2xl md:text-5xl font-extrabold'
                        text='Lorem ipsum dolor sit amet dsadsa asddsa dsa' 
                    />
                </h2>
                <TextRevealAnimation duration={.9} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' type='description' />
            </div>
            <div className="flex-1 grid grid-rows-3 md:grid-rows-1  grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((image, number) => (
                    <motion.div 
                        key={number}
                        className={cn(
                            'w-full h-full bg-gradient-to-tl from-slate-100 dark:from-gray-900 flex items-center p-5 relative',
                            cardsColor
                        )}
                        variants={ThreeGrid}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                            once:false,
                            amount: 0.5
                        }}
                        custom={number}
                    >
                        <img
                          src={image}  
                          className='w-full  object-cover'
                        />
                        <motion.div
                            className='left-0 right-0 bottom-10 w-auto mx-auto items-center flex flex-col absolute text-white'
                        >
                            <h4 className='text-base font-bold w-[70%]'>Card Date</h4>
                            <h3 className='text-xl font-bold w-[70%] text-ellipsis line-clamp-2 '>League of Legends Champion Card Animation</h3>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <div className="h-auto flex items-center flex-row justify-center">
                <TextRevealAnimation duration={.7} text='View All' type='button' />
            </div>
        </div>
    )
  }

  interface ParallaxProps {
    children: ReactNode;
    baseVelocity: number;
  }
  
    const InfiniteScrollingParallax = ({ children, baseVelocity = 7 }: ParallaxProps) => {

        const InfiniteScroll = {
            initial: {
                opacity: 0,
                scale: 1.1,
                x: -197,
                y: -142,
                rotate: -5,
            },
            animate: {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate:0,
                transition: {
                    delay: .2,
                    duration:.6,
                    stiffness: 182,
                    damping: 63,
                    mass: 1
                }
            },
        }
        
        const baseX = useMotionValue(0);
        // const []
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400,
        });
        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false,
        });

        const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

        const directionFactor = useRef<number>(1);
        useAnimationFrame((_t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();

            baseX.set(baseX.get() + moveBy);
        });
        
        return (
            <div className="game-parallax ">
            <motion.div 
                className={cn(
                    "scroller text-3xl md:text-7xl text-black dark:text-white",

                )} 
                style={{ x }}
                variants={InfiniteScroll}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: false,
                }}
            >
                    <span className='bg-clip-text text-neutral-800 dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50'>{children}</span>
                    <span className='text-yellow-200'>{children}</span>
                    <span className='bg-clip-text text-neutral-800 dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50'>{children}</span>
                    <span className='text-yellow-200'>{children}</span>
            </motion.div>
            </div>
        );
    }
  
    
    const ThirdSection = () => {
        return (
            <div className="h-[90vh] flex flex-col w-full bg-white dark:bg-black snap-center gap-8 px-10 overflow-hidden pb-10 py-16">
            <div className="h-auto flex flex-col items-center justify-center gap-4" >
                <h2 className="max-w-3xl min-w-4 text-center line-clamp-1 text-ellipsis font-sans text-5xl font-bold">
                    <AnimatedTextCharacter 
                        position='bottom' 
                        className='text-2xl md:text-5xl font-extrabold'
                        text='Lorem ipsum dolor sit amet' 
                    />
                </h2>
                {/* <TextRevealAnimation duration={.9} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' type='description' /> */}
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <InfiniteScrollingParallax baseVelocity={-5} ><i className='font-light'>League of Legends</i> <b className='font-serif font-bold'>MOBA Game</b></InfiniteScrollingParallax>
                <InfiniteScrollingParallax baseVelocity={5}><em>Legends Never Die</em> <ins>play now</ins> <sub>victory</sub></InfiniteScrollingParallax>
                <InfiniteScrollingParallax baseVelocity={-5}><b className='font-extrabold'>RIOT</b> <sup>nice scrolling</sup> <i>game platform</i></InfiniteScrollingParallax>
            </div>
        </div>
    )
}
interface FourthSectionProps {
    isLeft: boolean,
    image: string,
    bg: string,
    sndBg: string,
    lstBg: string
}

const FourthSection = ({
    isLeft = true,
    image,
    bg,
    sndBg,
    lstBg
}: FourthSectionProps) => {
    const TwoGrid = {
        initial: {
            opacity: 0,
            scale: 1.7,
            x: 0,
            y: 0,
            rotate: -8,
        },
        animate: (number: number) => ({
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,   
            rotate:0,
            IconSkewX: 115,
            IconSkewY:12,
           
            transition: {
                delay: .3 * number,
                duration:.5,
                stiffness: 182,
                damping: 63,
                mass: 1
            }
        }),
    }

    const Image = {
        initial: {
            opacity: 0,
            scale: 2,
            x: 0,
            y: -20,
            transition: {
                delay:0,
                duration:0
            }
        },
        animate: {
            opacity: 1,
            scale:1,
            x: 0,
            y: 0,
            transition: {
                delay: 0,
                duration: .4
            }
        }
    }

    const DivOpacity = {
        initial: {
            opacity: 0,
            y: -30,
            rotate: -10,
        },
        animate: {
            opacity: 1,
            y: 1,
            transition: {
                delay: .5,
                duration: 1
            }
        }
    }

    const MainOpacity = {
        initial: {
            opacity: 0,
            y: 30,
            rotate: -10,
        },
        animate: {
            opacity: 1,
            y: 1,
            transition: {
                delay: .5,
                duration: 1
            }
        }
    }

    return (
        <div className="h-[100vh] w-full  snap-center grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 overflow-hidden">
            {!isLeft && (
                <div className="flex flex-col items-center justify-center px-11 gap-4">
                    <h2 className="max-w-3xl min-w-4 text-center line-clamp-1 text-ellipsis font-sans text-5xl font-bold">
                        <AnimatedTextCharacter 
                            position='right' 
                            className='text-2xl md:text-5xl font-extrabold'
                            text='Lorem ipsum dolor' 
                        />
                    </h2>
                    <TextRevealAnimation 
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                        type='description' 
                        duration={0.9} 
                    />
                    <TextRevealAnimation text='Try it' type='button' duration={.6} className='my-4' />
                </div>
            )}
            <div className="flex flex-row items-center justify-center relative "> 
                <motion.div 
                    className={cn(
                        'w-[80%] md:w-[60%] p-10 flex items-center absolute',
                        lstBg
                    )}
                    variants={TwoGrid}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once:false,
                        amount: 0.5
                    }}
                >
                        <motion.div
                            variants={MainOpacity}
                            initial="initial"
                            whileInView="animate"
                            className={cn(
                                'absolute w-full h-full top-0 left-0 right-0',
                                sndBg
                            )}
                        >
                            <motion.img
                                src={bg}
                                variants={DivOpacity}
                                initial="initial"
                                whileInView="animate"
                                className={cn(
                                    'w-[95%] h-[95%] absolute shadow-lg -top-2',
                                    isLeft ? '-right-2' : '-left-2' 
                                )}
                            />
                        </motion.div>
                    <motion.img
                        variants={Image}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: false,
                            amount: 0.5
                        }}
                        src={image}  
                        className='h-[50%]  object-cover left-0 right-0 mx-auto relative'
                    />
                </motion.div>
            </div>
            {isLeft && (
                <div className="flex flex-col items-center justify-center px-11 gap-4">
                    <h2 className="max-w-3xl min-w-4 text-center line-clamp-1 text-ellipsis font-sans text-5xl font-bold">
                        <AnimatedTextCharacter 
                            position='right' 
                            className='text-2xl md:text-5xl font-extrabold'
                            text='Lorem ipsum dolor' 
                        />
                    </h2>
                    <TextRevealAnimation 
                        type='description' 
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                        duration={0.9} />
                    <TextRevealAnimation text='Try it' type='button' duration={.6} className='mt-4' />
                </div>
            )}
        </div>
    )
}
  
const EndSection = () => {
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
    
    return (
        <div className="text-white h-[100vh] w-full bg-gradient-to-r from-[#6918D0] to-[#75E0FC] relative snap-center overflow-hidden">
            <div className=" top-0 left-0 right-0 w-full h-full relative">
                <motion.img 
                    variants={ScaleAnimation}
                    initial="hidden"
                    whileInView="reveal"
                    src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fbackground%2Flol-wallpaper-t8jg1ygr7pvzqz8y.jpg?alt=media&token=05c8e1ba-0d9f-4942-97f5-0fff0b618081'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className="absolute bottom-10 left-0 right-0 w-full h-auto flex flex-col items-center justify-center gap-4">
                <h2 className="max-w-full md:max-w-3xl text-center line-clamp-2 text-ellipsis font-sans text-5xl font-bold">
                    <AnimatedTextCharacter 
                        position='left' 
                        className='text-3xl md:text-7xl font-extrabold'
                        text='Lorem ipsum dolor dsadsa' 
                    />
                </h2>
                <TextRevealAnimation 
                    className='font-semibold'
                    type='description'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    duration={.9}
                />
                <TextRevealAnimation type='button' text='Learn More' duration={.9} className='my-4' />
            </div>
        </div>
    )
}

const FinishSection = () => {
    const ScaleAnimation = {
        hidden: {
            opacity: 0,
            scale: 2,
        },
        reveal: {
            opacity: 1,
            scale: 1.3,
            transition: {
                duration: 1
            }
        }
    }
    
    return (
        <div className="text-white h-[100vh] w-full bg-gradient-to-r from-gray-700 to-gray-900 relative snap-center overflow-hidden">
            <div className=" top-0 left-0 right-0 w-full h-full relative flex items-center justify-center">
                <h2 className="max-w-full md:max-w-3xl text-center line-clamp-2 text-ellipsis font-sans text-5xl font-bold">
                    <AnimatedTextCharacter 
                        position='right' 
                        className='text-3xl md:text-7xl font-extrabold'
                        text='Lorem ipsum dolor, consectetur adipiscing elit , consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit' 
                    />
                </h2>
                <motion.img 
                    variants={ScaleAnimation}
                    initial="hidden"
                    whileInView="reveal"
                    src='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(10).png?alt=media&token=6a5afb80-6adb-461a-af7c-3062344965ba'
                    className='h-full  right-28 -bottom-36 absolute'
                />
            </div>
            <div className="absolute bottom-10 left-0 right-0 w-full h-[10rem] flex flex-col items-center justify-center gap-4">
                <TextRevealAnimation 
                    className='font-semibold'
                    type='description'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    duration={.9}
                />
                <TextRevealAnimation type='button' text='Learn More' duration={.9} className='my-4' />
            </div>
        </div>
    )
}

const GamingPlatform = () => {
    const mainRef = useRef(null);

    return (  
        
        <main ref={mainRef} className="p-0 max-h-[100vh] snap-mandatory snap-y py-16 overflow-y-scroll relative grid">
            {/* main section */}
            <MainSection />
            {/* grid 3 image */}
            <SecondSection 
                images={['https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(2).png?alt=media&token=35a74e1a-cd12-49c7-9d7f-8436a59cfff1','https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(9).png?alt=media&token=ed7508b9-5fe3-40d4-acce-9a171b884645','https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(3).png?alt=media&token=27e16de6-bd0b-4435-bfa7-30e105c7a7ec']}
                cardsColor ='to-red-500 dark:to-red-500'
            />
            {/* text infinite scroll */}
            <ThirdSection />
            {/* grid 2 image description */}
            <FourthSection 
                isLeft={true} 
                image='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(2).png?alt=media&token=35a74e1a-cd12-49c7-9d7f-8436a59cfff1' 
                bg='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fbackground%2FBlack%20Abstract%20Background.jpg?alt=media&token=d97da1a7-93ad-4fcd-ab2e-4aefc01a0f53' 
                sndBg='bg-gradient-to-tr from-gray-900 to-orange-600' 
                lstBg="bg-orange-300"
            />
            {/* grid 3 image */}
            <SecondSection 
                images={['https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(2).png?alt=media&token=35a74e1a-cd12-49c7-9d7f-8436a59cfff1','https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(9).png?alt=media&token=ed7508b9-5fe3-40d4-acce-9a171b884645','https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(3).png?alt=media&token=27e16de6-bd0b-4435-bfa7-30e105c7a7ec']} 
                cardsColor ='to-orange-400 dark:to-orange-400'
            />
            {/* grid 2 image description */}
            <FourthSection 
                isLeft={false} 
                image='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(9).png?alt=media&token=ed7508b9-5fe3-40d4-acce-9a171b884645' 
                bg='https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fbackground%2Fvecteezy_vector-illustration-of-modern-banner-background-for_10360646.jpg?alt=media&token=ecf0e637-71e0-4470-b96b-1a5a51cd1573' 
                sndBg='bg-gradient-to-tr from-green-600 to-black' 
                lstBg='bg-green-300'
            />
            {/* grid 3 image */}
            <SecondSection 
                images={['https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(7).png?alt=media&token=1952cf11-d03c-4f97-8afa-1f065d02a2d3','https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(4).png?alt=media&token=f9ad28b3-313b-4a3f-8fa8-95405d2beb48','https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fgame-platfrom%2Fpngwing.com%20(3).png?alt=media&token=27e16de6-bd0b-4435-bfa7-30e105c7a7ec']} 
                cardsColor ='to-pink-500 dark:to-pink-500'
            />
            {/* main section */}
            <EndSection />
            {/* main section */}
            <FinishSection />
        </main>
    );
}
 
export default GamingPlatform;