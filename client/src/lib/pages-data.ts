import Home from "@/routes/Home";
import SpacePage from "@/routes/Space/space-page"
import MinimalistPage from "@/routes/Minimalist/minimalist-page";
import PagesCollection from "@/routes/Pages";

const page = '/page'

const Pages: { title: string; href: string; description: string, element: () => JSX.Element, image: string, textColor: string}[] = [
    {
        title: 'Space Exploration',
        description: 'Embark on a captivating journey of space exploration as we delve deeper into the mysteries of the cosmos.',
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
    }
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