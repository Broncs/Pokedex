import React from 'react';
import { ProgressBar } from '../../styles/components/ProgressBar';

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
