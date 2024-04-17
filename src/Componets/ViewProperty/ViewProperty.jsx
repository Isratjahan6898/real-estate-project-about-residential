import { useParams, useLoaderData } from "react-router-dom";


const ViewProperty = () => {
    const cards = useLoaderData()
    console.log(cards)

    const {id}= useParams();
    const idInit = parseInt(id)
   
    // const idInit = parseInt(id);

    const card = cards.find((card)=>card.id == idInit)
    //console.log(card)

    const {facilities} = card;
    return (
        <div className="md:mx-[40px] lg:mx-[100px] my-[40px]">
           <div className="hero  bg-base-200">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img src={card.image} className="w-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl mb-[16px] font-bold">{card.estate_title}</h1>
      <p className="text-2xl font-bold">{card.segment_name}</p>
      <hr className="border-2 mt-[10px]"></hr>
      <p className="py-6">{card.description}</p>
      <div className="flex justify-between">
        <p><span className="font-bold">Price:</span>{card.price}</p>
        <p><span className="font-bold">Status:</span>{card.price}</p>
        
      </div>

      <hr className="border-2 mt-[10px]"></hr>

      <div  className="flex justify-between my-[20px]">
        <p><span className="font-bold">Area:</span>{card.area}</p>
        <p><span className="font-bold">Location:</span>{card.location}</p>
      </div>

      <hr className="border-2 my-[10px]"></hr>

      <p>
        <span className="font-bold">Facilities:</span>
        <ul className="list-disc ">
            <li className="mb-[16px]">{facilities[0]}</li>
            <li className="mb-[16px]">{facilities[1]}</li>
            <li>{facilities[2]}</li>


        </ul>

      </p>

      <hr className="border-2 my-[10px]"></hr>
      <button className=" my-[16px] btn bg-lime-500 text-white font-bold">{card.button}</button>
    </div>
  </div>
</div>
           
        </div>
    );
};

export default ViewProperty;