import sqlite3
print('start')
profList = [
    {
        "id": 1,
        "name": "Учитель",
            "balance": 400,
        "income": {
            "base": 3300
        },
        "expenses": {
            "tax": 500,
            "houseMortgagePayment": 500,
            "studentLoanPayment": 100,
            "carLoanPayment": 100,
            "creditCardPayment": 200,
            "otherExpenses": 700,
            "bankLoanPayment": 0,
            "childrenExpenses": 200
        },
        "liabilities": {
            "houseMortgage": 50000,
            "educationLoans": 12000,
            "carLoans": 5000,
            "creditCardDebt": 5000
        }
    },
    {
        "id": 2,
        "name": "Уборщик",
        "balance": 600,
        "income": {
        "base": 1600
    },
    "expenses": {
        "tax": 300,
        "houseMortgagePayment": 200,
        "studentLoanPayment": 0,
        "carLoanPayment": 100,
        "creditCardPayment": 100,
        "otherExpenses": 300,
        "bankLoanPayment": 0,
        "childrenExpenses": 100
    },
    "liabilities": {
        "houseMortgage": 20000,
        "educationLoans": 0,
        "carLoans": 4000,
        "creditCardDebt": 3000
    }
    },
    {
        "id": 3,
        "name": "Полицейский",
        "balance": 500,
        "income": {
            "base": 3000
        },
        "expenses": {
            "tax": 600,
            "houseMortgagePayment": 400,
            "studentLoanPayment": 0,
            "carLoanPayment": 100,
            "creditCardPayment": 100,
            "otherExpenses": 700,
            "bankLoanPayment": 0,
            "childrenExpenses": 200
        },
        "liabilities": {
            "houseMortgage": 46000,
            "educationLoans": 0,
            "carLoans": 5000,
            "creditCardDebt": 3000
        }
    },
    {
        "id": 4,
        "name": "Инженер",
        "balance": 400,
        "income": {
            "base": 4900
        },
        "expenses": {
            "tax": 1000,
            "houseMortgagePayment": 700,
            "studentLoanPayment": 100,
            "carLoanPayment": 200,
            "creditCardPayment": 200,
            "otherExpenses": 1000,
            "bankLoanPayment": 0,
            "childrenExpenses": 200
        },
        "liabilities": {
            "houseMortgage": 75000,
            "educationLoans": 12000,
            "carLoans": 7000,
            "creditCardDebt": 5000
        }
        },
    {
        "id": 5,
        "name": "Секретарь",
        "balance": 700,
        "income": {
            "base": 2500
        },
        "expenses": {
            "tax": 500,
            "houseMortgagePayment": 400,
            "studentLoanPayment": 0,
            "carLoanPayment": 100,
            "creditCardPayment": 100,
            "otherExpenses": 600,
            "bankLoanPayment": 0,
            "childrenExpenses": 100
        },
        "liabilities": {
            "houseMortgage": 38000,
            "educationLoans": 0,
            "carLoans": 4000,
            "creditCardDebt": 3000
        }
    },
    {
        "id": 6,
        "name": "Пилот Авиалиний",
        "balance": 2500,
        "income": {
            "base": 9500
        },
        "expenses": {
            "tax": 2000,
            "houseMortgagePayment": 1000,
            "studentLoanPayment": 0,
            "carLoanPayment": 300,
            "creditCardPayment": 700,
            "otherExpenses": 2000,
            "bankLoanPayment": 0,
            "childrenExpenses": 400
        },
        "liabilities": {
            "houseMortgage": 90000,
            "educationLoans": 0,
            "carLoans": 15000,
            "creditCardDebt": 22000
        }
    },
    {
        "id": 7,
        "name": "Юрист",
        "balance": 2000,
        "income": {
            "base": 7500
        },
        "expenses": {
            "tax": 1800,
            "houseMortgagePayment": 1100,
            "studentLoanPayment": 300,
            "carLoanPayment": 200,
            "creditCardPayment": 200,
            "otherExpenses": 1500,
            "bankLoanPayment": 0,
            "childrenExpenses": 400
        },
        "liabilities": {
            "houseMortgage": 115000,
            "educationLoans": 78000,
            "carLoans": 11000,
            "creditCardDebt": 7000
        }
    },
    {
        "id": 8,
        "name": "Менеджер",
        "balance": 400,
        "income": {
            "base": 4600
        },
        "expenses": {
            "tax": 900,
            "houseMortgagePayment": 700,
            "studentLoanPayment": 100,
            "carLoanPayment": 100,
            "creditCardPayment": 200,
            "otherExpenses": 1000,
            "bankLoanPayment": 0,
            "childrenExpenses": 300
        },
        "liabilities": {
            "houseMortgage": 75000,
            "educationLoans": 12000,
            "carLoans": 6000,
            "creditCardDebt": 4000
        }
    },
    {
        "id": 9,
        "name": "Водитель Грузовика",
        "balance": 800,
        "income": {
            "base": 2500
        },
        "expenses": {
            "tax": 500,
            "houseMortgagePayment": 400,
            "studentLoanPayment": 0,
            "carLoanPayment": 100,
            "creditCardPayment": 100,
            "otherExpenses": 600,
            "bankLoanPayment": 0,
            "childrenExpenses": 200
        },
        "liabilities": {
            "houseMortgage": 38000,
            "educationLoans": 0,
            "carLoans": 4000,
            "creditCardDebt": 3000
        }
    },
    {
        "id": 10,
        "name": "Механик",
        "balance": 700,
        "income": {
            "base": 2000
        },
        "expenses": {
            "tax": 400,
            "houseMortgagePayment": 300,
            "studentLoanPayment": 0,
            "carLoanPayment": 100,
            "creditCardPayment": 100,
            "otherExpenses": 400,
            "bankLoanPayment": 0,
            "childrenExpenses": 100
        },
        "liabilities": {
            "houseMortgage": 31000,
            "educationLoans": 0,
            "carLoans": 3000,
            "creditCardDebt": 3000
        }
    },
    {
        "id": 11,
        "name": "Врач",
        "balance": 3500,
        "income": {
            "base": 13200
        },
        "expenses": {
            "tax": 3200,
            "houseMortgagePayment": 1900,
            "studentLoanPayment": 700,
            "carLoanPayment": 300,
            "creditCardPayment": 200,
            "otherExpenses": 2000,
            "bankLoanPayment": 0,
            "childrenExpenses": 700
        },
        "liabilities": {
            "houseMortgage": 202000,
            "educationLoans": 150000,
            "carLoans": 19000,
            "creditCardDebt": 10000
        }
    },
    {
        "id": 12,
        "name": "Медсестра",
        "balance": 500,
        "income": {
            "base": 3100
        },
        "expenses": {
            "tax": 600,
            "houseMortgagePayment": 400,
            "studentLoanPayment": 100,
            "carLoanPayment": 100,
            "creditCardPayment": 200,
            "otherExpenses": 600,
            "bankLoanPayment": 0,
            "childrenExpenses": 200
        },
        "liabilities": {
            "houseMortgage": 47000,
            "educationLoans": 6000,
            "carLoans": 5000,
            "creditCardDebt": 4000
        }
    },
]

def create ():
    print('create')
    # создаем базу данных, в один шаг
    conn = sqlite3.connect('basa.sql')
    cur = conn.cursor()
    cur.execute(
        'CREATE TABLE IF NOT EXISTS list (id int, name TEXT, balance INT, income INT, tax INT, houseMortgagePayment INT, studentLoanPayment INT, carLoanPayment INT, creditCardPayment INT, otherExpenses INT, bankLoanPayment INT, childrenExpenses INT, houseMortgage INT, educationLoans INT, carLoans INT, creditCardDebt INT)')
    conn.commit()
    cur.execute('DELETE FROM list')
    conn.commit()
    print('create table')
    for item in profList:
        id = item['id']
        name = item['name']
        balance = item['balance']
        income = item['income']['base']
        tax = item['expenses']['tax']
        houseMortgagePayment = item['expenses']['houseMortgagePayment']
        studentLoanPayment = item['expenses']['studentLoanPayment']
        carLoanPayment = item['expenses']['carLoanPayment']
        creditCardPayment = item['expenses']['creditCardPayment']
        otherExpenses = item['expenses']['otherExpenses']
        bankLoanPayment = item['expenses']['bankLoanPayment']
        childrenExpenses = item['expenses']['childrenExpenses']
        houseMortgage = item['liabilities']['houseMortgage']
        educationLoans = item['liabilities']['educationLoans']
        carLoans = item['liabilities']['carLoans']
        creditCardDebt = item['liabilities']['creditCardDebt']
        print('create item', name)
        cur.execute('INSERT INTO list (id, name, balance, income, tax, houseMortgagePayment, studentLoanPayment, carLoanPayment, creditCardPayment, otherExpenses, bankLoanPayment, childrenExpenses, houseMortgage, educationLoans, carLoans, creditCardDebt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', (id, name, balance, income, tax, houseMortgagePayment, studentLoanPayment, carLoanPayment, creditCardPayment, otherExpenses, bankLoanPayment, childrenExpenses, houseMortgage, educationLoans, carLoans, creditCardDebt,))
    conn.commit()
    print('finish')
    # получаем список
    cur.execute('SELECT * FROM list')
    lists = cur.fetchall()
    cur.close()
    conn.close()
    print(lists)
    
create()