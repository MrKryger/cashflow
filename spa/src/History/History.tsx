import React, { useState } from 'react'

import logo from './logo.svg';
import '../App.css';
import { Input, Button } from "antd";
// import style from './index.module.scss'

// import { Button, Space, DatePicker, version } from 'antd';
import { Select } from "antd"
import axios from 'axios';

function History() {
    console.log('History')
    const [options, setOptions] = useState([])
    const [user, setUser] = useState(null)
    const [room, setRoom] = useState(null)
    const [passRoom, setPassRoom] = useState(null)

    const littleOrder = [
        { name: 'Акции ON2U', price: 5, value: 1000, result: 0 }
    ]


  const onChangeRoom = (event:any) => {
    setRoom(event.target.value)
  }
  const onChangePass = (event:any) => {
    setPassRoom(event.target.value)
  }
    
  const handleChange = (event:any) => {
    setPassRoom(event.target.value)
  }
//   const options:any = start()

  return (
    <div className="main-block mt-1">
        <h2>История Операций</h2>
        <table className="iksweb">
            <tbody>
                {littleOrder.map((item:any, i) =>
                    <tr>
                        {JSON.stringify(item)}
                        <td>{ item?.['name'] }</td>
                        <td>{ item?.['price'] }</td>
                        <td>{ item?.['value'] }$</td>
                        <td>{ item?.['value'] / item?.['price'] }$</td>
                    </tr>
                )}
            </tbody>
        </table>
      
        <div className='flex mb-1'>
        <Select
            size="large"
            defaultValue="Select"
            onChange={handleChange}
            options={options}
            className='select'
          />
        <Input
          placeholder="Номер Комнаты"
          size="large"
          value={room || ''}
          onChange={onChangeRoom}
          className='mr-1'
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


export default History;
