import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Shop from "./components/shop/shop.component";
import Authentication from "./routes/auth/auth.component";
import Home from "./routes/home/home.component";

const App = () => {
 return (
  <Routes>
   <Route path="/" element={<Navigation />}>
    <Route index element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path="auth" element={<Authentication />} />
   </Route>
  </Routes>
 );
};

export default App;
