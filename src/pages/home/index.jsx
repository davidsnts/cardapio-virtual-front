import { useEffect, useState } from "react";
import Produto from "../../components/Produto";
import { getCategorias, getProdutosByCategoria } from '../../services/produto.service'
import ListaProdutos from "../../components/ListaProdutos";

const Home = () => {
  const [categoriasData, setCategoriasData] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [produtosFiltradosCategoria, setProdutosFiltradosCategoria] = useState([]);

  const selecionaCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  useEffect(() => {
    const getCategoriasAsync = async () => {
      const categorias = await getCategorias();
      setCategoriasData(categorias);
      selecionaCategoria(categorias[0]);
    }

    getCategoriasAsync();
  }, []);

  useEffect(() => {
    const getProdutosAsync = async () => {
      if (categoriaSelecionada) {
        const produtos = await getProdutosByCategoria(categoriaSelecionada);
        setProdutosFiltradosCategoria(produtos);
      }
    };

    getProdutosAsync();
  }, [categoriaSelecionada]);

  return (
    <div className="flex flex-col items-center justify-center text-slate-700 text-2xl">
      <h1>Bem vindo ao cardápio virtual</h1>

      {/* Lista de Categorias */}
      <div className="mt-5 flex flex-col items-center gap-5">
        <h1 className="color-primary font-bold">Categorias</h1>
        <ul className="flex gap-1 text-slate-500">
          {categoriasData.map((categoria) => (
            <li
              key={categoria}
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

      {produtosFiltradosCategoria.length > 0 && (

        <ListaProdutos produtos={produtosFiltradosCategoria} />

      )}
    </div>
  );
};

export default Home;
