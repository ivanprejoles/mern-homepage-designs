import './lib/banner.css'

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchInput from './_components/search-input';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
const MinimalistPage = () => {
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>()
    const [currentIndex] = useState(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const videos: any= [
        {
            videoUrl: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fhouse-outside.mp4?alt=media&token=b8fefcbe-57d8-49f2-a0a8-aa5f059fedd7',
            thumbnailUrl: '/page_image/MinimalistHouse/thumbnail/front-page/tn1_front.png',
            duration: 22
        },
        {
            videoUrl: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fhouse-furniture.mp4?alt=media&token=6078f6f1-7a1a-43fe-bcb9-4be4619c02c5',
            thumbnailUrl: '/page_image/MinimalistHouse/thumbnail/front-page/tn2_furniture.png',
            duration: 9
        },
        {
            videoUrl: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fhouse-inside.mp4?alt=media&token=5f0b3662-7a29-46d1-93d7-80192d1d1b52',
            thumbnailUrl: '/page_image/MinimalistHouse/thumbnail/front-page/tn3_inside.png',
            duration: 20
        }
    ]

    const testimonials = [
        {
          quote:
            "Furniture enjoys a long and illustrious presence in our dwellings. It changed its form and style according to the tastes of the time. The ornate baroque furniture that once graced the grand abodes of the era is now confined to the museums around the world. Many of the opulent articles of a later date like those designed by Hector Guimard, Émile Gallé or Louis Majorelle.",
          name: "Ivan",
          title: "Minimalist Furniture",
        },
        {
          quote:
            "Furniture enjoys a long and illustrious presence in our dwellings. It changed its form and style according to the tastes of the time. The ornate baroque furniture that once graced the grand abodes of the era is now confined to the museums around the world. Many of the opulent articles of a later date like those designed by Hector Guimard, Émile Gallé or Louis Majorelle.",
          name: "William Shakespeare",
          title: "Minimalist Furniture",
        },
        {
          quote: "Furniture enjoys a long and illustrious presence in our dwellings. It changed its form and style according to the tastes of the time. The ornate baroque furniture that once graced the grand abodes of the era is now confined to the museums around the world. Many of the opulent articles of a later date like those designed by Hector Guimard, Émile Gallé or Louis Majorelle.",
          name: "Ivan Again",
          title: "Minimalist Furniture",
        },
        {
          quote: "Furniture enjoys a long and illustrious presence in our dwellings. It changed its form and style according to the tastes of the time. The ornate baroque furniture that once graced the grand abodes of the era is now confined to the museums around the world. Many of the opulent articles of a later date like those designed by Hector Guimard, Émile Gallé or Louis Majorellee.",
          name: "Jane Austen",
          title: "Pride and Prejudice",
        },
        {
          quote: "Furniture enjoys a long and illustrious presence in our dwellings. It changed its form and style according to the tastes of the time. The ornate baroque furniture that once graced the grand abodes of the era is now confined to the museums around the world. Many of the opulent articles of a later date like those designed by Hector Guimard, Émile Gallé or Louis Majorelle.",
          name: "Herman Melville",
          title: "Moby-Dick",
        },
      ];

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
        <div className="h-auto w-full relative flex justify-center items-center flex-col gap-16">

            {/* front */}
            <div className="border-gray-500 text-gray-300 w-full h-[20rem] md:h-[35rem] overflow-hidden z-10 relative">
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
                <div className="w-[20rem] md:w-[40rem] h-auto mx-auto absolute left-0 right-0 bottom-[1%] md:bottom-[10%] p-8 items-center flex flex-col md:gap-4">
                    <h1 className='w-full h-auto text-center line-clamp-1 text-ellipsis text-2xl md:text-4xl font-sans font-medium text-white tracking-wider drop-shadow-2xl'>Minimalist Page</h1>
                    <h2 className='w-full text-center line-clamp-1 text-ellipsis text-balance md:text-lg text-white font-medium'> Simplicity, clean lines, and a monochromatic palette with colour used as an accent</h2>
                    <SearchInput />
                </div>
            </div>
            
            {/* columns */}
            <div className="w-full h-[30rem] grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4 p-4 xl:px-[10rem] 2xl:px-[15rem]">
                <div className='w-full h-full grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:grid-rows-2 gap-2 shadow-2xl rounded-md overflow-hidden border border-gray-300'>
                    <div className='w-full h-full bg-[#141010] flex items-center relative justify-center'>
                        <img src='/page_image/MinimalistHouse/bedroom.png' className='border-white fill-white h-[70%]' />
                    </div>
                    <div className='w-full h-full p-4 md:p-8 flex flex-col gap-2 md:gap-4 items-center'>
                        <h2 className='text-balance font-semibold md:font-normal md:text-2xl font-serif font- w-full text-center line-clamp-1 text-ellipsis'>
                            Card Title
                        </h2>
                        <h3 className=' md:font-normal text-sm md:text-lg w-full h-full line-clamp-3 text-ellipsis leading-6 text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h3>
                    </div>
                </div>
                <div className='w-full h-full grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:grid-rows-2 gap-2 shadow-2xl rounded-md overflow-hidden border border-gray-300'>
                    <div className='w-full h-full bg-[#141010] flex items-center relative justify-center'>
                        <img src='/page_image/MinimalistHouse/furniture.png' className='border-white fill-white h-[70%]' />
                    </div>
                    <div className='w-full h-full p-4 md:p-8 flex flex-col gap-2 md:gap-4 items-center'>
                        <h2 className='text-balance font-semibold md:font-normal md:text-2xl font-serif font- w-full text-center line-clamp-1 text-ellipsis'>
                            Card Title
                        </h2>
                        <h3 className='text-balance md:font-normal text-sm md:text-lg w-full h-full text-center line-clamp-3 text-ellipsis leading-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h3>
                    </div>
                </div>
                <div className='w-full h-full grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:grid-rows-2 gap-2 shadow-2xl rounded-md overflow-hidden border border-gray-300'>
                    <div className='w-full h-full bg-[#141010] flex items-center relative justify-center'>
                        <img src='/page_image/MinimalistHouse/decorating.png' className='border-white fill-white h-[70%]' />
                    </div>
                    <div className='w-full h-full p-4 md:p-8 flex flex-col gap-2 md:gap-4 items-center'>
                        <h2 className='text-balance font-semibold md:font-normal md:text-2xl font-serif font- w-full text-center line-clamp-1 text-ellipsis'>
                            Card Title
                        </h2>
                        <h3 className='text-balance md:font-normal text-sm md:text-lg w-full h-full text-center line-clamp-3 text-ellipsis leading-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h3>
                    </div>
                </div>
            </div>


            {/* video  */}
            <div className="w-full h-auto flex flex-col gap-8">
                <div className="w-full h-[30rem] flex flex-row relative py-[1px]">
                    <div className="md:w-3/4 relative right-0 ml-auto object-cover">
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
                            style={{ paddingTop: "calc(100% * (video aspect ratio) / 1)" }}
                            poster={'/page_image/MinimalistHouse/thumbnail/tn1.png'}
                            src={'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fistockphoto-1317558249-640_adpp_is.mp4?alt=media&token=6a051441-36d0-42df-bbc4-4ff1d193f75e'}
                        />
                    </div> 
                    <div className="absolute h-full w-[60%] sm:w-[65%] md:w-[60%] left-pointer flex items-center flex-row top-0 dark:before:bg-[#141010] text-black dark:text-white">
                        <div className="z-50 w-[80%] items-center justify-center hidden sm:flex">
                            <div className="max-w-full min-w-9 h-auto flex flex-col items-center justify-center gap-6">
                                <div className="overflow-hidden object-cover relative h-[5rem] w-[5rem]">
                                    <Link to={'/'}>
                                        <img src='/assets/Ivan_homepage.svg' className='absolute w-full h-full hover:scale-105' />
                                    </Link>
                                </div>
                                <p className="max-w-xs lg:max-w-md line-clamp-3 text-ellipsis leading-6 text-center font-normal text-sm md:text-xl ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                                    No Function
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[30rem] flex flex-row relative py-[1px]">
                    <div className="md:w-3/4 relative object-cover">
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
                            poster={'/page_image/MinimalistHouse/thumbnail/tn2.png'}
                            style={{ paddingTop: "calc(100% * (video aspect ratio) / 1)" }}
                            src={'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fistockphoto-1413986664-640_adpp_is.mp4?alt=media&token=6977f150-cb0e-4764-8cf9-a05ed0a92e9b'}
                        />
                    </div>
                    <div className="absolute right-0 h-full w-[60%] sm:w-[65%] md:w-[60%] right-pointer flex items-center flex-row justify-end top-0 dark:before:bg-[#141010] text-black dark:text-white">
                        <div className="z-50 w-[80%] items-center justify-center hidden sm:flex">
                            <div className="max-w-full min-w-9 h-auto flex flex-col items-center justify-center gap-6">
                                <div className="overflow-hidden object-cover relative h-[5rem] w-[5rem]">
                                    <Link to={'/'}>
                                        <img src='/assets/Ivan_homepage.svg' className='absolute w-full h-full hover:scale-105' />
                                    </Link>
                                </div>
                                <p className="max-w-xs lg:max-w-md line-clamp-3 text-ellipsis leading-6 text-center font-normal text-sm md:text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                                    No Function
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[30rem] flex flex-row relative py-[1px]">
                    <div className="right-0 ml-auto md:w-3/4 relative object-cover overflow-hidden">
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
                            poster={'/page_image/MinimalistHouse/thumbnail/tn3.png'}
                            style={{ paddingTop: "calc(100% * (video aspect ratio) / 1)" }}
                            src={'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fistockphoto-1431502874-640_adpp_is.mp4?alt=media&token=e51bd15d-426e-484a-92a7-7a8064186c1c'}
                        />
                    </div> 
                    <div className="absolute h-full w-[60%] sm:w-[65%] md:w-[60%] new-pointer  flex items-center flex-row top-0 dark:before:bg-[#141010] text-black dark:text-white">
                        <div className="z-50 w-[80%] items-center justify-center hidden sm:flex">
                            <div className="max-w-full min-w-9 h-auto flex flex-col items-center justify-center gap-6">
                                <div className="overflow-hidden object-cover relative h-[5rem] w-[5rem]">
                                    <Link to={'/'}>
                                        <img src='/assets/Ivan_homepage.svg' className='absolute w-full h-full hover:scale-105' />
                                    </Link>
                                </div>
                                <p className="max-w-xs lg:max-w-md line-clamp-3 text-ellipsis leading-6 text-center font-normal text-sm md:text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                                    No Function
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* infinite scroll */}
            <div className="h-auto w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden gap-8 pb-10">
                <div
                    className='w-full flex flex-col gap-2 items-center'
                >
                    <p className='font-extralight text-md max-w-2xl text-center line-clamp-1 text-ellipsis'>
                        Minimalist Guaranteed
                    </p>
                    <h2 className="text-balance font-semibold md:font-normal md:text-2xl font-serif font- max-w-2xl text-center line-clamp-1 text-ellipsis">
                        Minimalist Home Page
                    </h2>
                    <p className=' font-mono text-sm max-w-2xl text-center line-clamp-1 text-ellipsis'>
                        Infinite Scroll, Hover it
                    </p>
                </div>
                
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>
    );
}
 
export default MinimalistPage;