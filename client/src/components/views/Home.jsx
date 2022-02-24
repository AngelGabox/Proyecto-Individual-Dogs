import React from 'react'
import Dogs from '../Dogs'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import styles from '../css/Homs.module.css'
import { byOrder, byTemp } from '../../Redux/action'

const Home = () => {
const dispatch = useDispatch()
const {dogs, temps} = useSelector(state => state)
const history = useHistory()
const handleOrder = (e) => {
    e.preventDefault();
    dispatch(byOrder(e.target.value))
}
const handleActivity = (e) => {
    e.preventDefault();
    dispatch(byTemp(e.target.value))
    history.push('/main?from=0')
}
    return (
        <div className={styles.divHome}>
            <div className={styles.direction}>   
            {
                dogs.length > 1 && 
                <select className={styles.order} onChange={handleOrder} value='-' >
                    <option className={styles.option} value="-">Ordenar por nombre</option>
                    <option className={styles.option} value="a-z">Nombre Asc</option>
                    <option className={styles.option} value="z-a">Nombre Desc</option>
                </select>
            }
            {
                dogs.length > 1 && 
                <select className={styles.order} onChange={handleOrder} value='-'>
                    <option className={styles.option} value="-">Ordenar por peso</option>
                    <option className={styles.option} value="menorMAYOR">Peso Asc</option>
                    <option className={styles.option} value="MAYORmenor">Peso Desc</option>
                </select>
            }
            {
                temps.length>0 && dogs.length > 1 &&
                <select className={styles.order} onChange={handleActivity} >
                    <option className={styles.option} value="">Temperamento</option>
                    {
                        temps.map(el => (<option className={styles.option} value={el.name}>{el.name}</option>) )
                    }
                </select>
            }
            </div>
            <Dogs/>
        </div>
    )
}

export default Home
