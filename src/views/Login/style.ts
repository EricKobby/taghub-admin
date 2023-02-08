import styled from '@emotion/styled';
import { Box } from '@mui/system';

const LoginWrap = styled(Box)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.form`
  height: 440px;
  width: 100%;
  max-width: 330px;
`;

export default LoginWrap;
