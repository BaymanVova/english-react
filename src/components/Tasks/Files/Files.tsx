import React from "react";
import {File, IFile} from "./File/File";

export interface IFiles {
    files: IFile[]
}

export const Files: React.FC<IFiles> = ({files}) =>{
    if(files)
        return(
            <ul className="Files">
            {
                files.map( (item: IFile) => {
                return (
                    <File file={item} key={item.name}/>
                )})}
            </ul>
        )
    else return null;
}

export default Files;