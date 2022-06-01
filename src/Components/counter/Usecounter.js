import { useState, useEffect } from 'react'

const useCounter = (counterstart, inc, target) => {
    const [counter, setCounter] = useState(counterstart)
    useEffect(() => {

        if (counter < target) {
            setTimeout(() => setCounter(counter + inc), 60)
            console.log('test')
        }
        else {
            setCounter(target)
        }




    }, [target, inc, counter])
    console.log('counter', counter)
    return counter
}

export default useCounter