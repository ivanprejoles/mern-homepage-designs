import { Meteors } from "@/components/ui/meteors";
import { useEffect, useState } from "react";

const MeteorTextBox = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>()
    const [currentIndex] = useState(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const videos: any= [
        {
            videoUrl: 'https://static.vecteezy.com/system/resources/previews/011/128/602/space-galaxy-and-nebula-free-video.webm',
            thumbnailUrl: '/page_image/Space/thumbnail/tn1.png',
            duration: 20
        },
        {
            videoUrl: 'https://static.vecteezy.com/system/resources/previews/022/123/282/ringed-exo-planet-space-flight-moving-between-asteroids-free-video.webm',
            thumbnailUrl: '/page_image/Space/thumbnail/tn2.png',
            duration: 20
        },
        {
            videoUrl: 'https://static.vecteezy.com/system/resources/previews/003/284/564/mp4/space-travel-universe-to-andromeda-free-video.mp4',
            thumbnailUrl: '/page_image/Space/thumbnail/tn3.png',
            duration: 20
        }
    ]
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const playNextVideo = (index: any) => {
        setData(videos[index]);
        const nextIndex = (index + 1) % videos.length;
        const timeout = setTimeout(() => playNextVideo(nextIndex), videos[index].duration * 1000);
        return () => clearTimeout(timeout);
      };
    
      useEffect(() => {
        const timeout = setTimeout(() => playNextVideo(currentIndex), 0);
        return () => clearTimeout(timeout);
      }, [currentIndex]);
    
    
    
    return (  
        <div className=" w-full relative max-w-4xl z-10">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600 to-pink-600 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-black/[.55]  border border-gray-800  px-4 pt-8 pb-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 30"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                    </svg>
                </div>
    
                <h2 className="font-bold text-xl pb-4 relative z-50 bg-gradient-to-r text-transparent bg-clip-text text-neutral-800 drop-shadow-2xl bg-opacity-60  from-pink-500 via-purple-300 to-indigo-400">
                    Exploring the Wonders of Space
                </h2>
        
                <p className="font-normal text-base pb-8 relative z-50 text-transparent bg-clip-text text-white">
                    {`Embark on a celestial journey through 'Cosmic Horizons,' where the mysteries of space unfold with breathtaking beauty and awe-inspiring discoveries, revealing the infinite wonders that lie beyond our earthly realm.`}
                </p>
                <div className="border rounded-lg  border-gray-500 text-gray-300 w-full h-[20rem] overflow-hidden z-10">
                    <video
                        className="
                            w-full
                            h-full
                            object-cover
                            brightness-[110%]
                        "
                        autoPlay
                        muted
                        loop
                        poster={data?.thumbnailUrl}
                        src={data?.videoUrl}
                    />
                </div>
        
                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
            </div>
        </div>
    );
}
 
export default MeteorTextBox;