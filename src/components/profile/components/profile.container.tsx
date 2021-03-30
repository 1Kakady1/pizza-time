import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toProfileSelector } from '../state/profile.state.selector';
import { Profile } from './profile.component';

export const ProfileContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector(toProfileSelector.user);

    return <Profile user={user} />;
};
