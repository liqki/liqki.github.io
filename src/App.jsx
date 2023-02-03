import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavLayout from "./components/NavLayout";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // prevent elements from flashing on page load
  useEffect(() => {
    const onPageLoad = () => {
      setIsLoaded(true);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    isLoaded && (
      <>
        <Routes>
          {/* nested routes to prevent the navbar from displaying on notfound page */}
          <Route element={<NavLayout isOpened={isOpened} setIsOpened={setIsOpened} />}>
            <Route index element={<Home setIsOpened={setIsOpened} />} />
            <Route path="/contact" element={<Contact setIsOpened={setIsOpened} />} />
            <Route path="/projects">
              <Route index element={<Projects setIsOpened={setIsOpened} />} />
              <Route path=":id" element={<Project setIsOpened={setIsOpened} />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
  );
}

export default App;
