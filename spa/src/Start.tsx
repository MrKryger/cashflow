import React, {useState} from 'react'

import './assets/App.css';
import {Input, Button} from "antd";
import api from "./hepler/api";
// import style from './index.module.scss'
// import { Button, Space, DatePicker, version } from 'antd';
// import {Select} from "antd"
import { connect } from 'react-redux';
import { setGame, setGameId, setGamePassword } from './store/actions'

function Start({ dispatch, games }:any) {
    const onChangeRoom = (event: any) => {
        dispatch(setGameId(event.target.value))
    }
    const onChangePass = (event: any) => {
        dispatch(setGamePassword(event.target.value))
    }

    const onNewGame = async () => {
        const result = await api.get('create_game')
        console.log(result)
        if (result?.id) {
            // setRoom(result.id)
            dispatch(setGame({ id: result.id, password: result.password }))
        }
    }
    const onSignGame = () => {
        const data = { id: Number(games?.id), password: Number(games?.password) }
        console.log({data})
        dispatch(setGame(data))
    }

//   const options:any = start()

    return (
        <div className="main-block">
            <h3 className='my-1'>
                Войдите в игру или Создайте новую
                -{JSON.stringify(games)}-

            </h3>
            <div className='flex mb-1'>
                <Input
                    placeholder="Номер Комнаты"
                    size="large"
                    value={games.id || ''}
                    onChange={onChangeRoom}
                    className='mr-1'
                />
                <Input
                    placeholder="Пароль Комнаты"
                    size="large"
                    value={games.password || ''}
                    onChange={onChangePass}
                />
            </div>
            <Button
                size="large"
                block
                className='mb-1'
                onClick={onSignGame}
                disabled={!games?.password}
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

export default connect()(Start)
