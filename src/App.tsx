import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Product from "./pages/Product";
import RootLayout from "./pages/RootLayout";
import Service from "./pages/Service";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/industries" element={<Industries />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
      <Route path="*" element={<RootLayout />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
