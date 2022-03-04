import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, } from 'firebase/firestore'
import { db, auth } from '../../firebase-config'


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {


    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            );
            const uid = res.user.uid
            setDoc(doc(db, 'users', uid), {
                login,
                age,
                gender
            })
        } catch (err) {
            console.log(err)
        }
        // console.log(res)
        setEmail('')
        setLogin('')
        setPassword('')
        setAge('')
        setGender('')
        setOpen(true);
    };

    return (
        <form className='reg-form' onSubmit={handleSubmit} style={{
            "display": "flex",
            "flexDirection": "column",
            "width": "50%",
            "margin": "auto"
        }}>
            <h2>Зарегистрироваться</h2>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            </Stack>
            <TextField
                value={email}
                type={email}
                onChange={e => setEmail(e.target.value)}
                id="post-title"
                label="Введите email"
                variant="outlined"
                className='reg-input'
                required />
            <TextField
                value={login}
                onChange={e => setLogin(e.target.value)}
                id="post-title"
                label="Введите логин"
                variant="outlined"
                className='reg-input'
                required />
            <TextField
                value={password}
                type={password}
                onChange={e => setPassword(e.target.value)}
                id="post-title"
                label="Введите пароль"
                variant="outlined"
                className='reg-input'
                required />
            <TextField
                value={age}
                onChange={e => setAge(e.target.value)}
                id="post-title"
                label="Введите ваш возраст"
                variant="outlined"
                className='reg-input' />
            <TextField
                value={gender}
                onChange={e => setGender(e.target.value)}
                id="post-title"
                label="Ваш пол"
                variant="outlined"
                className='reg-input' />
            <Button type="submit" variant="contained">Зарегистрироваться</Button>
        </form >
    );
};

export default Register;