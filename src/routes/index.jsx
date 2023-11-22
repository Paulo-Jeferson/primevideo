import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Comentario } from '../screens/Comentario';

const Stack = createNativeStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Comentario" component={Comentario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
