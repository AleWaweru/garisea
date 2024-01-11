import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
        name: "credentials",
        credentials: {
          email: {
            label: "email",
            type: "text",
          },
          password: {
            label: "password",
            type: "password",
          },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials.password) {
            throw new Error("Invalid email or password");
          }
  
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
  
          if (!user || !user?.hashedPassword) {
            throw new Error("Invalid email or password");
          }
  
          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );
  
          if (!isCorrectPassword) {
            throw new Error("Invalid email or password");
          }
          return user;
        },
      }),
  ],
}

export default NextAuth(authOptions)