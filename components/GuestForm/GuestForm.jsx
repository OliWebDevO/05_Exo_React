import { useId } from 'react';
import './form.css'
import { useForm } from "react-hook-form"

const GuestForm = ({
    onAddGuest = () => {}
}) => {

    // C'est un hook de la librairie react hook form
    // son objectif -> gestion de formulaire
    // register permet d'enregister l'input dans react hook form
    // handleSubmit : désactive le comportement par defaut du form et envoie les données du form formatées
    // reset : permet de remettre la valeur initial dans le form
    // setFocus : Permet de manipuler le focus des balises
    // formstate: Permet d'obtenir l'état du formulaire (interaction ? Erreur ? ...)
    const {register, handleSubmit, reset, setFocus, formState: {errors}} = useForm();
    const formId = useId();

    // On créer une fct qui se fait encampsuler par la fct de handleSubmit
    const handleGuestSubmit = (data) => {
        // traitement...
        onAddGuest(data);
        // Clean up...
        setFocus('firstname');
        reset();
    }

    return (
        <div className="form">
            <h2>Ajoutez un invité</h2>
            <form action=""onSubmit={handleSubmit(handleGuestSubmit)}>
                <div>
                    <label htmlFor={formId + "firstname"}>First Name</label>
                    <input type="text" id={formId + "firstname"} {...register('firstname', {required:true})} />
                    {errors.firstname && <span>Le prénom est obligatoire</span>}
                </div>
                <div>
                    <label htmlFor={formId + "lastname"}>Last Name</label>
                    <input type="text" id={formId + "lastname"} {...register('lastname', {required:true})}/>
                    {errors.lastname && <span>Le nom est obligatoire</span>}
                </div>
                <div>
                <button type="submit">Submit</button>

                </div>
            </form>
        </div>
        
    )
}
export default GuestForm