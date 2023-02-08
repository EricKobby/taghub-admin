import { LoginOutlined, LockOutlined, EmailOutlined} from '@mui/icons-material';
import { Avatar, Button, CircularProgress, OutlinedInput, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoginWrap, { LoginBox } from './style';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <LoginWrap>
      <LoginBox method="post" action="#">
        <Typography alignSelf="flex-start" variant="button">Tag HUB | Login</Typography>
        <OutlinedInput
          size="small"
          type='email'
          startAdornment={<EmailOutlined color="action" />}
          placeholder='Email'
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <OutlinedInput
          type='password'
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          startAdornment={<LockOutlined color="action"/>}
          fullWidth
          required
        />
        <Button size="small" 
          variant="contained"
          type="submit"
          fullWidth
          disabled={loading}
          endIcon={!loading ? <LoginOutlined /> : <CircularProgress size="1rem" />}
          onClick={handleLogin}
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