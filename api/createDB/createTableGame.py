import sqlite3
print('start')

def create ():
    print('create')
    # создаем базу данных, в один шаг
    conn = sqlite3.connect('basa.sql')
    cur = conn.cursor()
    cur.execute(
        'CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY AUTOINCREMENT, password INTEGER)')
    conn.commit()
    cur.execute('DELETE FROM games')
    conn.commit()
    print('finish')
    # получаем список
    cur.execute('SELECT * FROM games')
    lists = cur.fetchall()
    cur.close()
    conn.close()
    print(lists)
    
create()