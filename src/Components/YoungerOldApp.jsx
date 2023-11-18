// import { useEffect, lazy } from 'react';
import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../Pages/Home'));
const RegisterPage = lazy(() => import('../Pages/Register'));
const LoginPage = lazy(() => import('../Pages/Login'));
const ContactsPage = lazy(() => import('../Pages/Contacts'));

export const App = () => {
    // const dispatch = useDispatch();
    // const { isRefreshing } = useAuth();

    // useEffect(() => {
    //   dispatch(refreshUser());
    // }, [dispatch]);


    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="contacts" element={<ContactsPage />} />
            </Route>
        </Routes>
    );
};