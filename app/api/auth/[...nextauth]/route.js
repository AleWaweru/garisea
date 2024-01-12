import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres';

const crypto = require('crypto');

// Generate a random string of 64 bytes
const jwtSecret = crypto.randomBytes(64).toString('hex');

console.log(jwtSecret);


const handler = NextAuth({
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        email: {},
        password: {},
      },
      async authorize(credentials, req) {

        const response = await sql`
        SELECT * FROM users WHERE email=${credentials?.email}`;
        const user = response.rows[0];

        const passwordCorrect = await compare(credentials?.password || "" , user.password);

        if(passwordCorrect){
          return {
            id: user.id,
            email: user.email,
          };
        }
       
        return null;
      }
    })
  ],
});

export  {handler as GET, handler as POST};
