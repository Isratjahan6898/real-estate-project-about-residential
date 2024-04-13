
import { CiLocationOn } from "react-icons/ci";
const CardDetails = ({category}) => {
    //console.log(category)
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={category.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="text-2xl">{category.estate_title}</h2>
    <p className="mt-[16px]">{category.price}</p>
    <hr className="border-2 text-black"></hr>
    <p className="flex items-center gap-[10px]"><CiLocationOn />{category.area}</p>
    <div className="card-actions">
      <button className="btn bg-lime-500 mt-[16px] text-white font-bold">View Property</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;