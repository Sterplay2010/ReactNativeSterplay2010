import React from 'react';
import * as ReactNative from 'react-native';
import * as MaterialReact from 'react-native-paper';
import Ui from './Ui';

const theme = {
  ...MaterialReact.DefaultTheme,
  colors: {
    ...MaterialReact.DefaultTheme.colors,
    primary: 'skyblue',
    accent: 'yellow',
  },
};


const App = () =>{
  return(
    <MaterialReact.Provider theme={theme}>
    <MaterialReact.Appbar.Header>
      <MaterialReact.Appbar.Content 
      title = "Gogster"
      subtitle = "Bienvenido Administrador"
      />
    </MaterialReact.Appbar.Header>
    <Ui/>
  </MaterialReact.Provider>
    
  );
}

export default App;