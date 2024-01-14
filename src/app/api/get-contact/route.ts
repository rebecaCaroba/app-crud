import { NextResponse } from 'next/server'
import { MySQL } from '@/lib/mysql'

export async function GET( res: NextResponse ) {
  try {
    const mysql = await MySQL()
    const query = `SELECT * FROM pessoas`
    const [ rows ] = await mysql.execute( query )
    
    await mysql.end()
 
    return NextResponse.json( rows )
  } catch ( error ) {
    return NextResponse.json( error )
  }
}