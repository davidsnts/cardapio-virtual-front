import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { BsCart3 } from "react-icons/bs";
import { useState, useEffect } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const { carrinho } = useCart();
    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState();

    useEffect(() => {
        setQuantidadeCarrinho(carrinho.length || 0)
    }, [carrinho])

    return (
        <div className="flex justify-between items-center px-5 py-3 h-32  md:text-xl color-primary font-bold select-none">
            <h1 onClick={() => navigate('/')} className="uppercase transform hover:scale-105 duration-500 hover:cursor-pointer " >Cardápio Virtual</h1>
            <div className="flex gap-4">
                <span className=" transform hover:scale-105 duration-500">Olá, Visitante!</span>
                <div onClick={() => navigate('/carrinho')}  className="flex items-center justify-center flex-row relative cursor-pointer">
                    <BsCart3 className="color-primary text-4xl" />
                    <span className="bg-primary border border-white text-white rounded-full w-7 h-7 flex items-center justify-center absolute top-4 left-4">
                        {quantidadeCarrinho}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;