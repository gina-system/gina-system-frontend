import { BrowserRouter, Route, Routes as Rts } from "react-router-dom";
import Home from "./pages/Components/Views/Home";
import Register from "./pages/Components/Views/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Rts>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Rts>
    </BrowserRouter>
  );
}

export default Routes;
