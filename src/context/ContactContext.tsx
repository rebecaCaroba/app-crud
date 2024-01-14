'use client'
import { createContext, useCallback, useContext, ReactNode, useState } from 'react'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'

interface ContactProps {
  id: number
  name: string
  email: string
  phone: string
  type: 'F' | 'M'
}

interface ContactInput {
  name: string
  email: string
  phone: string
  type: 'F' | 'M'
}

interface ContactContextType {
  contact: ContactProps[]
  creatContact: (data: ContactInput) => Promise<void>
}

export const ContactContext = createContext({} as ContactContextType)

interface ContactProviderProps {
  children: ReactNode
}

export function ContactProvider({ children }: ContactProviderProps) {
  const [contact, setContact] = useState<ContactProps[]>([])

  const creatContact = useCallback(async (data: ContactInput) => {
    try {
      const response = await api.post('/contact', {
        nome: data.name,
        email: data.email,
        telefone: data.phone,
        sexo: data.type,
      })

      setContact((state) => [response.data, ...state])
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
        return
      }
      console.error(err)
    }
  }, [])

  return (
    <ContactContext.Provider
      value={{
        contact,
        creatContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export const useContactContext = () => useContext(ContactContext)