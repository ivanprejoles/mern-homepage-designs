import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Routers } from "@/lib/pages-data"
import { Link } from "react-router-dom"
 
const CollapseMenu = () => {
 
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="flex md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path stroke="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            {Routers.map((router, idx) => (
                <DropdownMenuItem key={idx}>
                    <Link to={router.link} className="h-full w-full">
                        {router.title}
                    </Link>
                </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
                <Link 
                    to="https://myportfolio-ten-lac-65.vercel.app/"
                    target="_blank"
                    className="w-full h-full"
                >
                    About Me     
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CollapseMenu