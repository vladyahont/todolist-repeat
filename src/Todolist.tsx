import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import {FilterValueType} from "./App";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const [newTitle, setNewTitle] = useState('')

    const onClickAddTask = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onChangeNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddTask()
        }
    }

    const tsarFilter = (value: FilterValueType) => {
        props.changeFilter(value)
    }

    return (
        <div >
            <h3>{props.title}</h3>
            <input value={newTitle} onChange={onChangeNewTitle} onKeyDown={onKeyHandler}/>
            <button onClick={onClickAddTask}>+</button>
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
