import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Link lỗi không tồn tại!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/"><span>Back Home</span></Link>
        </div>
    );
}