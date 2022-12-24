import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import {useNavigate, useParams} from 'react-router-dom'

function AddUser() {

    let navigate = useNavigate();

    let { id } = useParams();
    
    let [initialValues,setInitialValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        mobile:"",
        dob:""
    });

    let[isValid,setIsValid] = useState(false);

    let AddUser = async(values) => {
        await axios.post(`https://6394510c86829c49e81935c3.mockapi.io/users`,values)
        .then((res)=>{  
            if(res.status === 201){
                navigate('/all-users')
            }
        })
        .catch((err) => {console.log(err)})
    }

    let updateUser = async(values) => {
        await axios.put(`https://6394510c86829c49e81935c3.mockapi.io/users/${id}`,values)
        .then((res) => {
            if(res.status === 200){
                navigate('/all-users')
            }
        })
        .catch((err) => {console.log(err)})
    }

    useEffect(() => {
        if(id){
            axios.get(`https://6394510c86829c49e81935c3.mockapi.io/users/${id}`)
            .then((res) => {
                setInitialValues(res?.data)
                setIsValid(true)
            })
            .catch((err) => {console.log(err)})
        }else{
            setIsValid(true);
        }
    },[id])

    let UserSchema = yup.object().shape({
        firstName: yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required'),
        lastName: yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        mobile: yup.string().required('Required').matches(/^\d{10}$/,"Invalid Mobile Number"),
        dob:yup.string()
    })

  return <>
    <div className='container-fluid'>
        {isValid ? <Formik
            initialValues = {initialValues}

            validationSchema={UserSchema}

            onSubmit = {values => {
                if(id){
                    updateUser(values)
                }else{
                    AddUser(values)
                }
            }}
            >

            {({ errors, touched }) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" className="form-control" type="text" placeholder="First Name"/>
                        {errors.firstName && touched.firstName ? (
                        <div style={{color:"red"}}>{errors.firstName}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" className="form-control" type="text" placeholder="Last Name"/>
                        {errors.lastName && touched.lastName ? (
                        <div style={{color:"red"}}>{errors.lastName}</div>
                    ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field name="email" className="form-control" type="email" placeholder="Email"/>
                        {errors.email && touched.email ? (
                        <div style={{color:"red"}}>{errors.email}</div>
                    ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <Field name="mobile" className="form-control" type="text" />
                        {errors.mobile && touched.mobile ? (
                        <div style={{color:"red"}}>{errors.mobile}</div>
                    ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">DOB</label>
                        <Field name="dob" className="form-control" type="date" />
                        {errors.dob && touched.dob ? (
                        <div style={{color:"red"}}>{errors.dob}</div>
                    ) : null}
                    </div>
                    
                    <Button type="submit" variant='primary'>Submit</Button>
                </Form>
            )}
        </Formik> : <div style={{"textAlign":"center"}}>Loading...</div> }
    </div>
  </>
}

export default AddUser
