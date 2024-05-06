import { useEffect, useState } from "react";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handler = (e: PopStateEvent) => {
      setPath(window.location.pathname)
    }
    window.addEventListener('popstate', handler)

    return () => {
      window.removeEventListener('popstate', handler)
    }
  })

  return <>
    {path === '/' && <Home />}
    {path === '/profile' && <Profile />}
    {path === '/about' && <About />}
  </>
}

export default App;
