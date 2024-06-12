import React from 'react'
import { Grid, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../State/Auth/Action';
import { useEffect } from 'react';
import { getUser } from '../../State/Auth/Action';
import { useSelector } from 'react-redux';

const RegisterForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem('jwt')
    const { auth } = useSelector(store => store)

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt])

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        dispatch(register(userData))
        console.log(userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField required
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required
                            id='email'
                            name='email'
                            label='Email'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required
                            id='password'
                            name='password'
                            label='Password'
                            fullWidth
                            autoComplete='password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className='w-full'
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{ padding: '.8rem 0', bgcolor: '#9155FD' }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center '>
                <div className='py-3 flex items-center'>
                    <p>if you have already account ?</p>
                    <Button onClick={() => navigate("/login")} className='ml-5' size='small' sx={{ color: '#9155FD' }}>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm