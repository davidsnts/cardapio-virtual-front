import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { BsCart3 } from "react-icons/bs";
import { useState, useEffect } from "react";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
    const navigate = useNavigate();
    const { carrinho } = useCart();
    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState();
    const [dadosUsuario, setDadosUsuario] = useState({});

    useEffect(() => {
        const dados = localStorage.getItem('usuario');
        if (dados) {
            setDadosUsuario(JSON.parse(dados));
        }
    }, []);


    const handleLogout = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('carrinho');
        setQuantidadeCarrinho(0);
        setDadosUsuario({})
        navigate('/');
    }

    useEffect(() => {
        setQuantidadeCarrinho(carrinho.length || 0)
    }, [carrinho])

    return (
        <header className="flex justify-between items-center px-6 py-4 h-20 shadow-md bg-white">
            <h1
                onClick={() => navigate("/")}
                className="uppercase text-2xl font-extrabold color-primary tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
                Cardápio Virtual
            </h1>
            
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                    <span className="text-gray-700 font-medium">
                        Olá,{" "}
                        <span className="font-semibold color-primary">
                            {dadosUsuario?.nome?.trim().split(" ")[0] ?? "Visitante"}
                        </span>
                        !
                    </span>
                    {
                        dadosUsuario.nome &&
                        <button onClick={handleLogout} className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-red-600 transition-colors">
                            <MdLogout className="text-2xl" />
                            <span className="text-xs font-medium">Sair</span>
                        </button>}
                </div>
                
                <div
                    onClick={() => navigate("/carrinho")}
                    className="relative cursor-pointer hover:scale-105 transition-transform"
                >
                    <BsCart3 className="text-4xl color-primary" />
                    <span className="absolute -top-1 -right-2 bg-green-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
                        {quantidadeCarrinho}
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Navbar;