import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt_decode from "jwt-decode";
import { Login } from "@/components/utils/apiRequest";

export const authOption = {
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60 * 1000
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        let user = await Login({ email, password })
          .then(response => {
            if (response.status !== 200) {
              throw new Error('invalid credential')
            }
            return jwt_decode(response.accessToken);
          })
        return user;
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
}

export default NextAuth(authOption);