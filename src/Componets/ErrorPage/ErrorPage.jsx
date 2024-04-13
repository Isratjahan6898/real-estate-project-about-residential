
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div className="mt-[200px]">
             <div id="error-page">
      <h1 className="text-4xl text-center font-bold mb-[16px]">Oops!</h1>
      <p className=" text-2xl text-center font-bold mb-[16px]">Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i className=" font-bold">{error.statusText || error.message}</i>
      </p>
  <div className="text-center mt-[20px]">
  <Link to='/'><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
   Go home
</button></Link>
  </div>
      
    </div>
        </div>
    );
};

export default ErrorPage;