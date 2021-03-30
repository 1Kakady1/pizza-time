import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PROFILE_KEY } from './profile.state.const';
import { profileInit } from './profile.state.mock';
import { IProfile, IProfileUser } from './profile.state.model';

export const profileSlice = createSlice({
    name: PROFILE_KEY,
    initialState: profileInit,
    reducers: {
        setProfile: (
            state: IProfile,
            { payload }: { payload: IProfileUser }
        ) => {
            return {
                ...state,
                isAuth: true,
                user: { ...payload }
            };
        },
        outProfile: (state: IProfile) => {
            state = profileInit;
        }
    }
});

export const toProfileAction = profileSlice.actions;
