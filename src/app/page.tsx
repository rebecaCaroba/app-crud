import { Header } from "@/components/Header"
import './style.scss'

export default function Home() {
  return (
    <div> 
      <h1>CRUD em Next e mySQL</h1>
        <main className="ContactContainer">
          <Header />
          <section className="ContactTable">
              <div>
                <small>Nome</small>
                <small>Email</small>
                <small>Telefone</small>
                <small>Sexo</small>
                <small>Ação</small>
              </div>
              <div>
                <span>Rebeca</span>
                <span>rebeca@gmail.com</span>
                <span>(11) 94002-8922</span>
                <span>F</span>
                <span><button>Excluir</button></span>
              </div>
          </section>
        </main>
    </div>
  )
}
