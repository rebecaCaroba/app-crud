'use client'
import * as Dialog from '@radix-ui/react-dialog';
import './style.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContactContext } from '@/context/ContactContext';


const newContactFormSchema = z.object({
    nome: z.string(),
    email: z.
    string()
    .min(1, {message: 'Email inválido'})
    .email('Email inválido'),
    telefone: z
    .string(),
    sexo: z.enum(['M', 'F'])
  })

  type NewTransactionInputs = z.infer<typeof newContactFormSchema>

  export function ModalContact() {
  const {
      reset,
      register,
      handleSubmit,
      formState: { isSubmitting },
    } = useForm<NewTransactionInputs>({
      resolver: zodResolver(newContactFormSchema),
    })

  const { creatContact } = useContactContext()

  async function handleCreateNewContact(data: NewTransactionInputs) {
    const { nome, email, telefone, sexo } = data

    await creatContact({
      nome, 
      email, 
      telefone, 
      sexo
    })

    reset()
  }
  
    return (
      <Dialog.Portal>
        <Dialog.Overlay>
          <div className="overlay" />
        </Dialog.Overlay>
        <Dialog.Content>
          <div className="content-modal">
            <Dialog.Title>Novo contato</Dialog.Title>
            <Dialog.DialogClose className="close-button">X</Dialog.DialogClose>
            <form onSubmit={handleSubmit(handleCreateNewContact)}>
              <input
                type="text"
                placeholder="Digite o nome"
                {...register('nome')}
                required
              />
  
              <input
                type="email"
                placeholder="exemple@email.com"
                {...register('email')}
                required
              />
  
              <input
                type="text"
                placeholder="(XX) XXXXX-XXXX"
                {...register('telefone')}
                required
              />
              <div className="radioContainer">
                <label htmlFor="mas">Masculino</label>
                <input
                  type="radio"
                  id="mas"
                  value="M"
                  {...register('sexo', { required: 'Escolha uma opção' })}
                />
  
                <label htmlFor="fem">Feminino</label>
                <input
                  type="radio"
                  id="fem"
                  value="F"
                  {...register('sexo', { required: 'Escolha uma opção' })}
                />
              </div>
              <button className='buttonSubmit' type="submit" disabled={isSubmitting}>Adicionar</button>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    );
  }