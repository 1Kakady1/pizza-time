import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fb } from '../../../firebase/firebase';
import { updateFieldUser } from '../../../services/api';
import { toProfileAction } from '../state/profile.state.reducer';
import { toProfileSelector } from '../state/profile.state.selector';
import { Profile } from './profile.component';

export const ProfileContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector(toProfileSelector.user);
    const store = fb.store().ref();
    const fieldUpdateUser = (
        userID: string,
        field: string,
        data: string | []
    ) => updateFieldUser(userID, field, data).toPromise();
    const updateProfileField = (data: string | [], field: string) =>
        dispatch(toProfileAction.updateProfile({ data, field }));
    return (
        store && (
            <Profile
                user={user}
                store={store}
                fieldUpdateUser={fieldUpdateUser}
                updateProfileField={updateProfileField}
            />
        )
    );
};
