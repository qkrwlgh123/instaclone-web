import { useState } from 'react';
import styled, { css } from 'styled-components';
import { darkModeVar, isLoggedInVar } from '../apollo';

const TItle = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

function Login() {
  return (
    <Container>
      <TItle>Login</TItle>
    </Container>
  );
}
export default Login;
