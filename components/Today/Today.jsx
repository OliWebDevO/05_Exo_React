

const Today = () => {
    const date = (new Date());
    const options = {
        year:'numeric',
        month:'long',
        day:'numeric'
    };

    const myFormatedDate= date.toLocaleDateString('fr',options);
    
    return (
        <>
        <p>{myFormatedDate}</p>
        </>
    )
}
export default Today