// Utilitário para formatar preço em R$
const formatarPreco = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor ?? 0);

const Produto = ({ produto }) => {
  if (!produto) return null;

  return (
    <div
      className="bg-white shadow-2xl rounded-xl p-5 flex flex-col gap-2 border border-slate-400 
                 hover:scale-105 transition-transform duration-300 w-80 justify-between"
    >
      <h2 className="font-bold text-xl">{produto.nome}</h2>

      
      {Array.isArray(produto.complementos) && produto.complementos.length > 0 && (
        <ul className="text-slate-600 text-sm list-disc pl-4">
          {produto.complementos.map((comp, index) => (
            <li key={index}>{comp}</li>
          ))}
        </ul>
      )}

      {/* Preço + Botão */}
      <div className="flex justify-between items-center mt-3">
        <p className="text-slate-600">
          {formatarPreco(produto.precoUnitario)}
        </p>
        <button
          type="button"
          className="rounded-sm bg-primary text-white px-3 py-1 cursor-pointer 
                     transition-transform hover:scale-105 duration-500"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Produto;
