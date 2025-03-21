
import { useState } from "react";


function Content() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p style={{background: "black", color: "white"}}>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default Content;
