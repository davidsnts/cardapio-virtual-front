import api from './api';

const findAllProducts = async () => {
    try {
        const response = await api.get('/produto/findAll');
        return response.data;
    } catch (err) {
        console.error("Erro ao buscar todos os produtos:", err);
        return [];
    }
};

const findProductById = async (id) => {
    try {
        const response = await api.get(`/produto/findById/${id}`);
        return response.data;
    } catch (err) {
        console.error(`Erro ao buscar produto ${id}:`, err);
        return null;
    }
};

const getCategorias = async () => {
    const produtos = await findAllProducts();
    const categorias = produtos.map((produto) => produto.categoria);
    return categorias.filter((cat, index) => categorias.indexOf(cat) === index);
    
};

const getProdutosByCategoria = async (categoria) => {
    const produtos = await findAllProducts();
    return produtos.filter((p) => p.categoria === categoria);
};

export {
    findAllProducts,
    findProductById,
    getCategorias,
    getProdutosByCategoria
};
