import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed'


function App() {

    let [myTasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'React', isDone: true},
        {id: v1(), title: 'TS', isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValueType>('all')

    const removeTask = (id: string) => {
        const myNewTasks = myTasks.filter( t => t.id !== id)
        setTasks(myNewTasks)
    }

    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    let taskFilterValue = myTasks
    if (filter === 'active') {
        taskFilterValue = myTasks.filter( t => !t.isDone)
    }
    if (filter === 'completed') {
        taskFilterValue = myTasks.filter( t => t.isDone)
    }

    const addTask = (newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask, ...myTasks])
    }

    return (
        <div className="App">
           <Todolist title={'What to learn'}
                     tasks={taskFilterValue}
                     removeTask={removeTask}
                     changeFilter={changeFilter}
                     addTask={addTask}
           />
        </div>
    );
}

export default App;
