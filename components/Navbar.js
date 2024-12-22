import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Navbar = ({ onNotificationClick }) => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../assets/kognit-logo.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navbarButton} onPress={onNotificationClick}>
        <Ionicons name="notifications" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    zIndex: 100, 
  },
  logo: {
    width: 130,
    height: 40,
  },
  navbarButton: {
    padding: 8,
    backgroundColor: '#004E98',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navbar;
