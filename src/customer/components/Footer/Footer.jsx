import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: 'black', color: 'white', py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' >Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' >About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' >Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' >Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' >Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' >Partners</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' >Useful Links</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' >Help</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' >Privacy Policy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' >Terms of Service</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' >Contact</Typography>
                    <div>
                        <Typography className='pb-5' variant='body1' >123 Street, City, Country</Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' variant='body1' >email@example.com</Typography>
                    </div>
                    <div>
                        <Typography className='pb-5' variant='body1' >+1234567890</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' >Legal</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' >Claim</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' >Privacy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' >Terms</Button>
                    </div>
                </Grid>
                <Grid container item xs={12} className="flex justify-center items-center">
                    <Typography variant='body1'>® 2023 My Company. All rights reserved</Typography>
                </Grid>
                <Grid container item xs={12} className="flex justify-center items-center">
                    <Typography variant='body2'>From Cn1 UET with love</Typography>
                </Grid>
            </Grid>

        </div>
    )
}

export default Footer