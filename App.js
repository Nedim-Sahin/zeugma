import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function App() {
  const [value, setValue] = useState(0);


  return (
    <View style={styles.container}>
      <Button
      style={{fontSize: 20, color: 'green', justifyContent:'relative', alignItems:'center'}}
      styleDisabled={{color: 'red'}}
      //onPress={() => this._handlePress()}
      title="ON/OFF"   
      >
      </Button>

      <Text>Toprağın nem oranı</Text>

      <CircularProgress
        radius={100}
        value={75}
        textColor='#222'
        fontSize={20}
        valueSuffix={'%'}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={3000}
        onAnimationComplete={() => setValue(50)}
      />
      {/* <Text>Toprağın </Text>
      <CircularProgress
        radius={100}
        value={value}
        textColor='#222'
        fontSize={20}
        valueSuffix={'%'}
        activeStrokeColor={'tomato'}
        inActiveStrokeOpacity={0.2}
        duration={4000}
      /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});