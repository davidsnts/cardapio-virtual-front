const produtos = [
    {
        categoria: "Comidas",
        nome: "Prato do dia",
        valor: 18.00,
        complementos: ['Filé de frango', 'Arroz', 'Feijão', 'Salada de alface', 'Beterraba cozida']
    },
    {
        categoria: "Comidas",
        nome: "Churrasco",
        valor: 18.00,
        complementos: ['Churrasco Misto', 'Arroz', 'Feijão', 'Farofa', 'Vinagrete', 'Salpicão']
    },
    {
        categoria: "Comidas",
        nome: "Churrasco",
        valor: 18.00,
        complementos: ['Churrasco Misto', 'Arroz', 'Feijão', 'Farofa', 'Vinagrete', 'Salpicão']
    },
    {
        categoria: "Comidas",
        nome: "Churrasco",
        valor: 18.00,
        complementos: ['Churrasco Misto', 'Arroz', 'Feijão', 'Farofa', 'Vinagrete', 'Salpicão']
    },
    {
        categoria: "Comidas",
        nome: "Churrasco",
        valor: 18.00,
        complementos: ['Churrasco Misto', 'Arroz', 'Feijão', 'Farofa', 'Vinagrete', 'Salpicão']
    },
    {
        categoria: "Comidas",
        nome: "Strogonoff",
        valor: 18.00,
        complementos: ['Stronoff de frango', 'Arroz', 'Batata Palha']
    },
    {
        categoria: "Bebidas",
        nome: "Coca Cola Lata 350ml",
        valor: 6.00,
        complementos: []
    },
    {
        categoria: "Bebidas",
        nome: "Fanta Uva Lata 350ml",
        valor: 6.00,
        complementos: []
    }
]

const getCategorias = () => {
  const categorias = produtos.map((produto) => produto.categoria)
  return categorias.filter((cat, index) => categorias.indexOf(cat) === index)
}

const getProdutosByCategoria = (categoria) => {
    return produtos.filter(p => p.categoria === categoria)
}

export { produtos, getCategorias, getProdutosByCategoria }