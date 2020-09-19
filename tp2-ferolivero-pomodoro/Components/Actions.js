import React, { useState } from 'react';
import { Button } from 'react-native';

export default function Actions(props) {
  
  return (
    <>
      <Button title={!props.active ? 'Iniciar' : 'Pausar'} onPress={props.activarTimer}></Button>
      <Button title='Reiniciar' onPress={props.reiniciarTimer}></Button>
    </>
  );
}
