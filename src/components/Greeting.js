import { useState } from "react"

const Greeting = () => {
    const [changeText, setChangeText] = useState(false)

    const changeHandler = () => {
        setChangeText(true)
    }
    return <div>
        <h2>Hello World</h2>
        {!changeText && <p>Good to see you</p>}
        {changeText && <p>Changed</p>}
        <button onClick={changeHandler}>Change</button>
    </div>
}

export default Greeting
