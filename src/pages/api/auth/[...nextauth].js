import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt_decode from "jwt-decode";
import { Login } from "@/components/utils/apiRequest";

export const authOption = (req, res) => {
  return {
    session: {
      strategy: 'jwt',
      maxAge: 24 * 60 * 60 * 1000
    },
    secret: `${process.env.NEXTAUTH_SECRET}`,
    providers: [
      CredentialsProvider({
        type: 'credentials',
        credentials: {},
        async authorize(credentials, req) {
          const { email, password } = credentials;
          let cookie = null;
          let user = await Login({ email, password })
            .then(response => {
              cookie = response.headers.get('set-cookie');
              return response.json()
            })
            .then(result => {
              if (result.status !== 200) {
                throw new Error('invalid credential')
              }
              return result.accessToken;
            })
          res.setHeader('Set-Cookie', cookie)
          let decoded = jwt_decode(user);
          user = { ...decoded, accessToken: user }
          return user;
        }
      })
    ],
    pages: {
      signIn: '/login'
    },
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {
          token.userid = user.userId;
          token.username = user.userName;
          token.email = user.userEmail;
          token.accessToken = user.accessToken;
        }
        return token;
      },
      session: ({ session, token, user }) => {
        if (token) {
          session.user.id = token.userid;
          session.user.name = token.username;
          session.user.email = token.email;
          session.user.accessToken = token.accessToken;
        }
        return session;
      }
    }
  }
}

export default (req, res) => {
  return NextAuth(req, res, authOption(req, res));
}