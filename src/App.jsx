import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import ProdutoSelecionado from './pages/produtoSelecionado'
import { CartProvider } from './context/CartContext';
import ProdutoAdicionadoCarrinho from './pages/produtoAdicionadoCarrinho';
import Carrinho from './pages/carrinho';
import CadDadosUsuarioPedido from './pages/cadDadosUsuarioPedido';
import ConfirmaPedido from './pages/confirmaPedido';

function App() {

  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtoSelecionado/:id" element={<ProdutoSelecionado />} />
        <Route path="/produtoAddCarrinho" element={<ProdutoAdicionadoCarrinho />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/dadosUsuarioPedido" element={<CadDadosUsuarioPedido />} />
        <Route path="/confirmarPedido" element={<ConfirmaPedido />} />
      </Routes>
    </CartProvider>
  )
}

export default App
