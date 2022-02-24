import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createRace, tempForDog, unmountTemps, getTemps} from '../../Redux/action'
import styles from '../css/CreateRace.module.css'

const CreateRace = () => {
    const dispatch = useDispatch()
    const { temps, tempsForDog } = useSelector(state => state);
    const [values, setValues] = useState({
        name:'',
        hMin:'',
        hMax:'',
        wMin:'',
        wMax:'',
        ageMin:'',
        ageMax:'',
        temp: ''
    })
    const handleElim = (data) => {
        dispatch(unmountTemps(data))
    }
    const handleOnSubmitTemp = (e) => {
        e.preventDefault();
        dispatch(tempForDog(values.temp))
    }

    const handleChange = ({target: {name, value }}) => {
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Values:', values)
        if(values.name!=='' && values.hMin!=='' && values.hMax!=='' && values.wMin!==''&&
            values.wMax!=='' &&values.ageMin!=='' &&values.ageMax!==''&&values.temp!==''){
            dispatch(createRace({...values, tempsForDog}))
            setValues({
                name:'',
                hMin:'',
                hMax:'',
                wMin:'',
                wMax:'',
                ageMin:'',
                ageMax:''
            })
            alert('Raza creada con exito')
        }else{
            alert('no se pudo crear esta raza, revisa los datos no pueden estar vacios')
        }
    }
    useEffect(() => {
        dispatch(getTemps())
    }, [dispatch])  
    // console.log('----> temps state: ', temps)
    return (
        <div className={styles.contentForm}>
            <form className={styles.form} onSubmit={handleOnSubmit}>
                <label style={{fontSize:'20px'}}>Name of Race</label>
                <input className={styles.formu} name='name' onChange={handleChange} type='text' value={values.name}/>
                <label style={{fontSize:'20px'}}>Height</label>
                <div className={styles.direction}>
                <input className={styles.formu} name='hMin' onChange={handleChange} type='number' min='5' max='30' value={values.hMin} placeholder='min'/>
                <input className={styles.formu} name='hMax' onChange={handleChange} type='number' min='10' max='80' value={values.hMax}placeholder='max'/>
                </div>
                <label style={{fontSize:'20px'}}>Weight</label>
                <div className={styles.direction}>
                <input className={styles.formu} name='wMin' onChange={handleChange} type='number' min='1' max='40'value={values.wMin} placeholder='min'/>
                <input className={styles.formu} name='wMax' onChange={handleChange} type='number' min='3' max='50'value={values.wMax} placeholder='max'/>
                </div>
                <label style={{fontSize:'20px'}}>Age</label>
                <div className={styles.direction}>
                <input className={styles.formu} name='ageMin' onChange={handleChange} type='number' min='5' max='8'value={values.ageMin} placeholder='min'/>
                <input className={styles.formu} name='ageMax' onChange={handleChange} type='number' min='8' max='80'value={values.ageMax} placeholder='max'/>
                </div>
                <button className={styles.crear}>Crear</button>
            </form>
            <div className={styles.form1}>
                <label style={{fontSize:'20px'}}>Temperaments</label>
                <div className={styles.orden}>
                <select className={styles.select2} name="temp" onChange={handleChange} value={values.temp}>
                    <option value=''>-</option>
                    {
                        temps.map(s => (
                            <option className={styles.option1} key={s.name} value={s.name}>{s.name}</option>
                            ))
                        }
                </select>
                <button className={styles.sum} onClick={handleOnSubmitTemp}>+</button>
                <div className={styles.info} onClick={()=>alert('Clickea en el temperamento para removerlo')}>!</div>
                </div>
            <div>{tempsForDog.map(el => (<li className={styles.li} onClick={()=>handleElim(el)}>♥ {el}</li>))}</div>
            </div>
        </div>
    )
}

export default CreateRace