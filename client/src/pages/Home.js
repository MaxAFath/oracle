import React from 'react';
import SearchForm from '../components/Search/index';
import Searched from '../components/Searched/index';
import Queue from '../components/Queue';

import Auth from '../utils/auth';
//import { useQuery } from '@apollo/client';
//import { QUERY_QUEUE, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  //const { loading, data } = useQuery(QUERY_QUEUE);
  //const { data: userData } = useQuery(QUERY_ME_BASIC);
  const streamed = data?.Queue || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <SearchForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Queue
              queue={queue}
              title="Your Queue"
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <Searched
              Searched={Searched}
              title="Search History"
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
