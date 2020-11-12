import { admin, app, db, generateTimestamps,generateValueBetweenMinAndMax } from './firebase';
(async () => {
  const fetch = require('node-fetch')
  let collectionRef = db.collection('music');
  // Create a Pokemon
  const createArtist = (music) => {
    // Add a document with faker
    const data = {
      ...music,
      ...generateTimestamps()
    };
    collectionRef.add(data).then(documentReference => {
      console.log(`Added document with name: ${documentReference.id}`);
    });
  };
  const fetchArtists = async () => {
    const response = await fetch("https://jaimyvangyseghem.github.io/apiArtists/data/artists/index.json");
    const jsonData = await response.json();
    return jsonData;
  }
  // Create pokemons via promises
  const createArtists = async () => {
    const artist = await fetchArtists();
    const promises = [];
    Object.entries(artist).forEach(([key, value]) => {
      promises.push(createArtist(value));
    });
    return await Promise.all(promises);
  };
  await createArtists(); 
})();