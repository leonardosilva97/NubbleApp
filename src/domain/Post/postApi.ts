import {postListMock} from './postListMock';
import {Post} from './postType';

async function getList(): Promise<Post[]> {
  //TODO: simular um deley na api
  try {
    let response = await fetch('http://127.0.0.1:3333/user/post', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer NA.ado35lgtrRDK0xCGBnwKAD09RnzP8bY17hqHZfXacKYOWS-2SBAHV8W8EB7L',
      },
    });

    let data = await response.json();
    console.log('FETCH DATA =>', data);
  } catch (error) {
    console.log('erro na api', error);
  } finally {
    return postListMock;
  }

  // await new Promise(resolve => setTimeout(() => resolve(''), 1000));
}

export const postApi = {
  getList,
};
