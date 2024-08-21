import { BrowserRouter, Route, Routes as Rts } from "react-router-dom";
import Home from "./pages/Components/Views/Home";
import Cadastro from "./pages/Components/Views/Cadastro";

function Routes() {
  return (
    <BrowserRouter>
      <Rts>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Rts>
    </BrowserRouter>
  );
}

export default Routes;
