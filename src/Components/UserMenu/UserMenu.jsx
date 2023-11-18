import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/operations';
import { useAuth } from 'Hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.wrapper}>
            <p className={css.username}>Contacts of {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};