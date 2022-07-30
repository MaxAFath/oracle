import { gql } from '@apollo/client';

export const QUERY_USER = gql``

export const QUERY_ME = gql``

export const QUERY_ME_BASIC = gql``

<<<<<<< HEAD
export const QUERY_WATCHED = gql``
=======
}*/
//request without any country
export default function reqmedia(media) {
    const options = {
        method: 'GET',
        url: client,
        params: { term: media },
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        result = response.data;
    }).catch(function (error) {
        console.error(error);
    });
    return result;
}

/*
const options = {
        method: 'GET',
        url: client,
        params: { term: 'bojack', country: 'us' },
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        const result = response.data;
        this.setState({ results });
    }).catch(function (error) {
        console.error(error);
    });
*/

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      queue
    }
  }
`;
>>>>>>> 762698be26f5bdeaca8d458ce0f32f54c6cf6d84
