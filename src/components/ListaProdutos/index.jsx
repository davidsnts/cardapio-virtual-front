import { Navigate, useNavigate } from "react-router-dom";
const ListaProdutos = ({ produtos }) => {
  const navigate = useNavigate();
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 ">
      {produtos.map((produto) => (
        <li
          key={produto._id}
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{produto.nome}</h2>
            <p className="text-gray-600 text-sm mt-2">{produto.descricao}</p>

            <p className="text-lg font-bold text-green-600 mt-4">
              R$ {produto.precoUnitario.toFixed(2)}
            </p>

            <div className="mt-4">
              {produto.complementos.length > 0 && <h3 className="text-xl text-gray-700 mb-2">Complementos:</h3>}
              <ul className="flex flex-wrap gap-2">
                {produto.complementos.map((comp) => (
                  <li
                    key={comp._id}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {comp.nome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button onClick={() => navigate(`/produtoSelecionado/${produto._id}`)} className="mt-6 bg-primary hover:scale-105 text-white font-medium py-2 px-4 rounded-sm transition-colors">
            Adicionar ao Carrinho
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListaProdutos;
