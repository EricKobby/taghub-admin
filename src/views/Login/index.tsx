import { LoginOutlined, LockOutlined, EmailOutlined} from '@mui/icons-material';
import { Button, CircularProgress, OutlinedInput, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoginWrap, { LoginBox } from './style';

interface LoginInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({ mode: 'onBlur' });

  const [loading, setLoading] = useState(false);

  const handleOnSubmit = (data: LoginInput) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/')
    }, 1000);
  };

  return (
    <LoginWrap>
      <LoginBox method="post" action="#" onSubmit={handleSubmit(handleOnSubmit)}>
        <Typography alignSelf="flex-start" variant="button">Tag HUB | Login</Typography>
        <OutlinedInput
          size="small"
          type='email'
          error={!!errors["email"]}
          startAdornment={<EmailOutlined color="action" />}
          placeholder='Email'
          fullWidth
          {...register("email", { required: true })}
        />
        <OutlinedInput
          type='password'
          size="small"
          error={!!errors["password"]}
          placeholder="Password"
          startAdornment={<LockOutlined color="action"/>}
          fullWidth
          {...register("password", { required: true })}
        />
        <Button size="small" 
          variant="contained"
          type="submit"
          fullWidth
          disabled={loading}
          endIcon={!loading ? <LoginOutlined /> : <CircularProgress size="1rem" />}
        >
          Sign in
        </Button>
        <Typography variant="subtitle2">
            <a href="#"> Forgot Password ?</a>
        </Typography>
      </LoginBox>
    </LoginWrap>
  );
};

export default Login;