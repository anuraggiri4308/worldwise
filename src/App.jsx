import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
// import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Homepage />}></Route> */}
        {/* Below instead of path="/" we have written index so it will be routed automatically */}
        <Route index element={<Homepage />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="app" element={<AppLayout />}>
          {/* Below is the default children route, when none children routes matches this will be shown */}
          <Route index element={<p> Default children routes</p>}></Route>

          {/* Below are three children routes */}
          <Route path="cities" element={<p>List of cities</p>}></Route>
          <Route path="countries" element={<p>List of countries</p>}></Route>
          <Route path="form" element={<p>Form</p>}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
