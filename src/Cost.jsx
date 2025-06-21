import { useState } from "react";
import Installment from "./Installment";

function Cost(){
    const [courses, setCourses] = useState({
        react: false,
        js: false
    });
    const [installments, setInstallments] = useState(1);
    const [location, setLocation] = useState("Warszawa");
    const [show, setShow] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handleInstallment = (e)=>{
        setInstallments(e.target.value);
    }
    const handleLocation = (e)=>{
        setLocation(e.target.value);
    }
    const handleCourses = (e)=>{
        const {name,checked} = e.target;
        setCourses((prevCourses)=>({
            ...prevCourses,
            [name]:checked,
        }));
        setShow(true);
    }

    return(
        <div className='display'>
            <h3>Oblicz miesięczną ratę</h3>
            <form onSubmit={handleSubmit}>
                <input type="checkbox" className='kontrolki' name="react" checked={courses.react} onChange={handleCourses}/>Kurs React.js<br/>
                <input type="checkbox" className='kontrolki' name="js" checked={courses.js} onChange={handleCourses}/>Kurs Javascript<br/>
                <label>Liczba rat: </label>
                <input type="number" min="1" className='kontrolki' value={installments} onChange={handleInstallment} /><br/>
                <select className='kontrolki' value={location} onChange={handleLocation}>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Katowice">Katowice</option>
                    <option value="Gdansk">Gdańsk</option>
                </select><br/>
            </form>
            { show && 
                <Installment courses={courses} installments={installments} location={location}/>
            }
        </div>
    )
}

export default Cost;