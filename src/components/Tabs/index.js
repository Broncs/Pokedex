import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar';

const Tabs = styled.div`
  .tabs-titles {
    list-style: none;
    padding: 0px;
    margin: 0;
  }

  .tab-title {
    background-color: #fff;
    display: inline-block;
    padding: 10px;
    color: #c7c6c2;
    cursor: pointer;
    margin-left: 1px;
  }

  .tab-title--active {
    background-color: #f5f5f5;
    color: #00070a;
  }

  .tab-content {
    background-color: #f5f5f5;
    padding: 5px;
    margin: 0;
  }
`;

const index = ({ data, stats }) => {
  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      key={item.id}
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id ? 'tab-title tab-title--active' : 'tab-title'
      }
    >
      {item.tabTitle}
    </li>
  ));

  // <p style={visibleTab === item.id ? {} : { display: 'none' }}>
  //   {item.tabContent}
  // </p>
  return (
    <Tabs className="tabs">
      <ul className="tabs-titles">{listTitles}</ul>

      <div className="tab-content">
        {stats &&
          data.map((item) => {
            return (
              <div style={visibleTab === item.id ? {} : { display: 'none' }}>
                {item.tabTitle == 'About' && <div>Hi lorena</div>}
                {item.tabTitle == 'Base Stats' && <ProgressBar stats={stats} />}
                {item.tabTitle == 'Moves' && <div>Hi felipa</div>}
              </div>
            );
          })}
      </div>
    </Tabs>
  );
};

export default index;
