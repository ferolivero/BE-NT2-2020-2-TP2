import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Actions from './Actions';

const initialMinute = 25;
const initialSecond = 0;
const maxSeconds = 59;
let idInterval;
let internalSeconds = initialSecond;
let internalMinutes = initialMinute;
let isBreak = false;
export default function Timer() {
  
  const [active, setActive] = useState(false);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSecond);

  const activarTimer = () => {
    setActive(!active);
  }

  const reiniciarTimer = () => {
    setMinutes(initialMinute); 
    setSeconds(initialSecond);
    setActive(false);
    isBreak = false;
    internalMinutes = initialMinute;
    internalSeconds = initialSecond;
  }

  const discountSecond = () => {
    console.log('Tick')
    internalSeconds--
    setSeconds(internalSeconds);
  }

  const discountMinute = () => {
    internalMinutes--;
    setMinutes(internalMinutes);
    console.log('Nuevo valor de minutos:', internalMinutes);
    if (internalSeconds < 0){
      internalSeconds = maxSeconds;
      setSeconds(internalSeconds);
    }
  }

  const iniciarBreak = () => {
    setMinutes(5); 
    setSeconds(0);
    setActive(true);
    internalMinutes = 5;
    internalSeconds = 0;
    isBreak = true;
  }

  const triggerVibration = () => {
    console.log('Vibrate'); 
    if (!isBreak) {
      iniciarBreak();
    } else {
      clearInterval(idInterval);
    }
  }

  useEffect(() => {
    if (active){
      console.log('Timer Activo');
      idInterval = setInterval(() => {
        discountSecond();
      }, 1000);
    } else {
      clearInterval(idInterval);
      console.log('Stop Timer');
    }
  }, [active])

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      triggerVibration();
    } else if (minutes > 0  && seconds < 0){
      discountMinute();
    }
  }, [seconds])

  const leftPad = (num) => {
    return num < 10 ? '0'+num : num;
  }

  return (
    <>
      <Text>{ leftPad(minutes) }:{ leftPad(seconds) }</Text>
      <Actions activarTimer={activarTimer} reiniciarTimer={reiniciarTimer} active={active}></Actions>
    </>
  );
}
