import { StatusBar } from 'expo-status-bar';
import { TextInput, Image, Alert, StyleSheet, Text, View, Button, Switch } from 'react-native';
import imgOlka from './assets/olka.png';
import React, {useState} from 'react';

export default function App() {
  const [ligado, setLigado] = useState(false)
  const [usuario, setUsuario] = useState('')

  function handleSwitch(){
    setLigado(!ligado)
  }
  return (
    <View style={styles.container}>
      <Switch
        value={ligado}
        onValueChange={handleSwitch}
      />
      <Image
        source={imgOlka}
        style={[styles.imagem, {display: ligado ? 'flex' : 'none'}]}     
        />
      <View
        onTouchStart={(event) => {
          Alert.alert('Toque', 'Toque iniciado')
        }}

        onTouchEnd={(event) => {
          Alert.alert('Toque', 'Toque finalizado')
        }}
      >
      <Text style={styles.texto}>VAMMMM BORAAAAAAAAA</Text>
      </View>
      <StatusBar style="auto" />
      <Text
        selectable={true}
        onPress={()=> {console.log('pressionado')}}
        onLongPress={()=> {console.log('pressionamento longo')}}
      >Open up App.tsx to start working on your app!</Text>
      
      <Text>
        <Text>Olá</Text>
        <Text> Mundo 🖖</Text>
      </Text>
      <View>
      <TextInput
        style={styles.input}
        onChange={(text) => {setUsuario(text.nativeEvent.text)}}
        keyboardType="default"
        placeholder='digite seu nome'
        value={usuario}
      />
      <Button
        title='clique em mim'
        onPress={() => {Alert.alert('Valor atual', usuario)}}
      />
      </View>
      
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
  input: {
    height: 40,
    margin: 12,
    borderWidth:1,
    padding: 10
  },
  texto:{
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20
  },
  imagem: {
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20
  }
});
