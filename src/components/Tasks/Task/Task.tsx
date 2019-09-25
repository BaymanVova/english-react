import React from "react";
import {Files} from "../Files/Files";
import {IFile} from '../Files/File/File'

export interface ITask{
  text: string,
  files: IFile[]
}

interface TaskProps {
    task: ITask
}

export const Task: React.FC<TaskProps> = ( {task} ) =>{
    return (
        <li>{task.text}
            <Files files={task.files} />
        </li>
    )
}

export default Task;