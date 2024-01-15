import { NextResponse, NextRequest } from 'next/server'
import { MySQL } from '@/lib/mysql' 

interface ProductProps {
    params: {
      id: string
    }
    
  }

export async function DELETE(req: NextRequest , {params} : ProductProps) {
    try {        
        const id = params.id
        
        const mysql = await MySQL()
        const query = `DELETE FROM pessoas WHERE pessoas.id = ?`;
        const [rows] = await mysql.execute(query, [id])

        await mysql.end()

        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json(error)
    }
}