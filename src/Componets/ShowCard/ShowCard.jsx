import { useEffect, useState } from "react";


const ShowCard = () => {

    const [categories, setCategories] = useState([]);

     useEffect(()=>{

       fetch('resident.json')
       .then (res => res.json())
       .then ( data => setCategories(data))
     },[])

    return (
        <div className="mt-[30px] mx-[100px]">
           <h1>show Crad details: {categories.length}</h1> 
        </div>
    );
};

export default ShowCard;