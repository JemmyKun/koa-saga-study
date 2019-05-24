import React from 'react';
import { Input, Button } from 'antd';

const AddLabel = (props) => {
    return (
        <div className="add-box">
            <Input className="add-input" placeholder="add..." />
            <Button type="primary">Add Label</Button>
        </div>
    )
}

export default AddLabel;