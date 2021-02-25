import styled from 'styled-components';

export const Tabs = styled.div`
  .tabs-titles {
    list-style: none;
    padding: 0px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
  }

  .tab-title {
    background-color: mintcream;
    display: inline-block;
    padding: 5px;
    color: #c7c6c2;
    cursor: pointer;

    margin: 0;
  }

  .tab-title--active {
    color: #00070a;

    border-bottom: 2px solid dodgerblue;
  }

  .tab-content {
    background: #ebfffa;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    margin: 10px;
  }
`;
