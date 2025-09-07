import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";

const ConfirmaPedido = () => {
    const { carrinho } = useCart();
    const navigate = useNavigate();
    const [dadosCliente, setDadosCliente] = useState({});

    const totalPedido = carrinho.reduce(
        (acc, item) => acc + item.precoUnitario * item.quantidade,
        0
    );

    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('usuario'));
        if (dados) {
            setDadosCliente(dados);
        }
    }, []);

    return (
        <div className="w-full flex items-center justify-center py-10">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
                <h1 className="text-2xl font-bold text-slate-700 mb-6 text-center">
                    Deseja confirmar seu pedido?
                </h1>

                <div className="flex flex-col">
                    <span className="flex gap-2 items-center"><MdLocationOn color="red" className="text-4xl" /> Endereço de entrega</span>
                    <span className="text-slate-600">{dadosCliente?.rua}, {dadosCliente.numero}. {dadosCliente?.bairro}</span>
                    <span className="text-slate-600">{dadosCliente?.complemento}</span>
                </div>

                {/* Lista de itens */}
                <ul className="divide-y divide-gray-200">
                    {carrinho.map((item) => (
                        <li
                            key={item._id}
                            className="flex justify-between items-center py-4"
                        >
                            <div>
                                <p className="text-lg font-medium text-gray-800">
                                    {item.nome}
                                </p>
                                <span className="text-sm text-gray-500">
                                    Quantidade: {item.quantidade}
                                </span>
                            </div>
                            <p className="text-green-600 font-semibold">
                                R$ {(item.precoUnitario * item.quantidade).toFixed(2)}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Resumo */}
                <div className="flex justify-between items-center mt-6 border-t pt-4">
                    <span className="text-lg font-semibold text-gray-700">Total:</span>
                    <span className="text-xl font-bold text-green-600">
                        R$ {totalPedido.toFixed(2)}
                    </span>
                </div>

                {/* Botões */}
                <div className="flex gap-4 mt-8">
                    <button onClick={() => navigate('/')} className="cursor-pointer w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-3 px-4 rounded-xl transition-colors">
                        Cancelar
                    </button>
                    <button className="cursor-pointer w-1/2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl transition-colors">
                        Confirmar Pedido
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmaPedido;
