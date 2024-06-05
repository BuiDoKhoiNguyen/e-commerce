import React from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField';

const RegisterForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Register form submitted')
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
                </Grid>
            </form>
        </div>
    )
}

export default RegisterForm