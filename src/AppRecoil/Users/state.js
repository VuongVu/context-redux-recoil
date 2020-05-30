/* eslint-disable no-useless-catch */
import { atom, selector } from 'recoil';

export const selectedUser = atom({
    key: 'usersState',
    default: null,
});

export const getUsersList = selector({
    key: 'getUsersList',
    get: async () => {
        try {
            const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
            return users;
        } catch (error) {
            throw error;
        }
    },
});

export const getUserById = selector({
    key: 'getUserById',
    get: ({ get }) => {
        const userId = get(selectedUser);
        const userList = get(getUsersList);
        const userSelected = userList.find((item) => item.id === userId) || null;

        return userSelected;
    },
});
