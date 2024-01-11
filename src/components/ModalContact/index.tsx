'use client'
import * as Dialog from '@radix-ui/react-dialog';
import './style.scss';

export function ModalContact() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay>
                <div className="overlay" />
            </Dialog.Overlay>
            <Dialog.Content>
                <div className="content-modal">
                    <Dialog.Title>Novo contato</Dialog.Title>
                        <Dialog.DialogClose className="close-button">
                            X
                        </Dialog.DialogClose>
                    <form>
                        <input 
                        type="text" 
                        placeholder='Digite o nome' 
                        required/>
                        <input 
                        type="email" 
                        placeholder='exemple@email.com' 
                        pattern=".+@example\.com" 
                        required />
                        <input 
                        type="tel"
                        placeholder='99999-9999' 
                        required />

                        <div className='radioContainer'>
                            <label htmlFor="mas">Masculino</label>
                            <input type="radio" name="sexo" id="mas" value="M" />
                        </div>
                        <div className='radioContainer'>
                            <label htmlFor="fem">Feminino</label>
                            <input type="radio" name="sexo" id="fem" value="F" />
                        </div>
                        <button type="submit">Adicionar</button>
                    </form>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    );
}