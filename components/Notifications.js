import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Notifications = ({ onClose }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro no retorno da resposta da API!");
        }
        return response.json();
      })
      .then((data) => setNotifications(data))
      .catch((error) => console.error("Erro ao buscar notificações:", error))
      .finally(() => setLoading(false));
  }, []);

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.notificationsHeader}>
          <Text style={styles.headerText}>Notificações</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.backBtn} onPress={onClose}>
              <Text style={styles.backBtnText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearBtn} onPress={clearAllNotifications}>
              <Text style={styles.clearBtnText}>Limpar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {loading ? (
          <Text>Carregando...</Text>
        ) : notifications.length === 0 ? (
          <Text>Sem notificações!</Text>
        ) : (
          <ScrollView>
            {notifications.map((notification) => (
              <View key={notification.id} style={styles.notificationItem}>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text>{notification.body}</Text>
                </View>
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => removeNotification(notification.id)}
                >
                  <Text style={styles.removeBtnText}>✖</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    height: 600,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  notificationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  backBtn: {
    backgroundColor: '#004E98',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  backBtnText: {
    color: 'white',
    fontSize: 14,
  },
  clearBtn: {
    backgroundColor: '#e74c3c',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  clearBtnText: {
    color: 'white',
    fontSize: 14,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeBtn: {
    padding: 5,
  },
  removeBtnText: {
    fontSize: 18,
    color: '#e74c3c',
  },
});

export default Notifications;
