import sqlite3
from django.urls import path



creditCount = 0
childrenCount = 0

isHouseMortgage = True
isStudentLoanPayment = True
isCarLoanPayment = True
isCreditCardDebt = True
    
def income(user):
    base = user['income']['base']
    tax = user['expenses']['tax']
    base -= tax
    houseMortgage = user['liabilities']['houseMortgage']
    educationLoans = user['liabilities']['educationLoans']
    carLoans = user['liabilities']['carLoans']
    creditCardDebt = user['liabilities']['creditCardDebt']
    if houseMortgage > 0:
        houseMortgagePayment = user['expenses']['houseMortgagePayment']
        base -= houseMortgagePayment
    if educationLoans > 0:
        studentLoanPayment = user['expenses']['studentLoanPayment']
        base -= studentLoanPayment
    if carLoans > 0:
        carLoanPayment = user['expenses']['carLoanPayment']
        base -= carLoanPayment
    if creditCardDebt > 0:
        creditCardPayment = user['expenses']['creditCardPayment']
        base -= creditCardPayment
    otherExpenses = user['expenses']['otherExpenses']
    base -= otherExpenses
    if creditCount > 0:
        base -= creditCount / 10
    if childrenCount > 0:
        childrenExpenses = user['expenses']['childrenExpenses']
        base -= childrenCount * childrenExpenses
    print(base)
    return base

def getProf(id):
    conn = sqlite3.connect('basa.sql')
    cur = conn.cursor()
    cur.execute('SELECT * FROM list WHERE id = ?', (id,))
    lists = cur.fetchall()
    cur.close()
    conn.close()
    if lists:
        item = lists[0]
        result = {
        "id": item[0],
        "name": item[1],
        "balance": item[2],
        "income": {
            "base": item[3],
        },
        "expenses": {
            "tax": item[4],
            "houseMortgagePayment": item[5],
            "studentLoanPayment": item[6],
            "carLoanPayment": item[7],
            "creditCardPayment": item[8],
            "otherExpenses": item[9],
            "bankLoanPayment": item[10],
            "childrenExpenses": item[11],
        },
        "liabilities": {
            "houseMortgage": item[12],
            "educationLoans": item[13],
            "carLoans": item[14],
            "creditCardDebt": item[15],
        },
        }
        result['result'] = income(result)
        return result

def getList():
    print('getList')
    conn = sqlite3.connect('basa.sql')
    cur = conn.cursor()
    cur.execute('SELECT id, name FROM list')
    lists = cur.fetchall()
    cur.close()
    conn.close()
    result = []
    if lists:
        for item in lists:
            result.append({
                "value": item[0],
                "label": item[1]
            })
    print(1, result)
    return result


# def start():
#     user = getProf('Учитель')
#     print(user)
#     income(user)

# start()


# urlpatterns = [
#     path('', views.users_view),
#     path('<int:user_id>/pets/<int:pet_id>/med_info/', views.pet_med_info_view),

# ]


