import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
// import style from './index.module.scss'

// import { Button, Space, DatePicker, version } from 'antd';
import { Select } from "antd"
import axios from 'axios';

function Main() {
    console.log('Main')
    const [options, setOptions] = useState([])
    const [user, setUser] = useState(null)
    const setValueUser = (data:any) => {
        setUser(data)
    }
    const setValue = (data:any) => {
        if(data) setOptions(data)
    }
    const start = async () => {
        const config = {
          method: 'GET',
          mode: 'no-corse',
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const data = await axios.get('http://0.0.0.0:8000/list', config)
        setValue(data?.data?.data)
      }
      if (options.length === 0) {
        start()
      }
      const handleChange = (event:any) => {
        getItem(event)
    }

    const getItem = async (id:number) => {
        const config = {
          method: 'GET',
          mode: 'no-corse',
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const data = await axios.get(`http://0.0.0.0:8000/item/${id}`, config)
        setValueUser(data?.data?.data)
      }
//   const options:any = start()

  return (
    <div className="main-block">
         <div>
          <Select
            size="large"
            defaultValue="Select"
            onChange={handleChange}
            options={options}
            className='select'
          />
        </div>
        {/* {JSON.stringify(user)} */}

        <table className="iksweb">
            <tbody>
                <tr>
                    <td>Профессия</td>
                    <td>{ user?.['name'] }</td>
                    <td>{ user?.['income']['base'] }$</td>
                </tr>
                <tr>
                    <td colSpan={3}>Расходы</td>
                </tr>
                <tr>
                    <td>Налоги:</td>
                    <td>{ user?.['expenses']['tax'] } $</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Выплата по ипотеке на дом:</td>
                    <td>{ user?.['liabilities']['houseMortgage'] } $</td>
                    <td className='danger-text'>- { user?.['expenses']['houseMortgagePayment'] } $</td>
                </tr>
                <tr>
                    <td>Выплата по кредиту на образование:</td>
                    <td>{ user?.['liabilities']['educationLoans'] } $</td>
                    <td className='danger-text'> - { user?.['expenses']['studentLoanPayment'] } $</td>
                </tr>
                <tr>
                    <td>Выплата по кредиту на машину:</td>
                    <td>{ user?.['liabilities']['carLoans'] } $</td>
                    <td className='danger-text'>- { user?.['expenses']['carLoanPayment'] } $</td>
                </tr>
                <tr>
                    <td>Выплата по кредитным карточкам:</td>
                    <td>{ user?.['liabilities']['creditCardDebt'] } $</td>
                    <td className='danger-text'>- { user?.['expenses']['creditCardPayment'] } $</td>
                </tr>
                <tr>
                    <td>Прочие расходы:</td>
                    <td>{ user?.['expenses']['otherExpenses'] } $</td>
                    <td className='danger-text'>- { user?.['expenses']['otherExpenses'] } $</td>
                </tr>
                <tr>
                    <td>Выплата по банковскому кредиту:</td>
                    <td>{ user?.['expenses']['bankLoanPayment'] } $</td>
                    <td className='danger-text'>- { user?.['expenses']['bankLoanPayment'] } $</td>
                </tr>
                <tr>
                    <td>Расходы на детей:</td>
                    <td>{ user?.['expenses']['childrenExpenses'] } $</td>
                    <td className='danger-text'>- 0 $</td>
                </tr>


                <tr>
                    <td><b>Итог</b></td>
                    <td className='primary-text'>~{ user?.['balance'] } $</td>
                    <td className='success-text'>+ {user?.['result']} $</td>
                </tr>
            </tbody>
        </table>
     </div>
  );
}










export default Main;
