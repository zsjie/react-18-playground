import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {

  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
}

function Layout() {
  return <>
    <Outlet />
  </>
}

function NotFound() {
  return <h1>Oops! The page is not found.</h1>
}

export default App;
