import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const FavoritesPage = lazy(() =>
  import("./pages/FavoritesPage/FavoritesPage.jsx")
);

function App() {
  const routes = [
    { path: "/catalog", element: <CatalogPage /> },
    { path: "/favorites", element: <FavoritesPage /> },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
