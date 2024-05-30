import { useEffect, useState } from 'react'
import GuestForm from '../GuestForm/GuestForm'
import GuestList from '../GuestList/GuestList'
import { nanoid } from 'nanoid'
import './guestapp.css'
const GuestApp = () => {

    // state de stock des invités
    const [guests, setGuests] = useState([])
    
    // Effet pour modifier le title du site => afficher le nombre d'invités
    useEffect(() => {
        document.title = `invités : ${guests.length}`
    }, [guests.length]); //Défini les dépendances pour l'effet, ici l'effet se déclenche uniquement quand le nombre d'invités change. Si un autre state change, il ne changera pas (grace a la dépendance)

    // Gestion de l'ajout des invités
    const handleAddGuest = (data) => {

        // Objet "invité" a ajouter a la liste
        const newGuest = {
            ...data,
            id:nanoid(7)
        };

        // Ajout au debut de la liste d'invité
        setGuests(guests=>[newGuest, ...guests])
    } 

    // Gestion de la suppression de tous les invités
    const handleClearGuest = () => {
        setGuests ([]);
    };

    // Render
    return (
        <div className="guestapp">
            <GuestForm onAddGuest={handleAddGuest}/>
            <h2>Liste des invités</h2>
            <button onClick={handleClearGuest}>Reset</button>
            <GuestList guests={guests}/>
        </div>
        
    )
}
export default GuestApp