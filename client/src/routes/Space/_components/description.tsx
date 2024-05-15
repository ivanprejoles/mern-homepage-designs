const Description = () => {
    return (  
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1  gap-5 md:items-center justify-end px-2 antialiased relative z-40">
            <div className="w-full h-full justify-center relative object-cover flex items-center">
                <img src="/page_image/Space/iso_purplebg.png" className="h-full absolute hover:scale-110 transition-transform ease-in-out delay-200 duration-300" />
            </div>
            <div className="h-full flex flex-col md:items-center lg:items-center justify-center gap-[50px] md:gap-[80px]">
                <div className="max-w-xl  mx-auto relative z-10 w-full md:pt-0 flex flex-col md:flex-row">
                    <span className="absolute w-auto h-auto flex flex-col text-5xl -left-[6%] -top-[30%] md:-top-[15%]">
                        🚀
                    </span>
                    <h2 className=" leading-loose text-xl md:text-3xl font-bold text-center bg-clip-text text-neutral-800 text-transparent bg-gradient-to-b from-red-500 to-purple-600 bg-opacity-50">
                        Schedule a consultation, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h2>
                </div>
            </div>
        </div>
    );
}
 
export default Description;
