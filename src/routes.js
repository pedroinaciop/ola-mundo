import PaginaPadrao from "componentes/PaginaPadrao";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import Post from "paginas/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route path="" element={<PaginaPadrao/>}>
          <Route index element={<Inicio />}/>
          <Route path="sobre-mim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post/>}/>
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>}/>
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