import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findProductById } from '../../services/produto.service';

const ProdutoSelecionado = () => {
    const { id } = useParams();
    const [prod, setProd] = useState(null);

    useEffect(() => {
        const produto = async () => {
            const prd = await findProductById(id);
            setProd(prd);
        };

        produto();
    }, [id]);

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
                        <h2 className="text-lg font-medium text-gray-700 mb-2">Complementos:</h2>
                        <ul className="flex flex-wrap gap-2">
                            {prod.complementos.map((comp) => (
                                <li
                                    key={comp._id}
                                    className="bg-gray-100 text-gray-700 text-xl px-3 py-1 rounded-full"
                                >
                                    {comp.nome}
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
};

export default ProdutoSelecionado;
