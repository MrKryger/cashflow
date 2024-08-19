import React, {useState} from 'react'

import logo from './logo.svg';
import '../assets/App.css';
import '../assets/modal.scss';
import {Input, Button} from "antd";
// import style from './index.module.scss'

// import { Button, Space, DatePicker, version } from 'antd';
import {Select} from "antd"

function Order() {
    const [options, setOptions] = useState([])
    const [user, setUser] = useState(null)
    const [room, setRoom] = useState(null)
    const [passRoom, setPassRoom] = useState(null)

    const littleOrder = [
        {name: 'Акции ON2U', price: 5, value: 1000, result: 0}
    ]


    const onChangeRoom = (event: any) => {
        setRoom(event.target.value)
    }
    const onChangePass = (event: any) => {
        setPassRoom(event.target.value)
    }

    const handleChange = (event: any) => {
        setPassRoom(event.target.value)
    }
//   const options:any = start()
    return (
    <div className="main-block mt-1">
        <h2>История Операций</h2>


        <div className='flex mb-1'>
            <Select
                size="large"
                defaultValue="Select"
                onChange={handleChange}
                options={options}
                className='select mr-1'
            />
            <Input
                placeholder="Номер Комнаты"
                value={room || ''}
                onChange={onChangeRoom}
            />

        </div>
        <Button
            size="large"
            block
            className='mb-1'
            type='primary'>
            Добавить
        </Button>
        {/* {JSON.stringify(user)} */}


    </div>
)
    ;
}


export default Order;
