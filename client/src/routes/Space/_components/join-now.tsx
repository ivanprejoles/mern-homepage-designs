import { Github, LinkedinIcon } from "lucide-react";

const JoinNow = () => {
    return (  
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-5  md:items-center justify-end px-2 antialiased relative z-40">
            <div className="h-full flex flex-col md:items-center lg:items-center justify-center pt-[40px] md:pt-[180px] gap-[50px] md:gap-[80px]">
                <div className="p-4 max-w-7xl  mx-auto relative z-10 w-full flex flex-col md:flex-row">
                    <span className="absolute w-auto h-auto flex flex-col text-5xl md:left-[10%] -top-4 ">
                        🚀
                    </span>
                    <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-purple-600 bg-opacity-50 lx:top-50">
                        Beyond the Horizon<br/> Apply Now
                    </h2>
                </div>
                <div className="flex flex-row justify-center gap-4 md:gap-[60px] w-full items-center pb-28">
                    <a href="https://github.com/ivanprejoles">
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
                                border-purple-600
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
                    </a>
                    <a href="https://www.linkedin.com/in/ivan-patrick-prejoles-688469248/">
                        <button className="relative inline-flex h-12 overflow-hidden rounded-2xl  p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-pink-400">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="gap-[10px] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-black px-6 py-1 text-sm font-medium text-pink-500 backdrop-blur-3xl border-2 bordersl border-none">
                                <LinkedinIcon />
                                My LinkedIn
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            <div className="w-full h-full justify-center relative object-cover flex items-center">
                <img src="/page_image/Space/iso_space3d.png" className="w-full absolute hover:scale-110 transition-transform ease-in-out delay-200 duration-300" />
            </div>
        </div>
    );
}
 
export default JoinNow;