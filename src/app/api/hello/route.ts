import { NextRequest, NextResponse } from 'next/server'
import { MySQL } from '@/lib/mysql'

export async function GET( req: NextRequest ) {
  try {
    const mysql = await MySQL()
    const query = `SELECT * FROM pessoas`
    const [ rows ] = await mysql.execute( query )
    
    // Extremamente importante. Encerrar a conexão.
    await mysql.end()
 
    return NextResponse.json( rows )
  } catch ( error ) {
    return NextResponse.json( error )
  }
}