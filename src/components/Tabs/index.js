import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar';
import AboutTab from '../AboutTab';

const Tabs = styled.div`
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
    padding: 5px;
    margin: 0;
  }
`;

const index = ({ data, stats, pokemonName, weight, height }) => {
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
              <div
                key={item.id}
                style={visibleTab === item.id ? {} : { display: 'none' }}
              >
                {item.tabTitle == 'About' && (
                  <AboutTab
                    pokemonName={pokemonName}
                    weight={weight}
                    height={height}
                  />
                )}
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
