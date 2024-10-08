import React, {useState} from 'react'

import logo from './logo.svg';
import '../assets/App.css';
import {Input, Button, Select, Modal} from "antd";
import { DollarOutlined } from '@ant-design/icons';

// import style from './index.module.scss'

// import { Button, Space, DatePicker, version } from 'antd';
import api from "../hepler/api";
const BAY = 'Продажа'
const CHANCE = 'Шанс'

function History() {
    const [order, setOrder]:any = useState({})
    const [TypeBay, setTypeBay] = useState(null)
    const [priceResult, setPriceResult] = useState(null)

    const [user, setUser] = useState(null)
    const [isModalCloseOrder, setIsModalCloseOrder] = useState(false)
    const rule = {
        1: 'жилье на продажу с профитом каждый ход и возможность продажи',
        2: 'акции на продажу разово',
        3: 'шанс разовый',
        4: 'шанс разовый на монеты что можно продать',
        5: 'каждую ЗП шанс получить прибыль',
    }

    const littleOrder = [
        {id: 1, name: 'Акции ON2U', price: 5, value: 1000, result: 0, type: 2},
        {id: 2, name: 'Акции OK4U', price: 5, value: 1000, result: 0, type: 2},
        {id: 3, name: 'Акции MYT4U', price: 5, value: 1000, result: 0, type: 2},
        {id: 4, name: 'Акции GRO4US', price: 5, value: 1000, result: 0, type: 2},
        {id: 5, name: 'Другу срочно нужны деньги', price: 3000, value: 3000, result: 0, gold: 10, type: 2 },
        {id: 6, name: 'Коллекционер распродает монеты', price: 1000, value: 1000, result: 0, gold: 5, type: 3 },
        {id: 7, name: 'Свояченица просит одолжить денег', price: 5000, value: 10000, result: 0, type: 3 },
        {id: 8, name: 'Наследство', price: 750, value: 750, result: 0, gold: 10, type: 4},
        {id: 9, name: 'Что в шкатулке?', price: 500, value: 750, result: 0, gold: 10, type: 4},
        {id: 10, name: 'Сетевой маркетинг', price: 500, value: 500, result: 0, type: 5},
        {id: 11, name: 'Дом на продажу 2/1 070', price: 50000, mortgage: 47000, firstPay: 3000, profit: 100, result: 0, type: 1},
        {id: 12, name: 'Дом на продажу 2/1 069', price: 50000, mortgage: 46000, firstPay: 4000, profit: 200, result: 0, type: 1},
        {id: 13, name: 'Дом на продажу 2/1 078', price: 65000, mortgage: 60000, firstPay: 5000, profit: 160, result: 0, type: 1},
        {id: 14, name: 'Дом на продажу 2/1 080', price: 50000, mortgage: 48000, firstPay: 5000, profit: 200, result: 0, type: 1},
        {id: 15, name: 'Дом на продажу 2/1 076', price: 45000, mortgage: 43000, firstPay: 2000, profit: 250, result: 0, type: 1},
        {id: 16, name: 'Дом на продажу 2/1 077', price: 35000, mortgage: 33000, firstPay: 2000, profit: 220, result: 0, type: 1},
        {id: 17, name: 'Дом на продажу 2/1 079', price: 30000, mortgage: 29000, firstPay: 1000, profit: 0, result: 0, type: 1},
        {id: 18, name: 'Квартира на продажу 2/1 072', price: 40000, mortgage: 35000, firstPay: 5000, profit: 220, result: 0, type: 1},
        {id: 19, name: 'Квартира на продажу 2/1 068', price: 55000, mortgage: 50000, firstPay: 5000, profit: 160, result: 0, type: 1},
        {id: 20, name: 'Квартира на продажу 2/1 071', price: 40000, mortgage: 36000, firstPay: 4000, profit: 140, result: 0, type: 1},
        {id: 21, name: 'Квартира на продажу 2/1 073', price: 40000, mortgage: 39000, firstPay: 1000, profit: 0, result: 0, type: 1},
    ]

    const bigOrder = [
        {name: 'Многоквартирный дом 154', price: 1200000, mortgage: 1000000, firstPay: 200000, profit: 11000, result: 0, type: 1},
        {name: 'Многоквартирный дом 125', price: 575000, mortgage: 500000, firstPay: 75000, profit: 3600, result: 0, type: 1},
        {name: 'Многоквартирный дом 156', price: 550000, mortgage: 500000, firstPay: 50000, profit: 2400, result: 0, type: 1},
        {name: 'Многоквартирный дом 155', price: 350000, mortgage: 300000, firstPay: 50000, profit: 3000, result: 0, type: 1},
        {name: 'Автоматизированный бизнес 122', price: 125000, mortgage: 100000, firstPay: 25000, profit: 1800, result: 0, type: 1},
        {name: 'Автоматизированный бизнес 123', price: 150000, mortgage: 120000, firstPay: 30000, profit: 2500, result: 0, type: 1},
        {name: 'Автоматизированный бизнес 124', price: 180000, mortgage: 160000, firstPay: 20000, profit: 1600, result: 0, type: 1},
        {name: 'Автомойка 130', price: 350000, mortgage: 300000, firstPay: 50000, profit: 2500, result: 0, type: 1},
        {name: 'Дуплекс 142', price: 260000, mortgage: 250000, firstPay: 10000, profit: 1100, result: 0, type: 1},
        {name: 'Дуплекс 138', price: 170000, mortgage: 152000, firstPay: 18000, profit: 900, result: 0, type: 1},
        {name: 'Дуплекс 140', price: 245000, mortgage: 233000, firstPay: 12000, profit: 800, result: 0, type: 1},
        {name: 'Дуплекс 141', price: 250000, mortgage: 234000, firstPay: 16000, profit: 900, result: 0, type: 1},
        {name: '8-плекс 153', price: 240000, mortgage: 200000, firstPay: 40000, profit: 1800, result: 0, type: 1},
        {name: '8-плекс 150', price: 320000, mortgage: 280000, firstPay: 40000, profit: 1700, result: 0, type: 1},
        {name: '8-плекс 151', price: 360000, mortgage: 328000, firstPay: 32000, profit: 1800, result: 0, type: 1},
        {name: '8-плекс 152', price: 250000, mortgage: 210000, firstPay: 40000, profit: 2000, result: 0, type: 1},
        {name: 'Дуплекс 143', price: 260000, mortgage: 248000, firstPay: 12000, profit: 600, result: 0, type: 1},
        {name: 'Франшиза за пиццерию 129', price: 500000, mortgage: 400000, firstPay: 100000, profit: 5000, result: 0, type: 1},
        {name: 'Дом 3/2 131', price: 300000, mortgage: 280000, firstPay: 20000, profit: 1000, result: 0, type: 1},
        {name: 'Дом 3/2 132', price: 300000, mortgage: 288000, firstPay: 12000, profit: 800, result: 0, type: 1},
        {name: 'Дом 3/2 133', price: 270000, mortgage: 255000, firstPay: 15000, profit: 800, result: 0, type: 1},
        {name: 'Дом 3/2 134', price: 225000, mortgage: 211000, firstPay: 14000, profit: 750, result: 0, type: 1},
        {name: 'Дом 3/2 135', price: 325000, mortgage: 307000, firstPay: 18000, profit: 900, result: 0, type: 1},
        {name: 'Дом 3/2 136', price: 350000, mortgage: 330000, firstPay: 20000, profit: 1000, result: 0, type: 1},
        {name: 'Дом 3/2 137', price: 275000, mortgage: 260000, firstPay: 15000, profit: 800, result: 0, type: 1},
        {name: 'Дом 3/2 139', price: 275000, mortgage: 259000, firstPay: 16000, profit: 750, result: 0, type: 1},
        {name: '4-плекс 146', price: 290000, mortgage: 275000, firstPay: 15000, profit: 800, result: 0, type: 1},
        {name: '4-плекс 144', price: 225000, mortgage: 210000, firstPay: 15000, profit: 700, result: 0, type: 1},
        {name: '4-плекс 145', price: 370000, mortgage: 360000, firstPay: 10000, profit: 900, result: 0, type: 1},
        {name: '4-плекс 149', price: 340000, mortgage: 308000, firstPay: 32000, profit: 1400, result: 0, type: 1},
        {name: '4-плекс 147', price: 280000, mortgage: 264000, firstPay: 16000, profit: 1000, result: 0, type: 1},
        {name: '4-плекс 148', price: 300000, mortgage: 280000, firstPay: 20000, profit: 1100, result: 0, type: 1},
        {name: 'Требуется партнер 121', price: 25000, mortgage: 0, firstPay: 25000, profit: 1300, result: 0, type: 1},
        {name: 'Требуется партнер 126', price: 20000, mortgage: 0, firstPay: 20000, profit: 1200, result: 0, type: 1},
        {name: 'Требуется партнер 127', price: 30000, mortgage: 0, firstPay: 30000, profit: 1500, result: 0, type: 1},
        {name: 'Требуется партнер 128', price: 30000, mortgage: 0, firstPay: 30000, profit: 1700, result: 0, type: 1},

    ]

    const invest = [
        {name: 'Новая система управления', desc: 'if bisiness <= 1000$ + 400$'},
        {name: 'Бум малого бизнеса>', desc: 'if bisiness <= 1000$ + 250$'},
    ]

    const other = [
        {name: 'Прорвало канализацию 086', value: 1000},
        {name: 'Прорвало канализацию 085', value: 2000},
        {name: 'Жилец нанес ущерб 089', value: 1000},
        {name: 'Жилец нанес ущерб 090', value: 500},
        {name: 'Жилец нанес ущерб 091', value: 500},
    ]



    // выбор ордера и запись в временную запись
    const selectOrder = (item: any) => {
        setIsModalCloseOrder(true)
        setOrder(item)
    }
    // выбор типа изменения ордера
    const changeTypeBay = (item: any) => {
        setTypeBay(item)
        if(BAY === item) {

        }
        if(CHANCE === item) {

        }
    }
    // выбор типа изменения ордера
    const onPriceResult = (item: any) => {
        setPriceResult(item.target.value)
        order.result = Number(item.target.value)
        setOrder(order)
    }

    const saveOrder = async () => {
        const result = await api.post(`order/${order.id}`, { order })
        console.log(result)
        // setValueUser(data?.data?.data)
    }

    const handleOk = (event: any) => {
        setIsModalCloseOrder(false)
        // setPassRoom(event.target.value)
    }

    const handleCancel = (event: any) => {
        // setPassRoom(event.target.value)
        setIsModalCloseOrder(false)
    }

    const options = [
        { label: BAY, value: BAY },
        { label: CHANCE, value: CHANCE },

    ]
    return (
    <div className="main-block mt-1">
        <h2>История Операций</h2>
        <table className="iksweb">
            <thead>
            <tr>
                <th>Название</th>
                <th>Цена покупки за ед.</th>
                <th>Вложение</th>
                <th>Монеты 🪙</th>
                <th>Закрытие</th>
            </tr>
            </thead>
            <tbody>
            {littleOrder.map((item: any, i) =>
                <tr key={i}>
                    <td>{item?.['name']}</td>
                    <td>{item?.['price']} $</td>
                    <td>
                        { !!item?.['value'] &&
                          <div className='danger-text'>- {item?.['value']} $</div>
                        }
                        { !!item?.['firstPay'] &&
                          <div>
                              <div className='danger-text'>- {item?.['firstPay']} $</div>
                              <div className='success-text'>💸(+ {item?.['profit']} $)</div>
                          </div>
                        }
                    </td>
                    <td className='success-text'>
                        {item?.['gold']}
                    </td>
                    <td className='td-center'>
                        {!item?.['result'] &&
                          <Button
                            onClick={() => selectOrder(item)}
                            type="primary"
                            shape="circle"
                            icon={<DollarOutlined/>}
                          />
                        }
                        { !!item?.['result'] &&
                          <div className='success-text'>
                              {item?.['result']} $
                          </div>
                        }
                    </td>
                </tr>
            )}
            </tbody>
        </table>
          <Modal title="Basic Modal" open={isModalCloseOrder} onOk={handleOk} onCancel={handleCancel}>
              <Select
                  size="large"
                  defaultValue="Select"
                  onChange={changeTypeBay}
                  options={options}
                  className='select'
              />
              { TypeBay === BAY &&
                <div>
                  <Input
                    placeholder="Цена продажи"
                    size="large"
                    value={priceResult || 0}
                    onChange={onPriceResult}
                  />
                  <Button
                    onClick={saveOrder}
                    size="large"
                    block
                    className='mb-1'
                    type='primary'>
                    Сохранить
                  </Button>
                </div>
              }
              { TypeBay === CHANCE &&
                <div>

                </div>
              }
          </Modal>

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
