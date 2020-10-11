import React from 'react';
import styled from 'styled-components';

import sunSvg from './sun.svg';
import MoonSvg from './full-moon.svg';

const Container = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.card};
  box-sizing: border-box;
  padding: 4px;
  cursor: pointer;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
`;

const ToggleIcon = styled.img`
  width: 22px;
  height: 22px;
  transition: all 0.2s ease-out;
  position: relative;
`;

type SwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export const Switch: React.FC<SwitchProps> = ({ value: on, onChange }) => {
  return (
    <Container onClick={() => onChange(!on)}>
      <ToggleIcon
        src={on ? MoonSvg : sunSvg}
        style={{ transform: `translate(${on ? 30 : 0}px)` }}
      />
    </Container>
  );
};
