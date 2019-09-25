import React from "react";
import './DateHandler.css'

interface IDateHandlerProps {
    position?: string,
    date: string,
    click?: () => void,
    now?: boolean
}

const DateHandler: React.FC<IDateHandlerProps> = ({position, date, click, now}) => {
    if(!date){
        return (
            <div className={position}></div>
        )
    }
    if(now){
        return (
            <div className="now">{date}</div>
        )
    }
    return (
        <div onClick={click} className={position}>
            {position === "left" ? "← " : ""}
            <span>{date}</span>
            {position === "right" ? " →" : ""}
        </div>
    )
}

export default DateHandler;