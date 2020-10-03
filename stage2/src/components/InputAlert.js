import React from 'react'
import {Alert} from 'antd'
import 'antd/es/alert/style/index.css';
const InputAlert = (props) => {
  return (
    <div className='input-alert'>
      <Alert className='antAlert' message="User not found" type="error"/>
    </div>
  )
}
export default InputAlert;
