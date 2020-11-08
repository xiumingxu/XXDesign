import React from 'react';
import { UploadFile } from './upload';
import classNames from 'classnames'
import Icon from '../Icon';

interface UploadListProps{
    fileList: UploadFile[];
    // defaultFileList: UploadFile[];
}

const defaultFileList =  [
    {
        uid: '1',
        size: 1,
        name: '1',
        percentage: 0,
        status: 'ready'},
    {
        uid: '2',
        size: 2,
        name: '2',
        percentage: 0,
        status: 'error'},
    {
        uid: '3',
        size: 3,
        name: '3',
        percentage: 0,
        status: 'processing'},
    {
        uid: '4',
        size: 4,
        name: '4',
        percentage: 0,
        status: 'success'
    }
]

interface UploadListItem{
    item: UploadFile;
    onRemove?: (file:UploadFile)=>void;
}
const UploadListItem:React.FC<UploadListItem> = (props)=>{
    const { item, onRemove } = props;
    const {name, status, uid} =  item;

    
       
    return <li className="xx-upload-list-item" key={'file-list-item'+ uid}>
        <span className={classNames(`file-name file-name-${status}`)}>
            <Icon icon="file-alt" theme="secondary" style={{display:'inline-block'}}/>
            {name}
        </span>
        <span className="file-status">
            {(status === 'processing' || status === 'ready') && <Icon icon="spinner" spin theme="primary" />}
            {item.status === 'success' && <Icon icon="check-circle" theme="success" />}
            {item.status === 'error' && <Icon icon="times-circle" theme="danger" />}
        </span>
        {onRemove && <span className="file-actions">
            <Icon icon="times" theme="primary" onClick={() => { onRemove(item) }} />
        </span>}
        {/* {item.status === 'processing' &&
            <Progress
                percent={item.percent || 0}
            />
        } */}
    </li >
}
export const UploadList: React.FC<UploadListProps> = (props)=>{
    const{
        fileList
    } = props;
    const list = defaultFileList;
    return <ul className="xx-upload-list">
        {list.map(item=><UploadListItem item={item} />)}
    </ul>
}

export default UploadList;