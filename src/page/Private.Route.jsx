import { useContext } from "react";
import { AuthContent } from "../components/content/auth.content";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";


const PrivateRoute = (props) => {
    const { user } = useContext(AuthContent)
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    else {
        return (
            <Result
                status="403"
                title="Oops!"
                subTitle="Sorry, an unexpected error has occurred."
                extra={<Button type="primary">  <Link to="/"><span>Back Home</span></Link></Button>}
            />
        )
    }
}
export default PrivateRoute;