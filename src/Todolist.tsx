import React from 'react';
import './App.css';
import {FilterValueType} from "./App";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValueType) => void
}

export function Todolist(props: PropsType) {

    const tsarFilter = (value: FilterValueType) => {
        props.changeFilter(value)
    }

    return (
        <div >
            <h3>{props.title}</h3>
            <ul>
                {props.tasks.map( t => {
                    const onClickHandler = () => {
                        props.removeTask(t.id)
                    }
                    return <li key={t.id}>
                        <button onClick={onClickHandler}>x</button>
                        <input type={"checkbox"} checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
                })}
            </ul>


            <button onClick={() => tsarFilter('all')}>all</button>
            <button onClick={() => tsarFilter('active')}>active</button>
            <button onClick={() => tsarFilter('completed')}>completed</button>
        </div>
    );
}
