import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findProductById } from '../../services/produto.service';
import { GiCancel } from 'react-icons/gi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ProdutoSelecionado = () => {
    const { id } = useParams();
    const [prod, setProd] = useState(null);
    const [quantidade, setQuantidade] = useState(1);

    const removerComplemento = (complementoId) => {
        setProd((prevProd) => ({
            ...prevProd,
            complementos: prevProd.complementos.filter(
                (comp) => comp._id !== complementoId
            ),
        }));
    };

    const aumentarQuantidade = () => setQuantidade((prev) => prev + 1);
    const diminuirQuantidade = () =>
        setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));

    useEffect(() => {
        const produto = async () => {
            const prd = await findProductById(id);
            setProd(prd);
        };

        produto();
    }, [id]);

    useEffect(() => {
        console.log(prod);
    }, [prod]);

    if (!prod) {
        return <p className="text-center text-gray-600 mt-10">Carregando produto...</p>;
    }

    return (
        <div className="flex justify-center p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-gray-800">{prod.nome}</h1>
                <p className="text-gray-600 mt-2">{prod.descricao}</p>

                <p className="text-2xl font-semibold text-green-600 mt-4">
                    R$ {prod.precoUnitario?.toFixed(2)}
                </p>

                {prod.complementos?.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-lg font-medium text-gray-700 mb-2">
                            Deseja remover algum item?
                        </h2>
                        <ul className="flex flex-wrap gap-2">
                            {prod.complementos.map((comp) => (
                                <li
                                    key={comp._id}
                                    className="flex items-center justify-center gap-4 bg-gray-100 text-gray-700 text-xl px-3 py-1 rounded-full"
                                >
                                    {comp.nome}
                                    <GiCancel
                                        onClick={() => removerComplemento(comp._id)}
                                        className="hover:cursor-pointer text-red-500 hover:text-red-700"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Seção de quantidade */}
                <div className="flex items-center justify-between mt-6">
                    <span className="text-lg font-medium text-gray-700">Quantidade:</span>
                    <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-xl select-none">
                        <AiOutlineMinus
                            onClick={diminuirQuantidade}
                            className="cursor-pointer text-xl hover:text-red-600"
                        />
                        <span className="text-xl font-bold text-slate-500">{quantidade}</span>
                        <AiOutlinePlus
                            onClick={aumentarQuantidade}
                            className="cursor-pointer text-xl hover:text-green-600"
                        />
                    </div>
                </div>

                <button className="mt-8 w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
};

export default ProdutoSelecionado;
