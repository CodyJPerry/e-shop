import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user }: any = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );
            
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch(error: any) {
            if (error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }
            console.error('User creation encountered an error', error);
        }
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        });
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input type="text" required name="displayName" onChange={handleChange} value={displayName} />

                <label htmlFor="email">Email</label>
                <input type="email" required name="email" onChange={handleChange} value={email} />

                <label htmlFor="password">Password</label>
                <input type="password" required name="password" onChange={handleChange} value={password} />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;