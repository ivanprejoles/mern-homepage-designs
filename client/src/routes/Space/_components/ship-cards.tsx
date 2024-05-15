import UsablePin from "@/components/general/usable-pin";
import { Meteors } from "@/components/ui/meteors";

const ships = [
    {
        title: 'Cool Ship',
        description: 'Lorem ipsum dolor sit amet',
        image: '/page_image/Space/ship_cool.png',
        background: '/page_image/Space/nebula_cloud.png'
    },
    {
        title: 'Blue Ship',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: '/page_image/Space/ship_blue.png',
        background: '/page_image/Space/cloud.png'
    },
    {
        title: 'Nice Ship',
        description: 'Lorem ipsum dolor sit amet',
        image: '/page_image/Space/ship_nice.png',
        background: '/page_image/Space/black_hole.png'
    }
]

const ShipCards = () => {
    return (  
        <>
            <div className="w-auto h-auto flex flex-col items-center gap-4 p-10 relative">
            <span className="absolute h-auto flex flex-col text-5xl left-[10%] top-0 w-auto">
                        🚀
                    </span>
                <h2 className="max-w-2xl !m-0  scroll-m-20 text-center text-4xl font-bold tracking-tight leading-snug text-transparent bg-clip-text text-neutral-800 bg-gradient-to-b from-red-500 to-purple-600 bg-opacity-50">
                    Explore the Universe <br/>Your Guide to Space Exploration
                </h2>
                <p className="max-w-lg inline-block align-top  text-center text-transparent bg-clip-text text-neutral-800 bg-gradient-to-b from-red-200 to-purple-600 bg-opacity-60 text-xl">
                    Explore the cosmos: Discoveries, missions, and wonders beyond our solar system
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-1 items-center ">
                <div className=" absolute w-full h-1/2 left-0 top-[60%]">
                    <img src="/page_image/Space/sunrise.png" alt="sunrise" className="w-full h-full"/>
                    <Meteors number={2}  />
                </div>
                {ships.map((ship, key) => (
                    <UsablePin 
                        key={key}
                        title={ship.title} 
                        background={ship.background} 
                        description={ship.description} 
                        image={ship.image}
                    />
                ))}
            </div>
        </>
    );
}
 
export default ShipCards;