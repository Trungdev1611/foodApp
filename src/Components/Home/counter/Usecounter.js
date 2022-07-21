import { useState, useEffect } from 'react'

const useCounter = (counterstart, inc, target) => {
    const [counter, setCounter] = useState(counterstart)
    useEffect(() => {

        if (counter < target) {
            setTimeout(() => setCounter(counter + inc), 60)
        }
        else {
            setCounter(target)
        }




    }, [target, inc, counter])
    return counter
}

export default useCounter