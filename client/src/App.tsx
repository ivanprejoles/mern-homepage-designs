import { BrowserRouter, Routes, Route } from "react-router-dom"

import _404 from "@/routes/_404"
import { ThemeProvider } from "@/components/ui/theme-provider"
import NavigationBar from "@/components/general/NavigationBar"
import Pages, {Routers} from "@/lib/pages-data"
import Footer from "./components/general/Footer"

function App() {
  return (
    <ThemeProvider 
      defaultTheme="dark" 
      storageKey="mern-stack-py"
    >
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="*" element={<_404 />} />
            {Routers.map((router, idx) => (
              <Route
                key={idx}
                path={router.link}
                element={<router.element />}
              />
            ))}
            {Pages.map((page, idx) => (
              <Route
                key={idx}
                path={page.href}
                element={<page.element/>}
              />
            ))}
          </Routes>
          <Footer />
        </BrowserRouter>
      {/* </main> */}
    </ThemeProvider>
  )
}

export default App
