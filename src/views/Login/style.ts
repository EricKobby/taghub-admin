import styled from '@emotion/styled';
import { Box } from '@mui/system';

const LoginWrap = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.form`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 330px;
`;

export default LoginWrap;
