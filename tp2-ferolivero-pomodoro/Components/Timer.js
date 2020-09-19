import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Actions from './Actions';

let idInterval;
export default function Timer() {
  
  const [active, setActive] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const activarTimer = () => {
    setActive(!active);
  }

  const reiniciarTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setActive(false);
  }

  useEffect(() => {
    if (active){
      console.log('Timer Activo');
      idInterval = setInterval(() => {
        console.log(new Date);
      }, 1000);
    } else {
      clearInterval(idInterval);
      console.log('Stop Timer');
    }
    console.log(idInterval);
  }, [active])

  return (
    <>
      <Text>{minutes}:{seconds}</Text>
      <Actions activarTimer={activarTimer} reiniciarTimer={reiniciarTimer} active={active}></Actions>
    </>
  );
}
