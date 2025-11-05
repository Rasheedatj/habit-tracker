import GoalItem, { Goalprop } from '@/components/Goal';
import Icon from '@/components/Icon';
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const goals: Goalprop[] = [
  {
    title: 'Buy a house',
    percentage: 70,
    color: '#f88009',
    target: '40,000',
    current: '25,000',
  },
  {
    title: 'My school fee',
    percentage: 60,
    color: '#0088ff',
    target: '10,000',
    current: '4,600',
  },
  {
    title: 'Buy an Iphone',
    percentage: 70,
    color: '#fb22fb',
    target: '3,000',
    current: '1,000',
  },
  {
    title: 'Next month bills',
    percentage: 60,
    color: 'black',
    target: '30,000',
    current: '19,600',
  },
];

const XPractice = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previous) => !previous);
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={styles.rootContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.nameContainer}>
              <Icon>
                <FontAwesome6 name='user-large' size={20} color='#7f7f7f' />
              </Icon>
              <Text style={styles.name}>Hi, Hamed</Text>
            </View>

            <Icon>
              <FontAwesome name='bell' size={20} color='#7f7f7f' />
            </Icon>
          </View>

          <View style={styles.hero}>
            <View style={styles.title}>
              <Text style={styles.totalTitle}> Total Savings</Text>
              <Ionicons name='eye-sharp' size={20} color='#757575' />
            </View>

            <Text style={styles.total}>$50,000.00</Text>
            <Text style={styles.greeting}>You are doing great Hamed!</Text>
          </View>

          <View>
            <Text style={styles.goalHeader}>My Goals</Text>

            <View style={styles.goalContainer}>
              {goals.map((goal, index) => (
                <GoalItem
                  key={goal.title + index}
                  title={goal.title}
                  target={goal.target}
                  current={goal.current}
                  percentage={goal.percentage}
                  color={goal.color}
                />
              ))}
            </View>
          </View>

          <View style={styles.autoSaveBox}>
            <View style={styles.autoIcon}>
              <View style={styles.refresh}>
                <Feather name='refresh-ccw' size={16} color='white' />
              </View>
              <Text style={styles.autoText}>Auto save is enabled</Text>
            </View>

            <View style={{ width: 40, alignItems: 'center' }}>
              <Switch
                value={isEnabled}
                onValueChange={toggleSwitch}
                thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: '#0089fe' }}
                ios_backgroundColor='#3e3e3e'
                style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
              />
            </View>
          </View>

          <View style={styles.transactionbox}>
            <Text style={styles.transactionTitle}>Transactions</Text>
            <Text style={styles.transactionUrl}>See all</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.button}>
              <Ionicons name='add' size={20} color='white' />
              <Text style={styles.buttonText}>Add funds</Text>
            </View>
            <Icon>
              <Entypo name='dots-three-vertical' size={20} color='black' />
            </Icon>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default XPractice;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 20,
    flex: 1,
    paddingTop: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    marginLeft: 16,
    fontWeight: 600,
    fontSize: 16,
    color: '#2d2d2d',
  },

  hero: {
    borderWidth: 1,
    borderColor: '#ebe6e6',
    padding: 16,
    backgroundColor: 'white',
    marginVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  totalTitle: {
    marginRight: 10,
    fontWeight: Platform.select({ android: 500, ios: 600 }),
    fontSize: 15,
    color: '#757575',
  },

  total: {
    fontWeight: 700,
    fontSize: 32,
    marginVertical: 10,
  },

  greeting: {
    fontSize: 15,
    color: '#757575',
    marginTop: 10,
    fontWeight: Platform.select({ android: 400, ios: 500 }),
  },

  goalHeader: {
    fontWeight: 600,
    marginBottom: 16,
    fontSize: 16,
  },

  goalContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  autoSaveBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 20,
  },

  autoIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  refresh: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 6,
    borderColor: '#fdc9d2',
    marginRight: 10,
  },

  autoText: {
    fontWeight: 600,
    fontSize: 17,
    color: '#242424',
  },

  transactionbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  transactionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#242424',
  },

  transactionUrl: {
    fontSize: 17,
    color: '#7b7b7b',
    fontWeight: 500,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1d1d1d',
    padding: 20,
    borderRadius: 40,
    width: '78%',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    fontWeight: 600,
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});
