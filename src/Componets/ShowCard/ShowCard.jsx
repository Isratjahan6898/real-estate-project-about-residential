import { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";


const ShowCard = () => {

    const [categories, setCategories] = useState([]);

     useEffect(()=>{

       fetch('resident.json')
       .then (res => res.json())
       .then ( data => setCategories(data))
     },[])

    return (
        <div className="mt-[30px] mx-[100px] my-[40px]">
            

             <h1 className="text-center font-bold text-4xl">Show Category of Residential</h1>

             <p className="text-center mt-[20px] text-slate-500 mb-[20px]">A residential area is a land used in which housing predominates, as opposed to industrial and commercial areas.</p>

             <div className="grid grid-cols-3 gap-[20px]">
                {
                    categories.map(category => <CardDetails key={category.id} category={category} ></CardDetails>)
                }
             </div>

        </div>
    );
};

export default ShowCard;