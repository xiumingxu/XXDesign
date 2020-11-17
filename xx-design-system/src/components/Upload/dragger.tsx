import React, { FC, useState, DragEvent} from 'react';
// DragEvent  是 react 封装的 这样才不会报错
import Icon from '../Icon';
import { UploadFile } from './upload';
import classnames from 'classnames';

export interface DraggerProps {
    onDragDrop: (files: FileList) => void
}
const Dragger: React.FC<DraggerProps> = (props) => {
    const {
        children,
        onDragDrop
    } = props;
    const [dragover, setDragOver] = useState(false);

    const handleDragOver = (e: DragEvent<HTMLElement>) => {
        e.preventDefault();
        setDragOver(true)
    }
    const handleDragLeave = (e: DragEvent<HTMLElement>) => {
        e.preventDefault();
        setDragOver(false)
    }

    const handleDragDrop = (e: DragEvent<HTMLElement>) => {
        e.preventDefault();
        onDragDrop(e.dataTransfer.files);
        setDragOver(false)
    }

    const klass = classnames("xx-uploader-dragger", {
        "is-dragover": dragover
    })

    return <div className={klass} 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave} 
        onDrop={handleDragDrop}
    >
        {children ? children :
            <Icon icon="file" />}
    </div>
}
export default Dragger;