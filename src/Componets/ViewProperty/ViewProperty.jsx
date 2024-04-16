import { useParams } from "react-router-dom";


const ViewProperty = () => {

    const {id, area}= useParams()
    return (
        <div>
            Viewproperty
            <p>id:{id}</p>
            <p>{area}</p>
        </div>
    );
};

export default ViewProperty;