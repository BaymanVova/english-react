import React from "react";
import Lecture,{ILecture} from "./Lecture/Lecture";

interface ILectures {
    lectures: ILecture[]
}


const Lectures: React.FC<ILectures> = ({lectures}) => {
    return(
        <>
        {
            lectures.map((item: ILecture) => {
                return(
                    <Lecture lecture={item} key={item.name}/>
                );
            })
        }
        </>
    )
}
export default Lectures;