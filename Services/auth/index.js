
const baseURl = 'http://localhost:3000/api/auth';
import { signIn } from 'next-auth/react';


export const register_me = async (formData) => {
    try {
        const res = await fetch(`${baseURl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in log_in (service) => ', error);
    }
}


export const logged_in = async (FormData) => {
    const { email, password } = FormData;
    const status = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
    });
    return status
}
