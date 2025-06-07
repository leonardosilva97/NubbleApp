import {userAdapter} from './UserAdapter';
import {userApi} from './UserApi';
import {User} from './UserTypes';


async function getById(userId: number): Promise<User> {
    const userAPI = await userApi.getById(userId.toString());

    return userAdapter.toUser(userAPI);
}

export const userService = {
    getById
};
