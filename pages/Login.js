import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    setErrorMessage('');

    if (!username.trim() || !password.trim()) {
      setErrorMessage('Digite algo no campo username e senha para continuar.');
      return; 
    }

    const loginData = {
      Username: username.trim(),
      Password: password.trim(),
    };
    console.log('Simulação da organização dos dados para envio pro backend:', loginData);

    navigation.navigate('Home');
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        style={{ width: 200, marginBottom: 20 }}
        source={require('../assets/kognit-logo.png')}
      />
      <TextInput
        style={styles.loginInput}
        placeholder="Porfavor digite seu username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.loginInput}
        placeholder="Porfavor digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loginInput: {
    marginBottom: 12,
    padding: 10,
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  loginButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#004E98',
    borderRadius: 4,
    width: 300,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
});

export default Login;
