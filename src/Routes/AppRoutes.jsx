import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import PhotoPage from "../pages/PhotoPage/PhotoPage";
import AsteroidsPage from "../pages/AsteroidsPage/AsteroidsPage";
import NewPlanetPage from "../pages/NewPlanetPage/NewPlanetPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="nasa_photo" element={<PhotoPage />} />
        <Route path="nearby_asteroids" element={<AsteroidsPage />} />
        <Route path="submit_new_planet" element={<NewPlanetPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes