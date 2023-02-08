import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const Content = styled(Box)`
  width: 100%;
  min-height: 100%;
  overflow: auto hidden;
  background: #f2f2f2;
`;


const LayoutWrap = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #FFF;
`;

export default LayoutWrap;