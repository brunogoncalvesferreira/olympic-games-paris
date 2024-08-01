import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { LayoutDefault } from "../layout/layout-default";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  )
}