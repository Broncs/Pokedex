import React from 'react';
import { NavWrapper } from '../../styles/components/Navigation';

const index = ({ pagination, setPagination }) => {
  return (
    <NavWrapper>
      {pagination !== 0 && (
        <button
          className="eightbit-btn eightbit-btn--previous"
          onClick={() => setPagination((prevValue) => prevValue - 20)}
        >
          Previous
        </button>
      )}
      <button
        className="eightbit-btn "
        onClick={() => {
          if (pagination < 700) {
            setPagination((prevValue) => prevValue + 20);
          } else {
            setPagination(0);
          }
        }}
      >
        Next
      </button>
    </NavWrapper>
  );
};

export default index;
