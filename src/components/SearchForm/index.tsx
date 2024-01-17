import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import './style.scss'
import { useContactContext } from "@/context/ContactContext"

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchContact } = useContactContext()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
      } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
      })

    async function handleSearchContact(data: SearchFormInputs) {
        await fetchContact(data.query)
    }

    return (
        <>
         <form onSubmit={handleSubmit(handleSearchContact)}>
            <input type="text"
            placeholder="Busque por contatos" 
            {...register('query')}
            />
            <button type="submit" className="btnSearch" disabled={isSubmitting}>Buscar</button>
         </form>
        </>
    )
}