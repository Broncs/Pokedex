import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  .eightbit-btn {
    background: #92cd41;
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 15px;
    padding: 20px;
    font-family: 'Press Start 2P', cursive;
    text-decoration: none;
    color: white;
    box-shadow: inset -4px -4px 0px 0px #4aa52e;
    margin: 0 20px;
    cursor: pointer;
    outline: none;

    @media (max-width: 600px) {
      font-size: 13px;
    }

    &:hover,
    &:focus {
      background: #76c442;
      box-shadow: inset (-4px * 1.5) (-4px * 1.5) 0px 0px #4aa52e;
    }

    &:active {
      box-shadow: inset 4px 4px 0px 0px #4aa52e;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      box-sizing: content-box;
    }
    &:before {
      top: -6px;
      left: 0;
      border-top: 6px black solid;
      border-bottom: 6px black solid;
    }
    &:after {
      left: -6px;
      top: 0;
      border-left: 6px black solid;
      border-right: 6px black solid;
    }

    /* previous button */
    &.eightbit-btn--previous {
      background: #f7d51d;
      box-shadow: inset -4px -4px 0px 0px #e59400;

      &:hover,
      &:focus {
        background: #f2c409;
        box-shadow: inset (-4px * 1.5) (-4px * 1.5) 0px 0px #e59400;
      }

      &:active {
        box-shadow: inset 4px 4px 0px 0px #e59400;
      }
    }
  }
`;
