import styled from 'styled-components';

export const ProgressBar = styled.ul`
  margin: 0;
  padding: 0;

  li {
    margin: 9px 0;
  }
  p {
    color: black;
    font-weight: 600;

    span {
      color: #303943;
      display: inline-block;
      opacity: 0.8;
      font-weight: 400;
      width: 100px;
    }
  }

  .progress-bar {
    border-radius: 5px;
    overflow: hidden;
    width: 100%;

    span {
      display: block;
    }
  }
  .bar {
    background: rgba(0, 0, 0, 0.075);
  }

  .progress {
    background: #4bc07a;
    color: #fff;
    padding: 5px;

    &.progress-red {
      background: #fb6c6c;
    }
  }
`;
