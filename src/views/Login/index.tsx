import { OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import LoginWrap, { LoginBox } from './style';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginWrap>
      <LoginBox>
        <OutlinedInput />
      </LoginBox>
    </LoginWrap>
  );
};

export default Login;