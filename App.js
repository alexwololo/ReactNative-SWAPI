import { useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,

  // Flatlist only render needed items lazily, better for performance
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { StatusBar } from 'rn-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Data from './components/Data';

export default function App() {
  // create initially empty array since no list to start with
  const [courseGoals, setCourseGoals] = useState([]);

  //update state where new state depends on previous state
  function addGoalHandler(enteredGoalText) {
    //update goals with passing function that leads to new state
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    // update goals using spread operator
    // setCourseGoals([...courseGoals, enteredGoalText]);
    console.log(enteredGoalText);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    }); // if goal id is false tehn id are equal and then item will be be dropped and new item wont no longer contain it
    console.log('Delete');
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#437B43"
        ></StatusBar>
      </View>

      <ImageBackground
        source={require('./assets/images/DV.jpg')}
        //resizeMode="cover"
        style={styles.appContainer}
      >
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
        <Data />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#222',
  },
  goalsContainer: {
    flex: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  swapi: {
    color: 'white',
    padding: 20,
    margin: 20,
  },
});
