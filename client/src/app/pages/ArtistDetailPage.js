import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router';

import { ArtistDetail } from '../components/artist';
import { useFirestore } from '../services';

const ArtistDetailPage = ({}) => {
  const { id } = useParams();
  const [artist, setartist] = useState(null);
  const {getTheArtist} = useFirestore();

  useEffect(() => {
    const fetchData = async (q) => {
      const data = await getTheArtist(id);
      setartist(data);
      // const da = data.find((o) => o.uid === id);
      // setBookmark(da);
    }; 

    if (!artist) {
      fetchData();
    }
  }, []);

  return (
   
      <div id="resposiveContainer" className="container">
          <ArtistDetail artist={artist} />
      </div>
  
  );
};

export default ArtistDetailPage;