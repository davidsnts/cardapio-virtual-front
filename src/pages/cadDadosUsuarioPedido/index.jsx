import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CadDadosUsuarioPedido = () => {
    const navigate = useNavigate();

    const [dados, setDados] = useState({
        nome: "",
        bairro: "",
        rua: "",
        numero: "",
        complemento: "",
        formaPagamento: "Pix",
        troco: ""
    });

    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("usuario", JSON.stringify(dados));
        navigate("/confirmarPedido");
    };

    const getDadosStorage = () => {
        const dadosStorage = localStorage.getItem("usuario");
        if (dadosStorage) {
            const dadosJSON = JSON.parse(dadosStorage);
            setDados(dadosJSON);
        }
    };

    useEffect(() => {
        getDadosStorage();
    }, []);

    return (
        <div className="mt-10 w-full flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center bg-white px-8 pb-8 py-4 rounded-2xl shadow-2xl w-full max-w-2xl"
            >
                <h2 className="text-2xl font-bold text-slate-600 text-center mb-8">
                    Dados para Entrega
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Campos de endereço */}
                    <div className="flex flex-col">
                        <label htmlFor="nome" className="mb-2 text-gray-700 font-medium">
                            Nome e Sobrenome
                        </label>
                        <input
                            required
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome completo"
                            value={dados.nome}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="bairro" className="mb-2 text-gray-700 font-medium">
                            Bairro
                        </label>
                        <input
                            required
                            type="text"
                            id="bairro"
                            name="bairro"
                            placeholder="Bairro para entrega"
                            value={dados.bairro}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="rua" className="mb-2 text-gray-700 font-medium">
                            Rua
                        </label>
                        <input
                            required
                            type="text"
                            id="rua"
                            name="rua"
                            placeholder="Rua para entrega"
                            value={dados.rua}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="numero" className="mb-2 text-gray-700 font-medium">
                            Número
                        </label>
                        <input
                            required
                            type="text"
                            id="numero"
                            name="numero"
                            placeholder="Nº para entrega"
                            value={dados.numero}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        />
                    </div>

                    <div className="flex flex-col md:col-span-2">
                        <label htmlFor="complemento" className="mb-2 text-gray-700 font-medium">
                            Complemento
                        </label>
                        <input
                            type="text"
                            id="complemento"
                            name="complemento"
                            placeholder="Exemplo: Ap 203"
                            value={dados.complemento}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        />
                    </div>

                    {/* Forma de pagamento */}
                    <div className="flex flex-col md:col-span-1">
                        <label htmlFor="formaPagamento" className="mb-2 text-gray-700 font-medium">
                            Forma de Pagamento
                        </label>
                        <select
                            id="formaPagamento"
                            name="formaPagamento"
                            value={dados.formaPagamento}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        >
                            <option value="Pix">Pix</option>
                            <option value="Cartão">Cartão</option>
                            <option value="Dinheiro">Dinheiro</option>
                            
                        </select>
                    </div>

                    {/* Troco - aparece apenas se pagamento for Dinheiro */}
                    {dados.formaPagamento === "Dinheiro" && (
                        <div className="flex flex-col md:col-span-1">
                            <label htmlFor="troco" className="mb-2 text-gray-700 font-medium">
                                Troco para
                            </label>
                            <input
                                type="number"
                                id="troco"
                                name="troco"
                                placeholder="Informe o valor"
                                value={dados.troco}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                            />
                        </div>
                    )}
                </div>

                <button className="mt-10 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors">
                    Confirmar Dados para Entrega
                </button>
            </form>
        </div>
    );
};

export default CadDadosUsuarioPedido;
