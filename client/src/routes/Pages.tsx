import HomePages from "@/lib/pages-data";
import { Link } from "react-router-dom";

const Pages = () => {
    return (  
        <div className="relative w-full min-h-[100vh] pt-20">
            <h1 className="w-full text-center text-4xl font-serif  lg:text-5xl xl:text-5xl">Home Pages</h1>
            <div className="w-full h-auto px-5 py-10 flex flex-wrap gap-8 justify-center">
                {HomePages.map((homePage, idx) => (
                    <div className="w-[20rem] h-[20rem] flex flex-col p-2 bg-slate-100 dark:bg-black gap-4 rounded-md" key={idx}>
                        <Link to={homePage.href} className="h-[80%] object-cover rounded-lg overflow-hidden" >
                            <img src={homePage.image} className=" h-full w-full hover:scale-125 transition duration-300 ease-in-out " />
                        </Link>
                        <div className="flex-1 flex flex-col gap-2 text-black dark:text-white">
                            <h2 className="text-center text-lg line-clamp-1 text-ellipsis hover:underline">
                                <Link to={homePage.href}>
                                    {homePage.title}
                                </Link>
                            </h2>
                            <h3 className="line-clamp-2 text-ellipsis text-center">
                                {homePage.description}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Pages;