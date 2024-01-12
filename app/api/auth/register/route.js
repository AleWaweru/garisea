import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    const hashedPassword = await hash(password, 10);

    const response = await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${hashedPassword})
    `;
  } catch (e) {
    console.error(e);
  }

  return NextResponse.json({ message: 'success' });
}
