/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getUsersList, getUserById, selectedUser } from './state';

export default function Users() {
    const users = useRecoilValue(getUsersList);
    const userSelected = useRecoilValue(getUserById);
    const setUserSelected = useSetRecoilState(selectedUser);

    const handleGetUserDetail = (id) => {
        setUserSelected(id);
    };

    return (
        <>
            <ul>
                {users?.map((user, idx) => (
                    <li key={(user, idx)} onClick={() => handleGetUserDetail(user.id)}>
                        {user.id} - {user.name} - {user.email}
                    </li>
                ))}
            </ul>

            {userSelected ? (
                <p>
                    Selected user: {userSelected.id} - {userSelected.name} - {userSelected.email}
                </p>
            ) : null}
        </>
    );
}
