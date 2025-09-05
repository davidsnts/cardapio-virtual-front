const Produto = ({ produto, i }) => {
    return (
        <div
            key={i}
            className="bg-white shadow-2xl rounded-xl p-5 flex flex-col gap-2 border border-slate-400 hover:scale-105 transition-transform duration-300 w-80 justify-between"
        >
            <h2 className="font-bold text-xl">{produto.nome}</h2>
            {produto.complementos.length > 0 && (
                <ul className="text-slate-600 text-sm">
                    {produto.complementos.map((comp, j) => (
                        <li key={j}>{comp}</li>
                    ))}
                </ul>
            )}
            <div className="flex justify-between items-center">
                <p className="text-slate-600">R$ {produto.valor.toFixed(2)}</p>
                <button className="rounded-sm bg-primary text-white px-2 py-1 cursor-pointer transition hover:scale-105 duration-500">Adicionar</button>
            </div>
        </div>
    )
}

export default Produto;