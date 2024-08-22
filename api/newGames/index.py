import sqlite3
from django.urls import path
import random




creditCount = 0
childrenCount = 0

isHouseMortgage = True
isStudentLoanPayment = True
isCarLoanPayment = True
isCreditCardDebt = True
    

def newGame():
    print('newGame')
    password = random.randrange(1000, 9999)
    conn = sqlite3.connect('basa.sql')
    cur = conn.cursor()
    # cur.execute('INSERT INTO games (password) VALUES (?)', (password,))
    cur.execute('INSERT INTO games (password) VALUES (?)', (password, ))
    # cur.execute('INSERT INTO games (password) VALUES (?)')

    cur.lastrowid
    # cur.execute('INSERT INTO games (password, ) VALUES (?, )', (password, ))
    conn.commit()
    print('2222222', cur.lastrowid)

    cur.execute("SELECT * FROM games WHERE id = ?", (cur.lastrowid,))


    print('finish')
    # получаем список
    # cur.execute('SELECT * FROM games')
    lists = cur.fetchall()
    cur.close()
    conn.close()
    # print(lists)
 
    print(2, lists[0])
    result = lists[0]
    print(33333, result[0])

    return {
        'id': result[0],
        'password': result[1],
    }

def hisThueGame(body):
    id = body['id']
    password = body['password']
    conn = sqlite3.connect('basa.sql')
    cur = conn.cursor()
    cur.execute("SELECT * FROM games WHERE id = ? AND password =?", (id, password,))
    lists = cur.fetchall()
    cur.close()
    conn.close()
    if not lists:
        return 0
    return 1
