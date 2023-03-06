import User from '@/models/User';
import ConnectDB from '@/DB/connectDB';
import { compare } from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from 'next-auth';


export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials, req) {
                await ConnectDB();
                const { email, password } = credentials;
                const checkUser = await User.findOne({ email });
                if (!checkUser) throw new Error('No user found');
                const isMatch = await compare(password, checkUser.password);
                if (!isMatch) throw new Error('Incorrect password');
                return checkUser;
            },
        }),
    ],
    app : {
        signIn : "/auth/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
})


