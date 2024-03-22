// react-router-dom also give the feature to know the exact error in "useRouteError" hook
import { useRouteError } from "react-router-dom"; 

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h3>{err.data}</h3>

        </div>
    )
}

export default Error;