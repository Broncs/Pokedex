import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar';
import AboutTab from '../AboutTab';
import Skill from '../Skill';

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
    background: #ebfffa;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    margin: 10px;
  }
`;

const index = ({ data, stats, pokemonName, weight, height, skill }) => {
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
                {item.tabTitle == 'Skills' && <Skill skill={skill} />}
              </div>
            );
          })}
      </div>
    </Tabs>
  );
};

export default index;
