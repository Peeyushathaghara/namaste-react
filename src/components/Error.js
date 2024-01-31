import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    return (
        <div>
            <h1>Ooppsss!!!!</h1>
            <h3>Some error occured.</h3>
            <h4>{err.status} : {err.statusText}</h4>
            {/* {console.log(err)} */}
        </div>
    )
}

export default Error;
