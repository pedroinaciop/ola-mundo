import PaginaPadrao from "componentes/PaginaPadrao";
import NaoEncontrada from "paginas/NaoEncontrada";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import Post from "paginas/Post";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      
      <Routes>
        <Route path="" element={<PaginaPadrao/>}>
          <Route index element={<Inicio />}/>
          <Route path="sobre-mim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;


/*

Na rota "/", a estrutura a ser renderizada é:

<PaginaPadrao>
  <Inicio />
</PaginaPadrao>

Na rota "/sobre-mim", a estrutura a ser renderizada é:

<PaginaPadrao>
  <SobreMim />
</PaginaPadrao>

*/