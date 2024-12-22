import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import Navbar from '../components/Navbar';
import Notifications from '../components/Notifications';

const Home = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <View style={styles.homeContainer}>
      <Navbar onNotificationClick={toggleNotifications} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showNotifications}
        onRequestClose={() => setShowNotifications(false)}
      >
        <Notifications onClose={() => setShowNotifications(false)} />
      </Modal>
      <Text style={styles.welcomeText}>Seja bem-vindo ao app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  }
});

export default Home;
