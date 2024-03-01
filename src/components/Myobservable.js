import {useState, useEffect} from 'react'
import {Observable} from 'rxjs'

const ObserableDemo = () => {
    const[count, setCount] = useState(0);

    useEffect( () => {
        const observable = new Observable((observer) => {
            setInterval(() => {
                observer.next(count+1);
            }, 1000)
        })

        const subscription = observable.subscribe((value) => {
            setCount(value);
        })

        return() => subscription.unsubscribe();
    }, [count]);

    return(
        <div>
            <h1>COunt: {count}</h1>
        </div>
    )
}

export default ObserableDemo;