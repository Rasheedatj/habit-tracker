import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export interface Goalprop {
  title: string;
  target: string;
  current: string;
  percentage: number;
  color: string;
}

const GoalItem = ({ title, current, target, percentage, color }: Goalprop) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.current}>
        ${current}/<Text style={styles.target}>${target}</Text>
      </Text>
      <Text style={styles.percentage}>{percentage}%</Text>
      <View style={styles.progress}>
        {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((item) => (
          <Text
            style={[
              styles.progressItem,
              item <= percentage && { backgroundColor: color },
            ]}
            key={item}
          ></Text>
        ))}
      </View>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    borderColor: '#ebe6e6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 16,
    width: '48%',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 600,
    paddingBottom: 15,
    color: '#717171',
  },

  percentage: {
    textAlign: 'right',
    paddingBottom: 5,
    fontWeight: 600,
    color: '#6a6a6a',
  },

  progress: {
    flexDirection: 'row',
    marginTop: 5,
  },

  progressItem: {
    width: 10,
    height: 20,
    backgroundColor: '#ededed',
    marginRight: 4,
  },

  current: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 10,
  },

  target: {
    color: '#6a6a6a',
  },
});
