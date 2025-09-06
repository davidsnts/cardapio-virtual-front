import { useNavigate } from "react-router-dom";

const ProdutoAdicionadoCarrinho = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl border border-slate-200 max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-green-600 mb-3">
                Produto adicionado ao carrinho! 🎉
            </h1>
            <span className="text-gray-600 mb-6">
                Deseja continuar comprando ou ir para o carrinho?
            </span>

            <div className="flex gap-4 w-full">
                <button onClick={() => navigate('/carrinho')} className="flex-1 bg-primary cursor-pointer text-white font-medium py-2 px-4 rounded-xl transition-colors">
                    Ir para o Carrinho
                </button>
                <button onClick={() => navigate('/')} className="flex-1 bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-xl transition-colors">
                    Continuar Comprando
                </button>
            </div>
        </div >
    );
};

export default ProdutoAdicionadoCarrinho;
