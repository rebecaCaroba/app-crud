'use client'
import { ModalContact } from '../ModalContact'
import './style.scss'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
    return (
        <header className="HeaderTable">
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button>Criar contato</button>  
                </Dialog.Trigger>
                <ModalContact />    
            </Dialog.Root>
            <form>
                <input type="text" placeholder="Busque por contatos" />
                <button type="submit">Buscar</button>
            </form>
        </header>
    )
}