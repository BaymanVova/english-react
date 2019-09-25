import React from "react";
import './File.css'

export interface fileProps{
   file : IFile
}
export interface IFile {
    name: string,
    path: string
}

export const File: React.FC<fileProps> = ({file}) => {
    return (
        <li>
            <span className="File"><a href={file.path}>{file.name}</a></span>
        </li>
    )
}

export  default File;