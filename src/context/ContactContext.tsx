'use client'
import { createContext, useCallback, useContext, ReactNode, useState, useEffect } from 'react'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'

interface ContactProps {
  id: number
  nome: string
  email: string
  telefone: string
  sexo: 'F' | 'M'
}

interface ContactInput {
  nome: string
  email: string
  telefone: string
  sexo: 'F' | 'M'
}

interface ContactContextType {
  contacts: ContactProps[]
  creatContact: (data: ContactInput) => Promise<void>
  fetchContact: (query?: string) => Promise<void>
  deleteContact: (id: number) => Promise<void>
}

export const ContactContext = createContext({} as ContactContextType)

interface ContactProviderProps {
  children: ReactNode
}

export function ContactProvider({ children }: ContactProviderProps) {
  const [contacts, setContacts] = useState<ContactProps[]>([])

  const handleApiError = (err: any) => {
    if (err instanceof AxiosError && err?.response?.data?.message) {
      alert(err.response.data.message)
      return
    }
    console.log(err)
    
  }

  const deleteContact = useCallback(async (id: number) => {
    try {
      await api.delete(`/delete-contact/${id}`)
      setContacts((state) => state.filter((contact) => contact.id !== id))
      
    } catch (err) {
      handleApiError(err)
    }
  }, [])

  const fetchContact = useCallback(async (query?: string) => {
    try {
      const response = await api.get('/get-contact')

      setContacts(response.data)
    } catch (err) {
      handleApiError(err)
    }
  }, []) 

  const creatContact = useCallback(async (data: ContactInput) => {
    try {
      await api.post('/contact', {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        sexo: data.sexo,
      })

      fetchContact()
    } catch (err) {
      handleApiError(err)
    }
  }, [])

  useEffect(() => {
    fetchContact()
  }, [fetchContact])

  return (
    <ContactContext.Provider
      value={{
        contacts,
        creatContact,
        fetchContact,
        deleteContact
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export const useContactContext = () => useContext(ContactContext)