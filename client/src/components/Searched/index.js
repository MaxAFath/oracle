import React from 'react';
import { Link } from 'react-router-dom';

const Searched = ({ searches, title }) => {
  if (!searches.length) {
    return <h3>No Searches Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {searches &&
        searches.map(search => (
          <div key={search._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${search.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {search.username}
              </Link>{' '}
              searched: {search.createdAt}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Searched;
