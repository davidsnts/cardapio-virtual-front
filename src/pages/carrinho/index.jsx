import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
    const { carrinho, updateQtdItem, removeItem } = useCart();
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const calcularTotal = () => {
            const soma = carrinho.reduce(
                (acc, item) => acc + item.precoUnitario * item.quantidade,
                0
            );
            setTotal(soma);
        };
        calcularTotal();
    }, [carrinho]);

    if (carrinho.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64">
                <h1 className="text-gray-600 text-xl font-medium">
                    Seu carrinho está vazio 🛒
                </h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center p-6 select-none">
            <h1 className="text-green-600 text-2xl font-bold mb-6 select-none">
                Seu carrinho de compras
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                <div className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6">
                    <ul className="divide-y divide-gray-200">
                        {carrinho.map((item) => (
                            <li
                                key={item._id}
                                className="flex items-center justify-between py-4"
                            >
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-800">
                                        {item.nome}
                                    </span>
                                    <ul className="text-gray-600  md:w-72">
                                        {item.complementos.map((comp) => (
                                            <li className="list-disc list-inside" key={comp._id}>{comp.nome}</li>
                                        ))}
                                    </ul>
                                    {item.observacao &&
                                        <span className="text-gray-600">
                                            Observação: {item.observacao}
                                        </span>}

                                    <span className="text-sm text-gray-500">
                                        R$ {item.precoUnitario.toFixed(2)} / un
                                    </span>
                                </div>

                                {/* Controle de quantidade */}
                                <div className="flex items-center gap-3 mx-4">
                                    <AiOutlineMinus
                                        onClick={() =>
                                            updateQtdItem(item._id, item.quantidade - 1)
                                        }
                                        className="cursor-pointer text-xl hover:text-red-600"
                                    />
                                    <span className="text-lg font-bold">{item.quantidade}</span>
                                    <AiOutlinePlus
                                        onClick={() =>
                                            updateQtdItem(item._id, item.quantidade + 1)
                                        }
                                        className="cursor-pointer text-xl hover:text-green-600"
                                    />
                                </div>

                                {/* Subtotal + Remover */}
                                <div className="flex items-center gap-4">
                                    <span className="font-semibold text-gray-800">
                                        R$ {(item.precoUnitario * item.quantidade).toFixed(2)}
                                    </span>
                                    <GiCancel
                                        onClick={() => removeItem(item._id)}
                                        className="cursor-pointer text-red-500 hover:text-red-700 text-xl"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-50 shadow-lg rounded-2xl p-6 flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Resumo da Compra
                    </h2>
                    <div className="flex justify-between text-lg mb-6">
                        <span>Total:</span>
                        <span className="font-bold text-green-600">
                            R$ {total.toFixed(2)}
                        </span>
                    </div>
                    <button onClick={() => navigate('/')} className="w-full mb-4 bg-slate-200 hover:bg-slate-300 text-slate-600 font-medium py-3 px-4 rounded-sm transition-colors cursor-pointer">
                        Voltar
                    </button>
                    <button onClick={() => navigate('/dadosUsuarioPedido')} className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-sm transition-colors cursor-pointer">
                        Finalizar Compra
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Carrinho;
