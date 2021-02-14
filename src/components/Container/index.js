import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 50em;
  margin: 0 auto;
  padding: 0 20px;
`;

const index = ({ children }) => {
  return <Container>{children}</Container>;
};

export default index;
