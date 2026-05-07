import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProdutosPage from "./pages/ProdutosPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal com Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<ProdutosPage />} />
          {/* Futuramente, podemos adicionar uma rota para detalhes do produto */}
          {/* <Route path="produtos/:id" element={<ProdutoDetalhePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}