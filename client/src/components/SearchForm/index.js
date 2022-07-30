import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_SEARCH } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

const SearchForm = () => {
  const [searchText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addSearch, { error }] = useMutation(ADD_SEARCH, {
    update(cache, { data: { addSearch } }) {
      
        // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, searches: [...me.searches, addSearch] } },
        });
      } catch (e) {
        console.warn("First search insertion by user!")
      }

      // update array's cache
      const { searches } = cache.readQuery({ query: QUERY_SEARCHES });
      cache.writeQuery({
        query: QUERY_SEARCHES,
        data: { search: [addSearch, ...searches] },
      });
    }
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addSearch({
        variables: { searchText },
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="I want to stream..."
          value={thoughtText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
