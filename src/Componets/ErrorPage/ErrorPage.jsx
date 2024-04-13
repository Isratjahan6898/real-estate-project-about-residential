
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div>
             <div id="error-page">
      <h1 className="text-4xl text-center font-bold mb-[16px]">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
        </div>
    );
};

export default ErrorPage;