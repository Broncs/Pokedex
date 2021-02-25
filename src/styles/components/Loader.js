import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  @keyframes spin {
    0%,
    20% {
      margin-bottom: 0rem;
      transform: rotate(0deg);
    }

    50% {
      margin-bottom: 9rem;
    }

    100% {
      transform: rotate(720deg);
      margin-bottom: 0;
    }
  }

  .pokeball {
    animation: spin 1.5s ease-in-out infinite;
  }
`;
