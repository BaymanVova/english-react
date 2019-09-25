import React from "react";
import {Task, ITask} from "./Task/Task";

export interface ITasksProps{
    tasks: ITask[]
}

const Tasks: React.FC<ITasksProps> = ({tasks}) => {
    return (
        <ul>
            {
                tasks.map( (item: ITask) => {
                    return (
                        <Task task={item} key={item.text}/>
                    );
                })
            }
        </ul>
    )
}

export default Tasks;