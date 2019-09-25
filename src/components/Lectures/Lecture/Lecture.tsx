import React from "react";
import Teacher, {ITeacher} from "../../Teacher/Teacher";
import Tasks from "../../Tasks/Tasks";
import {ITask} from "../../Tasks/Task/Task";
import { FaBuilding } from "react-icons/fa";
import './Lecture.css'


export interface ILectureProps {
    lecture: ILecture
}
export interface ILecture {
    number: number[],
    name: string
    room: number,
    building: string
    teacher: ITeacher,
    task: ITask[]
}

function getLectureNum(nums: number[]): string{
    let num: string = nums.join('-')+'. ';
    return num;
}

function  getTime(nums: number[]):string {
    let time: string = "16:30 - 19:40";
    if(nums.length === 1){
        if(nums[0] === 6){
            time = "16:30 - 18:00"
        }
        if(nums[0] === 7){
            time = "18:10 - 19:40"
        }
    }
    return time;
}

const Lecture: React.FC<ILectureProps> = ({lecture}) => {
    return (
        <div className="CardLecture">
            <div className="CardHeader">
                <div className="NumLecture">{getLectureNum(lecture.number)}</div>
                <div className="TimeLecture">{getTime(lecture.number)}</div>
            </div>
            <div className="CardBody">
                <span className="LectureName">{lecture.name}</span>
                <Tasks tasks={lecture.task}/>
                <p><FaBuilding /> {lecture.room}, {lecture.building}</p>
                <Teacher teacher={lecture.teacher}/>
            </div>
        </div>
    )
}

export default Lecture;