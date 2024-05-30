
// représente un invité

import { useEffect } from "react"

const GuestListItem = ({id, firstname, lastname}) => {

    useEffect(()=> {
        console.log(`EFFET: GuestListItem ${id}`)
        // const timerId = setInterval(()=> {console.log(id,firstname)},500)

        return ()=> {
            // Clean up de l'effet
            console.log(`CLEAN : GuestListItem ${id}`)

            //On vire le timer 
            // clearInterval(timerId)
        }
    }, [id])

    return (
        <article>
            <span>{firstname}</span> <span>{lastname}</span>
        </article>
    )
}

const GuestList = ({
    guests = [] // Props de l'ensemble des invités a afficher
}) => {


    return (
        <>
        <section>
            {guests.map(
                guest => <GuestListItem key ={guest.id} {...guest}/>
                )}
        </section>
        </>
        
    )
}
export default GuestList