import { Button, Col, Divider, Form, Input, notification, Row } from "antd"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginUserApi } from "../service/api.services";
import { useContext, useState } from "react";
import { AuthContent } from "../components/content/auth.content";

const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { setUser } = useContext(AuthContent)

    const onFinish = async (values) => {
        setLoading(true)
        const res = await LoginUserApi(values.fullName, values.password)
        if (res.data) {
            notification.success({
                message: "Login",
                description: "Đăng Nhập Thành Công"
            })
            localStorage.setItem("access_token", res.data.data.access_token)
            setUser(res.data.data.user)
            navigate("/")
        }
        else {
            notification.error({
                message: "Login",
                description: JSON.stringify(res.message)
            })
        }
        setLoading(false)
    }
    return (
        <div style={{ width: "50%", margin: "0 auto", border: "1px solid black", padding: "10px" }}>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                style={{ margin: "50px" }}
            >
                <Row style={{ justifyContent: "center" }}>
                    <Col xs={24} md={24}>
                        <Form.Item
                            label="FullName"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Col xs={24} md={24}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input.Password
                                onKeyDown={(event) => {
                                    if (event.key == "Enter") {
                                        form.submit()
                                    }
                                }
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Col xs={24} md={24} style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <Button
                                loading={loading}
                                type="primary" onClick={() => form.submit()}>Login</Button>
                        </div>
                        <div>
                            <Link to={"/"}>Back To Home</Link>
                        </div>
                    </Col>
                </Row>
                <Divider style={{ padding: "5px" }} />
                <div style={{ textAlign: "center" }}>
                    <p>Chưa đăng ký: <Link to={"/register"}>Đăng ký tại đây!</Link></p>
                </div>
            </Form>
        </div >
    )
}

export default LoginPage;