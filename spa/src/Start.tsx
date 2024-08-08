import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import { Input, Button } from "antd";
// import style from './index.module.scss'

// import { Button, Space, DatePicker, version } from 'antd';
import { Select } from "antd"
import axios from 'axios';

function Start() {
    console.log('Start')
    const [room, setRoom] = useState(null)
    const [passRoom, setPassRoom] = useState(null)


  const onChangeRoom = (event:any) => {
    setRoom(event.target.value)
  }
  const onChangePass = (event:any) => {
    setPassRoom(event.target.value)
  }
    

//   const options:any = start()

  return (
    <div className="main-block">
      
      <div className='flex mb-1'>
        <Input
          placeholder="Номер Комнаты"
          size="large"
          value={room || ''}
          onChange={onChangeRoom}
          className='mr-1'
        />
        <Input
          placeholder="Пароль Комнаты"
          size="large"
          value={passRoom || ''}
          onChange={onChangePass}
        />
    </div>
    <Button
      size="large"
      block
      className='mb-1'
      type='primary'>
        Вход
    </Button>
        {/* {JSON.stringify(user)} */}


     </div>
  );
}


export default Start;
