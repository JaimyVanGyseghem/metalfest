import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useFirestore } from '../../services';
import * as Routes from '../../routes';

import {Wow} from 'wowjs';

import './ArtistList.scss';

const ArtistList = () => {
  const [artist, setartist] = useState();
  const {getMusic} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMusic();
      setartist(data);
    }

    fetchData();
  }, [getMusic]);

  return (
    <div className="container">
    <div className="button">
    <Link to={Routes.TICKETS}><button className="tickets">Buy Tickets</button></Link> 
    </div>
    <div className="row">
      {!!artist
      ? artist.map((artist) => {
        return (
          <div className="col-12 col-sm-6 col-lg-4 images" key={artist.uid}>
               <Link to={Routes.ARTIST_DETAIL.replace(':id', artist.uid)}>
              <img src={artist.picture_xl}></img>
              <h2>{artist.name}</h2>
              </Link>          
          </div>
        )
      })
      : <p>No artist.</p>
      }
    </div>
    </div>
  )
};

export default ArtistList;