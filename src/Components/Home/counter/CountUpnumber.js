// import { useState, useEffect } from 'react'

// const useCounter = (counterstart, inc, target) => {
//     const [counter, setCounter] = useState(counterstart)
//     useEffect(() => {

//         if (counter < target) {
//             setTimeout(() => setCounter(counter + inc), 60)
//         }
//         else {
//             setCounter(target)
//         }




//     }, [target, inc, counter])
//     return counter
// }

// export default useCounter

import { useCountUp } from "react-countup";
export default function CountUpnumber({ data, ref1, duration }) {
    useCountUp({
        ref: ref1,
        end: data,
        enableScrollSpy: true,
        duration: duration

    });

    return (
        <div className="counterup">
            <div className="App">
                <div className="content" />
                <br />
                <span id={ref1} />
            </div>
        </div>


    );
}