import Home from "@/routes/Home";
import SpacePage from "@/routes/Space/space-page"
import MinimalistPage from "@/routes/Minimalist/minimalist-page";
import PagesCollection from "@/routes/Pages";
import GamingPlatformPage from "@/routes/GamingPlatform/gaming-platform-page";
import ComplexDesign from "@/routes/ComplexDesign/complex-design";

const page = '/page'

const Pages: { title: string; href: string; description: string, element: () => JSX.Element, image: string, textColor: string}[] = [
    {    
        title: "Complex Design",
        description: "a web page layout that incorporates a high level of detail, multiple interactive elements, and sophisticated features.",
        href: `${page}/complex-design`,
        element: ComplexDesign,
        image: '/imageSlider/complexPage.png',
        textColor: 'text-[#FD70D6]'
    },
    {
        title: 'Space Exploration',
        description: 'Embark on a captivating journey of space exploration as we delve into 3D parallax space.',
        href: `${page}/space`,
        element: SpacePage,
        image: '/imageSlider/space.png',
        textColor: 'text-violet-500'
    },
    {    
        title: "Minimalist Home Page",
        description: "An aesthetic minimalist website design that emphasizes simplicity, balance, alignment, and contrast. Minimalist websites typically use lots of white space, large images, and bold typography.",
        href: `${page}/minimalist`,
        element: MinimalistPage,
        image: '/imageSlider/minimalist.png',
        textColor: 'text-[#EDD6DD]'
    },
    {    
        title: "Games Platform",
        description: "Experience a seamless and dynamic homepage! Our animated interface guides you through the platform with effortless style.",
        href: `${page}/gaming-platform`,
        element: GamingPlatformPage,
        image: '/imageSlider/gameplatform.png',
        textColor: 'text-[#22ABF0]'
    },
]

export const Routers = [
    {
        title: 'Home',
        link: '',
        element: Home
    },
    {
        title: 'Projects',
        link: 'page',
        element: PagesCollection
    },
]

export default Pages