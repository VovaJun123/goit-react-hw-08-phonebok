import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../Redux/operations";
import { selectIsLoading, selectError } from "../Redux/selectors";
import { ContactList } from "Components/ContactsList/ContactsList";
import { ContactForm } from "Components/ContactForm/ContactForm";
import { Filter } from "Components/Filter/Filter";
import { Container } from 'Components/App.styled'

const Phones = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            {isLoading && !error && <b>Request in progress...</b>}
            {error && <p>{error}</p>}
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </Container>
    )
};

export default Phones;