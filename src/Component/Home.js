import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [InpVal, SetInpVal] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    console.log(InpVal);

    const [data, setData] = useState([]);

    const getdata = (e) => {
        // console.log(e.target.value);
        const { value, name } = e.target;
        // console.log(value, name)

        SetInpVal(() => {
            return {
                ...InpVal,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
        console.log(InpVal)

        const { name, email, date, password } = InpVal;

        if (name === "") {
            alert("name filed is requied")
        } else if (email === "") {
            alert("E-mail is requied")
        }
        else if (!email.includes("@")) {
            alert("plz add valid email")
        } else if (date === "") {
            alert("date is requied")
        }
        else if (password === "") {
            alert("Password is requied")
        }
        else if (password.length < 5) {
            alert("please enter password length is greater then five")
        }
        else {
            alert("logIn successfully")

            localStorage.setItem("youtube", JSON.stringify([...data, InpVal]));
        }
    }
    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3" style={{ width: "100%" }}>
                        <h2 className='text-center col-lg-6'>Sign up</h2>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter User Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="Email" name='email' onChange={getdata} placeholder='Enter Your Email' />


                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Control onChange={getdata} name='date' type="date" />
                                </Form.Group>

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "lightgreen" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p>I Already Have An Account <span><NavLink to='/Login'>SignIn</NavLink></span></p>

                    </div>
                    <div className='right_data mt-5' style={{ width: "100%" }}>
                        <div className='sign_img mt-5'>
                            <img src='./sign.svg' style={{ maxWidth: 400 }} alt='' />

                        </div>
                    </div>
                </section>
            </div >
        </>

    )
}

export default Home;