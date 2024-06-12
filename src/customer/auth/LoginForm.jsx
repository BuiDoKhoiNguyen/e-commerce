import React from 'react'
import { Grid, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../State/Auth/Action';


const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target)

        const userData = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        dispatch(login(userData))
        console.log(userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
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
                            sx={{padding: '.8rem 0', bgcolor: '#9155FD'}} 
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center '>
                <div className='py-3 flex items-center'>
                    <p>if you don't have account ?</p>
                    <Button onClick={() => navigate("/register")} className='ml-5' size='small' sx={{color: '#9155FD' }}>Register</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm