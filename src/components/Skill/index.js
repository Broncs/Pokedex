import styled from 'styled-components';

const Skills = styled.div`
  p.skill {
    font-size: 1.2rem;
  }
`;

const index = ({ skill }) => {
  return (
    <Skills>
      {skill.map((item, index) => (
        <p key={index} className="skill">
          <span style={{ opacity: 0.6 }}>#0{index + 1}</span>{' '}
          {item[0].toUpperCase() + item.substring(1).toLowerCase()}
        </p>
      ))}
    </Skills>
  );
};

export default index;
