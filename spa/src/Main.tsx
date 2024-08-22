import React from 'react'
import './assets/App.css';

function Main({games, user}: any) {
    return (
        <div className="main-block">
            <table className="iksweb">
                <tbody>
                <tr>
                    <td>Профессия</td>
                    <td><b>{user?.['name']}</b></td>
                    <td>{user?.['income']['base']}$</td>
                </tr>
                <tr>
                    <td colSpan={3}>Расходы</td>
                </tr>
                <tr>
                    <td>Налоги:</td>
                    <td>{user?.['expenses']['tax']} $</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Выплата по ипотеке на дом:</td>
                    <td>{user?.['liabilities']['houseMortgage']} $</td>
                    <td className='danger-text'>- {user?.['expenses']['houseMortgagePayment']} $</td>
                </tr>
                <tr>
                    <td>Выплата по кредиту на образование:</td>
                    <td>{user?.['liabilities']['educationLoans']} $</td>
                    <td className='danger-text'> - {user?.['expenses']['studentLoanPayment']} $</td>
                </tr>
                <tr>
                    <td>Выплата по кредиту на машину:</td>
                    <td>{user?.['liabilities']['carLoans']} $</td>
                    <td className='danger-text'>- {user?.['expenses']['carLoanPayment']} $</td>
                </tr>
                <tr>
                    <td>Выплата по кредитным карточкам:</td>
                    <td>{user?.['liabilities']['creditCardDebt']} $</td>
                    <td className='danger-text'>- {user?.['expenses']['creditCardPayment']} $</td>
                </tr>
                <tr>
                    <td>Прочие расходы:</td>
                    <td>{user?.['expenses']['otherExpenses']} $</td>
                    <td className='danger-text'>- {user?.['expenses']['otherExpenses']} $</td>
                </tr>
                <tr>
                    <td>Выплата по банковскому кредиту:</td>
                    <td>{user?.['expenses']['bankLoanPayment']} $</td>
                    <td className='danger-text'>- {user?.['expenses']['bankLoanPayment']} $</td>
                </tr>
                <tr>
                    <td>Расходы на детей:</td>
                    <td>{user?.['expenses']['childrenExpenses']} $</td>
                    <td className='danger-text'>- 0 $</td>
                </tr>
                <tr>
                    <td><b>Итог</b></td>
                    <td className='primary-text'>~{user?.['balance']} $</td>
                    <td className='success-text'>💸+ {user?.['result']} $</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}


export default Main;
