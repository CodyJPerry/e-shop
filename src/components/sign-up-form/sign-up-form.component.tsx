import { useState } from 'react';

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
            <form onSubmit={() => {}}>
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