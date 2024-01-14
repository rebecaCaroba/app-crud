'use client'
import { ContactProvider } from "@/context/ContactContext"

export const Provider = ({children}: {children: React.ReactNode}) => {
    return <ContactProvider>{children}</ContactProvider>
}