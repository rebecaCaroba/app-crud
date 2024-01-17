import { NextResponse } from 'next/server'
import { MySQL } from '@/lib/mysql'

export async function GET(res: NextResponse, { params }: { params: { query: string } }) {
    const queryFilter = params.query;
  try {
    const mysql = await MySQL();

    if(queryFilter === 'showall') {
      const query = 'SELECT * FROM pessoas';
      const [rows] = await mysql.execute(query);
      return NextResponse.json(rows);
    }else {
      const query = `SELECT * FROM pessoas WHERE nome LIKE ? OR email LIKE ? OR telefone LIKE ? OR sexo LIKE ?`;
      const [rows] = await mysql.execute(query, [`%${queryFilter}%`, `%${queryFilter}%`, `%${queryFilter}%`, `%${queryFilter}%`]);
      return NextResponse.json(rows);
    }

    await mysql.end();
  } catch (error) {
    return NextResponse.json(error);
  }
}
