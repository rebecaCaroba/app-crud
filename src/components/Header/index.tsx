'use client'
import { ModalContact } from '../ModalContact'
import { SearchForm } from '../SearchForm'
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
            <SearchForm />
        </header>
    )
}