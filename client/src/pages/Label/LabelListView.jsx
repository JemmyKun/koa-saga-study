import React from 'react';
import { Icon } from 'antd';

const LabelListView = (props) => {
    let { labelReducer, dispatch } = props;
    let { labelList } = labelReducer;
    return (
        <ul className="label-list">
            {
                Array.isArray(labelList) && labelList.map((item, index) => {
                    let { id, title, status } = item;
                    return (
                        <li className="label-item" data-status={status} key={index}>
                            <Icon type="delete" className="delete-btn" />
                            {title}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default LabelListView;