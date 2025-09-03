import { Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center px-5 py-3 h-32  md:text-xl color-primary font-bold select-none">
            <h1 onClick={() => navigate('/')} className="uppercase transform hover:scale-105 duration-500 hover:cursor-pointer " >Cardápio Virtual</h1>
            <span className=" transform hover:scale-105 duration-500">Olá, Visitante!</span>
        </div>
    )
}

export default Navbar;