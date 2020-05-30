/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getUsersList, selectedUser } from './state';

export default function Users() {
    const users = useRecoilValue(getUsersList);
    const setUserSelected = useSetRecoilState(selectedUser);

    const handleGetUserDetail = (id) => setUserSelected(id);

    return (
        <ul>
            {users?.map((user, idx) => (
                <li key={(user, idx)} onClick={handleGetUserDetail}>
                    {user.id} - {user.name} - {user.email}
                </li>
            ))}
        </ul>
    );
}
