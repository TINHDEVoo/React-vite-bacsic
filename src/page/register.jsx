import { Button, Form, Input, notification, Row, Col, Divider } from "antd";
import { RegisterUserApi } from "../service/api.services";
import { Link, useNavigate } from "react-router-dom";


const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const res = await RegisterUserApi(values.fullName, values.email, values.password, values.phone);
        if (res.data) {
            notification.success({
                message: "Register",
                description: "Đăng ký tài khoản thàn công"
            })
            navigate("/users")
        }
        else {
            notification.error({
                message: "Register",
                description: JSON.stringify(res.message)
            })
        }

    }

    return (
        <div style={{ margin: "50px", justifyContent: "center" }}>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <Row style={{ justifyContent: "center" }}>
                    <Col xs={24} md={12}>
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
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    pattern: new RegExp(/\d+/g),
                                    message: "Wrong format!"
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row style={{ justifyContent: "center" }}>
                    <Col xs={24} md={12}>
                        <Form.Item>
                            <Button type="primary" onClick={() => form.submit()}>
                                Register
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
                <Divider style={{ padding: "5px" }} />
                <div style={{ textAlign: "center" }}>
                    <p>Đã có tài khoản: <Link to={"/login"}>Đăng Nhập tại đây!</Link></p>
                </div>
            </Form>
        </div>
    )
}

export default RegisterPage;