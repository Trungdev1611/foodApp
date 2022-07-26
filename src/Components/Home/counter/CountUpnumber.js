

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