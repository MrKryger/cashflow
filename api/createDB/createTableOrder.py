import sqlite3
print('start')

def create ():
    print('create')
    # создаем базу данных, в один шаг
    conn = sqlite3.connect('basa.sql')
    cur = conn.cursor()
    cur.execute(
        'CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, id_game int, name TEXT, price INT, mortgage INT, firstPay INT, profit INT, gold INT, result INT)')
    conn.commit()
    cur.execute('DELETE FROM orders')
    conn.commit()
    print('finish')
    # получаем список
    cur.execute('SELECT * FROM orders')
    lists = cur.fetchall()
    cur.close()
    conn.close()
    print(lists)
    
create()