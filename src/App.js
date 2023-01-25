import React, {useState} from 'react';

import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/GoalList/NewGoal/NewGoal';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([]);

  const addNewGoalHandler = (newGoal) => {
    
    //setCourseGoals(courseGoals.concat(newGoal));

    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));

  }

  return (
    <div className='course-goals'>
      <h2>Goal List</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
  
  
  //<h1 title='Hello!'>A React App!</h1>; // translated to React.createElement(...)
  // alternative vesion
  //return React.createElement('h1',{title='Hello!'},'A React App! 2');
};

export default App;
