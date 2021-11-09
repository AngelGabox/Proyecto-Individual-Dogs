import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { getAllDogs, byName, getTemps } from '../Redux/action'
import Pagination from './Pagination'
import DogCard from './DogCard'
import DogsCards from './DogsCards'
import styles from './css/Dogs.module.css'

const Dogs = () => {
    const query = new URLSearchParams(useLocation().search.slice(1))
    const dispatch = useDispatch()  
    const { dogs } = useSelector(state => state);
    const name = query.get('name')
    const from = parseInt(query.get('from'))
    useEffect(() => {
        dispatch(getTemps())
        name? dispatch(byName(name))
        : dispatch(getAllDogs()) 
        // console.log('--->dogs: ', dogs.length)
    }, [dispatch, name])   
    
    return (
        <div className={styles.container}> 
            <div>
            {   
            dogs.length===1?
            (
                <div className={styles.content}>
                {
                    dogs.map(c => <DogCard key={c.id} dog={c}/>)    
                }
                </div>
            )          
            :name?(
                <div className={styles.dog}>
                    <div className={styles.direction}>                        
                        <div className={styles.content}>
                            {dogs.slice(from, from+2).map(c => <DogsCards key={c.id} dog={c}/>)}
                        </div>
                        <div className={styles.content}>
                            {dogs.slice(from+2, from+4).map(c => <DogsCards key={c.id} dog={c}/>)}
                        </div>
                        <div className={styles.content}>
                            {dogs.slice(from+4, from+6).map(c => <DogsCards key={c.id} dog={c}/>)}
                        </div>
                        <div className={styles.content}>
                            {dogs.slice(from+6, from+8).map(c => <DogsCards key={c.id} dog={c}/>)}
                        </div>
                    </div>
                    <Pagination className={styles.pagination} dogs={dogs}/>
                </div>
                )
            :dogs && (
                <div className={styles.dog}>
                    <div className={styles.direction}>                        
                        <div className={styles.content}>
                            {dogs.slice(from, from+2).map(c => <DogsCards key={c.id} dog={c}/>)}
                        </div>
                        <div className={styles.content}>
                            {dogs.slice(from+2, from+4).map(c => <DogsCards key={c.id} dog={c}/>)}
                        </div>
                        <div className={styles.content}>
                            {dogs.slice(from+4, from+6).map(c => <DogsCards key={c.id} dog={c}/>)}
                        </div>
                        <div className={styles.content}>
                            {dogs.slice(from+6, from+8).map(c => <DogsCards key={c.id} dog={c}/>)}
                        </div>
                    </div>
                    <Pagination className={styles.pagination} dogs={dogs}/>
                </div>
                )
            }
            </div>
     </div>
    )
}

export default Dogs
