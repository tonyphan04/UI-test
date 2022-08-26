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
import MenuBar from '../components/MenuBar'
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import '../style.css'

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

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
        <div style={{ backgroundColor: "#f3f3f9" }}>
            <MenuBar></MenuBar>
            <Box sx={{ display: 'grid', justifyContent: 'center' }}>
                <div>
                    <h2 className='login-heading'>Sign Up</h2>
                </div>
                <div>
                    <FormControl sx={{ mb: 2, width: '50ch' }} variant="outlined">
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
                    <FormControl sx={{ mb: 1, width: '50ch' }} variant="outlined">
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
                <Button variant="contained" sx={{ mt: 3, width: '55ch' }}>Sign up</Button>
                <Root>
                    <Divider sx={{ mt: 3, mb: 3 }}>OR</Divider>
                </Root>
                <Stack direction="row" spacing={3} sx={{ mb: 5, justifyContent: 'center' }}>
                    <Button variant="contained">Contained</Button>
                    <Button variant="contained" href="#contained-buttons">
                        Link
                    </Button>
                </Stack>
            </Box >
            <Divider></Divider>
        </div>
    );
}
