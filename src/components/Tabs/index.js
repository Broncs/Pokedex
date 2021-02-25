import React, { useState } from 'react';

import ProgressBar from '../ProgressBar';
import AboutTab from '../AboutTab';
import Skill from '../Skill';
import { Tabs } from '../../styles/components/Tabs';

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
