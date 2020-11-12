import React, {useEffect, useState} from 'react';
import { useFirestore } from '../services/firebase/firestore.services';
import { Link, NavLink  } from 'react-router-dom';
import './HomePage.scss';
import * as Routes from '../routes';
import { ArtistList } from '../components/artist';

const HomePage = () => {
  const [artist, setartist] = useState();
  const {getMusic} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMusic();
      setartist(data);
    };

    fetchData();
  }, [])
 

  return (
    <div className="container">
     <ArtistList />
    </div>
  )
};

export default HomePage;