import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import ProdutoSelecionado from './pages/produtoSelecionado'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtoSelecionado/:id" element={<ProdutoSelecionado />} />
      </Routes>
    </>
  )
}

export default App
