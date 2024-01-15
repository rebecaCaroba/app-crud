'use client'
import { Header } from "@/components/Header"
import './style.scss'
import { useContactContext } from "@/context/ContactContext"

export default function Home() {
  const { contacts, deleteContact } = useContactContext()

  const handleDeleteContact = async (id:number) => {
    await deleteContact(id)
  }

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
          {contacts.length == 0 ? (
            <div>
              <p>Nenhum contato disponível</p>
            </div>
          ): (
            contacts.map((contact) => (
              <div key={contact.id}>
                <span>{contact.nome}</span>
                <span>{contact.email}</span>
                <span>{contact.telefone}</span>
                <span>{contact.sexo}</span>
                <span><button onClick={() => handleDeleteContact(contact.id)}>Excluir</button></span>
              </div>
            ))
          ) }
        </section>
      </main>
    </div>
  )
}
