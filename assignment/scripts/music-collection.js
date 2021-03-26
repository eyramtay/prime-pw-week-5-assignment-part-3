console.log('***** Music Collection *****')

let collection = [
  {
        title: 'Take Care',
        artist: 'Drake',
        yearPublished: 2011,
    },
    {
      title: 'After Hours',
      artist: 'The Weeknd',
      yearPublished: 2020,
    },
    {
      title: 'Changes',
      artist: 'Justin Bieber',
      yearPublished: 2020,
    },
    {
      title: 'When It\'s All Said And Done...Take Time',
      artist: 'GIVEON',
      yearPublished: 2021,
    },
    {
      title: 'The 20/20 Experience',
      artist: 'Justin Timberlake',
      yearPublished: 2013,
    },
    {
      title: 'JESUS IS KING',
      artist: 'Kanye West',
      yearPublished: 2019,
    },
];

function addToCollection (title, artist, yearPublished) {
  return collection;
  console.log('My music collection contains: ', collection);
}

console.log('My favorite albums are: ', collection);

function showCollection () {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
    console.log(`${collection[i]['title']} by ${collection[i]['artist']}, published in ${collection[i]['yearPublished']}.`);
  }
}
console.log(showCollection());
