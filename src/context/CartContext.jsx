import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho");
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    });

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }, [carrinho]);

    const ordenarCarrinho = (lista) => {
        return [...lista].sort((a, b) => {
            if (a._id < b._id) return -1;
            if (a._id > b._id) return 1;
            return 0;
        });
    };

    const addCarrinho = (item) => {
        const newCarrinho = carrinho.filter((p) => p._id !== item._id);
        setCarrinho(ordenarCarrinho([...newCarrinho, item]));
    };

    const limparCarrinho = () => setCarrinho([]);

    const removeItem = (id) => {
        const newCarrinho = carrinho.filter((p) => p._id !== id);
        setCarrinho(ordenarCarrinho(newCarrinho));
    };

    const updateItem = (item) => {
        const newCarrinho = carrinho.filter((p) => p._id !== item._id);
        setCarrinho(ordenarCarrinho([...newCarrinho, item]));
    };

    const updateQtdItem = (id, quantidade) => {
        if (quantidade > 0) {
            const item = carrinho.find(i => i._id === id)
            item.quantidade = quantidade;
            const newCarrinho = carrinho.filter((p) => p._id !== item._id);
            setCarrinho(ordenarCarrinho([...newCarrinho, item]));
        }
    }

    return (
        <CartContext.Provider
            value={{ carrinho, setCarrinho, addCarrinho, limparCarrinho, removeItem, updateItem, updateQtdItem }}
        >
            {children}
        </CartContext.Provider>
    );
};
