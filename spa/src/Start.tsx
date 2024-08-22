import React, {useState} from 'react'

import './assets/App.css';
import {Input, Button, Select} from "antd";
import api from "./hepler/api";
// import style from './index.module.scss'
// import { Button, Space, DatePicker, version } from 'antd';
// import {Select} from "antd"
import {connect} from 'react-redux';
import {setGame, setGameId, setGamePassword} from './store/actions'
import {localGet, localRemove, localSet} from "./hepler/storage";

function Start({dispatch, games}: any) {
    const [gameId, setGameId] = useState(games?.id)
    const [gamePass, setGamePass] = useState(games?.password)
    const [message, setMessage] = useState('')
    const [user, setUser] = useState(localGet('user'))
    const [options, setOptions] = useState([])
    const start = async () => {
        const result = await api.get('list')
        setOptions(result)
    }
    if (options.length === 0) {
        start()
    }

    const onChangeRoom = (event: any) => {
        setGameId(event.target.value)
    }
    const onChangePass = (event: any) => {
        setGamePass(event.target.value)
    }
    const onClearGame = (event: any) => {
        localRemove('games')
        localRemove('user')
        dispatch(setGame({id: null, password: null}))
    }

    const onNewGame = async () => {
        localRemove('games')
        localRemove('user')
        const result = await api.get('create_game')
        if (result?.id) {
            dispatch(setGame({id: result.id, password: result.password}))
        }
    }
    const onSignGame = async () => {
        const data:any = {id: Number(gameId), password: Number(gamePass)}
        const result = await api.post('in_game', data)
        data.status = !!result
        dispatch(setGame(data))
        if(!result) {
            setGamePass(null)
            setMessage('Такой комнаты не существует или не верный пароль')
        } else {
            setMessage('')
        }
    }

    const getUserInfo = async (id: string) => {
        const result = await api.get(`item/${id}`)
        games.userId = Number(id)
        localSet('games', games)
        console.log({games})
        setGame(games)
        setUser(result)
        localSet('user', result)

    }


    return (
        <div className="main-block">
            <Button
                shape="circle"
                onClick={onClearGame}
                disabled={!games?.password}
                type='primary'>
                -
            </Button>
            <h3 className='my-1'>
                Войдите в игру или Создайте новую
            </h3>
            {message &&
              <h4 className='danger-text'>
                  {message}
              </h4>
            }
            {JSON.stringify(games)}
            <div className='flex mb-1'>
                <Input
                    placeholder="Номер Комнаты"
                    size="large"
                    value={gameId || ''}
                    disabled={games?.status}
                    onChange={onChangeRoom}
                    className="mr-1 dark-select"
                />
                <Input
                    placeholder="Пароль Комнаты"
                    size="large"
                    disabled={games?.status}
                    value={gamePass || ''}
                    onChange={onChangePass}
                    className="dark-select"
                />
            </div>
            {!games?.status &&
                <div>
                  <Button
                    size="large"
                    block
                    className='mb-1 success'
                    onClick={onSignGame}
                    disabled={!gameId || !gamePass}
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
                  <div>
                  </div>
                </div>
            }
            {(games?.status && !games?.userId) &&
              <Select
                size="large"
                defaultValue="Выберите профессию"
                onChange={getUserInfo}
                options={options}
                className='select'
              />
            }
        </div>
    );
}

export default connect()(Start)
