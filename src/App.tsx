import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

    let [myTasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 4, title: 'React', isDone: true},
        {id: 5, title: 'TS', isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValueType>('all')

    const removeTask = (id: number) => {
        const myNewTasks = myTasks.filter( t => t.id !== id)
        setTasks(myNewTasks)
    }

    const changeFilterValue = (value: FilterValueType) => {
        setFilter(value)
    }

    let tasksWithValue = myTasks
    if (filter === 'active') {
        tasksWithValue = myTasks.filter( t => !t.isDone)
    }
    if (filter === 'completed') {
        tasksWithValue = myTasks.filter( t => t.isDone)
    }

    return (
        <div className="App">
           <Todolist title={'What to learn'}
                     tasks={tasksWithValue}
                     removeTask={removeTask}
                     changeFilterValue={changeFilterValue}

           />
        </div>
    );
}

export default App;
