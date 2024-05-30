import { useEffect, useState } from "react";

const Clock = () => {

    const [date, setDate] = useState(new Date());
    const hours = date.getHours().toLocaleString('fr',{minimumIntegerDigits:2})
    const minutes = date.getMinutes().toLocaleString('fr',{minimumIntegerDigits:2})
    const seconds = date.getSeconds().toLocaleString('fr',{minimumIntegerDigits:2})

    useEffect(() => {
        const timeOutId = setTimeout(()=> {
            setDate(new Date())
        },200);

        //Clean up effect
        return (() => {
            clearTimeout(timeOutId);
        }) 
    })

    return (
    <>
        <p> {hours} : {minutes} : {seconds}</p>
    </>
    )

}
export default Clock