import React from 'react';
import SearchForm from '../components/SearchForm';
import Searched from '../components/Searched/index';
import Watched from '../components/Watched';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_WATCHED, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_WATCHED);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const streamed = data?.Watched || [];

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
            <Watched
              streamed={streamed}
              title="Content You've Streamed"
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
