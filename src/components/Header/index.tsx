import './style.scss'

export function Header() {
    return (
        <header className="HeaderTable">
            <button>Criar contato</button>
            <form>
                <input type="text" placeholder="Busque por contatos" />
                <button type="submit">Buscar</button>
            </form>
        </header>
    )
}