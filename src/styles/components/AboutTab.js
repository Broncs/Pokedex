import styled from 'styled-components';

export const AboutWrapper = styled.p`
  line-height: 1.5;
  text-align: center;
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 5px 0;
  margin: 10px 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  div p:first-child {
    opacity: 0.6;
  }
`;

export const Breeding = styled.div`
  margin-top: 10px;

  p {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }

  span {
    opacity: 0.6;
    font-weight: 400;
    font-size: 0.7rem;
  }
`;
