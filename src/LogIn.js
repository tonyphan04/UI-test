import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './style.css'

export default function InputAdornments() {
    const [values, setValues] = React.useState({
        account: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'grid', justifyContent: 'center' }}>
            <div>
                <h2 className='login-heading'>Log In</h2>
            </div>
            <div>
                <FormControl sx={{
                    m: 1, width: '50ch'
                }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-account">Account</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-account"
                        // type={values.showPassword ? 'text' : 'password'}
                        value={values.account}
                        onChange={handleChange('account')}
                        label="Account"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </div>
            <Button variant="contained" sx={{ mt: 6 }}>Login</Button>
        </Box >
    );
}
