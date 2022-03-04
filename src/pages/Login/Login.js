import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Context } from '../../components/Context/Contex';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase-config';
import { getDoc, } from 'firebase/firestore'
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { dispatch, user } = useContext(Context)

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const data = await signInWithEmailAndPassword(auth, email, password)
            console.log(data.user.uid)
            const res = getDoc(data.user)
            const uesr = { 
                email: data.user.email,
                gender: res.gender,
                age: res.age
            }
            dispatch({ type: "LOGIN_SUCCESS", payload: user })
            setEmail('')
            setPassword('')
        }
        catch (error) {
            console.log(error)
            dispatch({ type: "LOGIN_FAILURE" })
        }

    }
    console.log(user)

    return (
        <div>
            <h2>Авторизоваться</h2>
            <form
                style={{
                    "display": "flex",
                    "flexDirection": "column",
                    "width": "50%",
                    "margin": "auto"
                }}
                onSubmit={handleLogin}>
                <TextField
                    value={email}
                    type={email}
                    onChange={e => setEmail(e.target.value)}
                    id="post-title"
                    label="Введите email"
                    variant="outlined"
                    className='reg-input'
                    required

                />
                <TextField
                    value={password}
                    type={password}
                    onChange={e => setPassword(e.target.value)}
                    id="post-title"
                    label="Введите пароль"
                    variant="outlined"
                    className='reg-input'
                    required />
                <Button type="submit" variant="contained" >Войти</Button>
                <p>Еще не зарегистрированы?</p>
                <Link to="/register" variant="contained">Зарегистрироваться</Link>
            </form>

        </div>
    );
};

export default Login;