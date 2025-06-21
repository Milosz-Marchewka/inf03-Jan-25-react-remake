function Installment({courses, installments, location}){
    let total = 0;
    if(courses.react) total+=5000;
    if(courses.js) total+=3000;

    

    return(
        <>
            {(installments > 0) ?
            <p>Kurs odbędzie się w {location}. Koszt całkowity: {total}zł. Płacisz {installments} rat po {Math.floor(total/installments)}zł.</p>
            : <p>Nie możesz mieć 0 rat.</p>
            }
        </>
    )
}

export default Installment;