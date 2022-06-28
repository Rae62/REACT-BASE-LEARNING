import React, { Component } from "react";
import { Formik, Field} from 'formik';
import * as axios from 'axios';

export default class AddUser extends Component {

    getInitialValues = () => {
        return this.props.user ? {...this.props.user} : {name: '', username: '', email: ''}
    }

    submit = (values, actions) => {
        console.log(values);
        if(!this.props.user){
            axios.put(`https://jsonplaceholder.typicode.com/users/${values.id}`, values).then(
                response => {
                    console.log(response);
                }
            )

        }else {
            axios.post('https://jsonplaceholder.typicode.com/users', values).then(
                response => {
                    console.log(response);
                }
            )

        }
    }



    render() {
        return(
            <Formik
            initialValues={this.getInitialValues()}
            onSubmit={this.submit}
            enableReinitialize={true}
            >
                {
                    ({handleSubmit}) => (
                        <form onSubmit={handleSubmit} className="d-flex flex-column w-25">
                            <Field className="text-center" name="name" placeholder="name" />
                            <Field className="text-center" name="username" placeholder="username" />
                            <Field className="text-center" name="email" placeholder="email" />
                            <button>Save</button>
                        </form>
                    )
                }
            </Formik>
        )
    }
}