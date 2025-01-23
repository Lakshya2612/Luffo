import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader/Loader.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
const Home = React.lazy(() => import("./pages/Home.jsx"));
const Aboutus = React.lazy(() => import("./pages/Aboutus.jsx"));
const Contactus = React.lazy(() => import("./pages/Contactus.jsx"));
const Products = React.lazy(() => import("./pages/Product.jsx"));
const Notfound = React.lazy(() => import("./pages/Notfound.jsx"));
const Fotter = React.lazy(() => import("./components/Fotter/Fotter.jsx"));

function App() {
  return (
    <>
      <HelmetProvider>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Fotter />
          <ToastContainer position="top-center" style={{ marginTop: "5rem" }} />
        </Suspense>
      </HelmetProvider>
    </>
  );
}

export default App;
