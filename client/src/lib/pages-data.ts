import MinimalistPage from "@/routes/Minimalist/minimalist-page";
import SpacePage from "@/routes/Space/space-page"

const page = '/page'

const Pages: { title: string; href: string; description: string, element: () => JSX.Element }[] = [
    {
        title: 'Space Exploration',
        description: 'Embark on a captivating journey of space exploration as we delve deeper into the mysteries of the cosmos.',
        href: `${page}/space`,
        element: SpacePage,
    },
    {    
        title: "Minimalist Home Page",
        description: "An aesthetic minimalist website design that emphasizes simplicity, balance, alignment, and contrast. Minimalist websites typically use lots of white space, large images, and bold typography.",
        href: `${page}/minimalist`,
        element: MinimalistPage
    }
]

export default Pages