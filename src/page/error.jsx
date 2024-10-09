import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Result
            status="403"
            title="Oops!"
            subTitle="Sorry, an unexpected error has occurred."
            extra={<Button type="primary">  <Link to="/"><span>Back Home</span></Link></Button>}
        />
    );
}