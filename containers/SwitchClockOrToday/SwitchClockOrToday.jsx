import { useState } from "react"
import Clock from "../../components/Clock/Clock"
import Today from "../../components/Today/Today"


const SwitchClockOrToday = () => {

    const [clockOrDay, setClockOrDay] = useState(true);



    return (
        <>
        {clockOrDay ? <Clock/> : <Today/>}
        <button onClick={()=>{setClockOrDay(prevState =>!prevState)}}> Clock or Today </button>
        </>

    )
}

export default SwitchClockOrToday