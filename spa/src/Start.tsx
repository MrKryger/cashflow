import React, {useState} from 'react'

import logo from './logo.svg';
import './assets/App.css';
import {Input, Button} from "antd";
import api from "./hepler/api";
// import style from './index.module.scss'

// import { Button, Space, DatePicker, version } from 'antd';
import {Select} from "antd"
import { setCookie } from "./hepler/cookie";

function Start() {
    console.log('Start')
    const [room, setRoom] = useState(null)
    const [passRoom, setPassRoom] = useState(null)

    const onChangeRoom = (event: any) => {
        setRoom(event.target.value)
    }
    const onChangePass = (event: any) => {
        setPassRoom(event.target.value)
    }

    const onNewGame = async () => {
        const result = await api.get('create_game')
        console.log(result)
        if (result?.id) {
            setRoom(result.id)
            setPassRoom(result.password)
        }
    }
    const onSignGame = () => {
        setCookie('room', String(room))
        setCookie('passRoom', String(passRoom))
    }

//   const options:any = start()

    return (
        <div className="main-block">
            <h3 className='my-1'>
                Войдите в игру или Создайте новую
            </h3>
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
                onClick={onSignGame}
                disabled={!passRoom}
                type='primary'>
                Вход в Игру
            </Button>
            <Button
                size="large"
                block
                className='mb-1'
                onClick={onNewGame}
            >
                Новая игра
            </Button>
        </div>
    );
}

export default Start;
