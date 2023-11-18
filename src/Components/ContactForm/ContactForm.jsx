import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Forma, Pole, AddBTN } from "./ContactForm.styled";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from '../../Redux/operations';
import { selectContacts } from "Redux/selectors";

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        )
        .required('Name is required'),
    number: Yup.string()
        .matches(
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        )
        .required('Phone number is required'),
})

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const checkIfContactExists = (name, number) => {
        const existingContact = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase() ||
                contact.number === number
        );
        return existingContact;
    }

    const handleAddContact = (newContact) => {
        const { name, number } = newContact;

        if (checkIfContactExists(name, number)) {
            alert(`Contact with name ${name} or number ${number} already exists!`);
            return;
        }

        dispatch(addContact({ name, number }));
    }

    return (
        <Formik
            initialValues={{
                name: '',
                number: ''
            }}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
                handleAddContact(values);
                actions.resetForm();
            }}
        >
            <Form>
                <Forma>
                    <div>
                        <Pole>
                            Contact name
                            <Field id="firstName" name="name" />
                        </Pole>
                    </div>
                    <ErrorMessage name="name" />
                    <div>
                        <Pole>
                            Number
                            <Field id="lastName" type="tel" name="number" />
                        </Pole>
                    </div>
                    <ErrorMessage name="number" />
                    <div>
                        <AddBTN type="submit">Add contact</AddBTN>
                    </div>
                </Forma>
            </Form>
        </Formik>
    )
}