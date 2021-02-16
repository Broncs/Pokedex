import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.ul`
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

const index = ({ stats }) => {
  return (
    <ProgressBar>
      <li>
        <p>
          <span>HP</span>
          {stats[0]}
        </p>

        <div className="progress-bar">
          <span className="bar">
            <span
              className="progress progress-red"
              style={{ width: `${stats[0]}%` }}
            ></span>
          </span>
        </div>
      </li>

      <li>
        <p>
          <span>Attack</span>
          {stats[1]}
        </p>

        <div className="progress-bar">
          <span className="bar">
            <span className="progress" style={{ width: `${stats[1]}%` }}></span>
          </span>
        </div>
      </li>
      <li>
        <p>
          <span>Defense</span>
          {stats[2]}
        </p>

        <div className="progress-bar ">
          <span className="bar">
            <span
              className="progress progress-red"
              style={{ width: `${stats[2]}%` }}
            ></span>
          </span>
        </div>
      </li>
      <li>
        <p>
          <span>Sp. Atk</span>
          {stats[3]}
        </p>

        <div className="progress-bar">
          <span className="bar">
            <span className="progress" style={{ width: `${stats[3]}%` }}></span>
          </span>
        </div>
      </li>
      <li>
        <p>
          <span>Sp. Def</span>
          {stats[4]}
        </p>

        <div className="progress-bar">
          <span className="bar">
            <span className="progress" style={{ width: `${stats[4]}%` }}></span>
          </span>
        </div>
      </li>
      <li>
        <p>
          <span>Speed</span>
          {stats[5]}
        </p>

        <div className="progress-bar">
          <span className="bar">
            <span
              className="progress progress-red"
              style={{ width: `${stats[5]}%` }}
            ></span>
          </span>
        </div>
      </li>

      <li>Total {stats.reduce((acc, curr) => acc + curr, 0)}</li>
    </ProgressBar>
  );
};

export default index;
