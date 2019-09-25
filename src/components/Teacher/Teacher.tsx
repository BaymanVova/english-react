import React from "react";
import './Teacher.css';
import { FaGrinAlt } from "react-icons/fa";


interface ITeacherProps{
    teacher: ITeacher
}
export interface ITeacher{
        first_name: string,
        last_name: string,
        patronymic_name: string,
        photo?: any
}

const Teacher: React.FC<ITeacherProps> = ({teacher}) => {
    return (
        <p><FaGrinAlt/>  {teacher.last_name} {teacher.first_name} {teacher.patronymic_name}</p>
    )
}

export default Teacher;