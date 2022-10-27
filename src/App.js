import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asynsActions/customers";
import {useState} from "react";
import {asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator} from "./store/countReducer";
import {fetchUsers} from "./store/userReducer";

function App() {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }
    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }


    const [sage, setSaga] = useState(false)

    const count = useSelector(state => state.count.count)
    const users = useSelector(state => state.users.users)
    /*const dispatch = useDispatch()*/

    return (
        <div className="App">
            <button onClick={() => {
                setSaga(true)
            }}>Включить Redux Saga
            </button>
            <button onClick={() => {
                setSaga(false)
            }}>Включить темы до Redux Saga
            </button>
            {!sage ?
                <div>
                    <div>{cash}</div>
                    <div style={{display: 'flex'}}>
                        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                        <button onClick={() => getCash(Number(prompt()))}>Удалить клиент</button>
                        <button onClick={() => dispatch(fetchCustomers())}>Добавить много клиентов из базы</button>
                    </div>
                    <div>
                        {customers.length > 0 ?
                            <div>
                                {customers.map(customer => (
                                    <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
                                ))}
                            </div>
                            : <div>
                                Клиенты отсутствуют
                            </div>}
                    </div>
                </div>

                :
                <div>
                    <div>{count}</div>
                    <div>
                        <button onClick={() => dispatch(asyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
                        <button onClick={() => dispatch(asyncDecrementCreator())}>ДЕКРЕМЕНТ--</button>
                        <button onClick={() => dispatch(fetchUsers())}>ПОЛУЧИТ ЮЗЕРОВ</button>
                    </div>
                    <div>
                        {users.map(user => (
                            <div>
                                {user.name}
                            </div>
                        ))}
                    </div>
                </div>
            }

        </div>
    );
}

export default App;
