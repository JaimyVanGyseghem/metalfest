import React, { } from 'react';

import { Campinglist } from '../components/camping';

const ArtistPage = ({children}) => {
  return (
    <div className="page page--bookmarks">
      <div className="container">
          <div className="row">
            <div className="col-12">

          </div>
          </div>
        <Campinglist />
      </div>
    </div>
  );
};

export default ArtistPage;