import { NextRequest, NextResponse } from 'next/server'
import { MySQL } from '@/lib/mysql'

export async function POST( req: NextRequest ) {
  try {

    const body = await req.text()
    const data = JSON.parse(body)

    const { nome, email, telefone, sexo } = data

    const mysql = await MySQL()
    const query = `INSERT INTO pessoas (nome, email, telefone, sexo) VALUES (?, ?, ?, ?)`;
    const values = [nome, email, telefone, sexo]

    const [rows] = await mysql.execute(query, values)
    
    await mysql.end() 
 
    return NextResponse.json( rows )
  } catch ( error ) {
    return NextResponse.json( error )
  }
}
