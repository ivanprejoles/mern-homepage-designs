import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import _404 from "./routes/_404"
import { ThemeProvider } from "./components/ui/theme-provider"
import NavigationBar from "./components/general/NavigationBar"
import SpacePage from "./routes/Space/space-page"
import Pages from "./lib/pages-data"

function App() {
  return (
    <ThemeProvider 
      defaultTheme="dark" 
      storageKey="mern-stack-py"
    >
      {/* <DynamicBackground /> */}
      {/* <main className="relative "> */}
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<_404 />} />
            <Route path="/page" element={<Home />} />
            {Pages.map((page, idx) => (
              <Route
                key={idx}
                path={page.href}
                element={<page.element/>}
              />
            ))}
            <Route path="/space" element={<SpacePage />} />
            <Route path="/minimalist" element={<_404 />} />
            <Route path="/progress" element={<Home />} />
            <Route path="/scroll" element={<_404 />} />
            <Route path="/tab" element={<Home />} />
            <Route path="/tooltip" element={<Home />} />
          </Routes>
        </BrowserRouter>
      {/* </main> */}
    </ThemeProvider>
  )
}

export default App
