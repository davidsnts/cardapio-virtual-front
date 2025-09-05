import { useEffect, useState } from "react";
import { getCategorias, getProdutosByCategoria } from "../../mock/data";
import Produto from "../../components/Produto";

const Home = () => {
  const [categoriasData, setCategoriasData] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [produtosFiltradosCategoria, setProdutosFiltradosCategoria] = useState([]);

  const selecionaCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  // Inicializa categorias e seleciona a primeira
  useEffect(() => {
    const categorias = getCategorias();
    setCategoriasData(categorias);
    if (categorias.length > 0) {
      selecionaCategoria(categorias[0]);
    }
  }, []);

  // Atualiza produtos quando a categoria selecionada mudar
  useEffect(() => {
    if (categoriaSelecionada) {
      setProdutosFiltradosCategoria(getProdutosByCategoria(categoriaSelecionada));
    }
  }, [categoriaSelecionada]);

  return (
    <div className="flex flex-col items-center justify-center text-slate-700 text-2xl">
      <h1>Bem vindo ao cardápio virtual</h1>

      {/* Lista de Categorias */}
      <div className="mt-5 flex flex-col items-center gap-5">
        <h1 className="color-primary font-bold">Categorias</h1>
        <ul className="flex gap-1 text-slate-500">
          {categoriasData.map((categoria, i) => (
            <li
              key={i}
              onClick={() => selecionaCategoria(categoria)}
              className={`cursor-pointer px-3 py-1 rounded-sm transition duration-300 hover:scale-105 
                ${categoriaSelecionada === categoria
                  ? "selecionada bg-primary text-white font-bold"
                  : "bg-slate-200"
                }`}
            >
              {categoria}
            </li>
          ))}
        </ul>
      </div>

      {/* Cards de Produtos */}
      {categoriaSelecionada && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {produtosFiltradosCategoria.map((produto, i) => (
            <Produto produto={produto} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
