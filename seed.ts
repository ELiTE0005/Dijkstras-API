// import Bangalorerom './City';
// import db from './db';

// db.once('open', async () => {
//   await City.deleteMany();

//   const cities = [
//     {
//       name: 'A',
//       neighbors: [{ name: 'B', distance: 1 }, { name: 'C', distance: 3 }],
//     },
//     {
//       name: 'B',
//       neighbors: [{ name: 'A', distance: 1 }, { name: 'C', distance: 1 }],
//     },
//     {
//       name: 'C',
//       neighbors: [{ name: 'A', distance: 3 }, { name: 'B', distance: 1 }],
//     },
//     {
//       name: 'D',
//       neighbors: [{ name: 'B', distance: 2 }, { name: 'C', distance: 4 }],
//     },
//   ];

//   await City.insertMany(cities);

//   console.log('Example data inserted.');
//   process.exit();
// });






import City from './City';
import db from './db';

db.once('open', async () => {
  await City.deleteMany();

  const cities = [
    {
      name: 'Delhi',
      neighbors: [
        { name: 'Mumbai', distance: 10 },
        { name: 'Kolkata', distance: 20 },
        { name: 'Bhopal', distance: 30 },
      ],
    },
    {
      name: 'Mumbai',
      neighbors: [
        { name: 'Delhi', distance: 10 },
        { name: 'Dehradhun', distance: 15 },
        { name: 'Bangalore', distance: 25 },
      ],
    },
    {
      name: 'Kolkata',
      neighbors: [
        { name: 'Delhi', distance: 20 },
        { name: 'Bhopal', distance: 10 },
        { name: 'Chandigarh', distance: 40 },
      ],
    },
    {
      name: 'Bhopal',
      neighbors: [
        { name: 'Delhi', distance: 30 },
        { name: 'Kolkata', distance: 10 },
        { name: 'Patna', distance: 35 },
      ],
    },
    {
      name: 'Dehradhun',
      neighbors: [
        { name: 'Mumbai', distance: 15 },
        { name: 'Agartala', distance: 12 },
        { name: 'Hyderabad', distance: 22 },
      ],
    },
    {
      name: 'Bangalore',
      neighbors: [
        { name: 'Mumbai', distance: 25 },
        { name: 'Hyderabad', distance: 18 },
      ],
    },
    {
      name: 'Chandigarh',
      neighbors: [
        { name: 'Kolkata', distance: 40 },
        { name: 'Thiruvananthapuram', distance: 28 },
      ],
    },
    {
      name: 'Patna',
      neighbors: [
        { name: 'Bhopal', distance: 35 },
        { name: 'Raipur', distance: 45 },
      ],
    },
    {
      name: 'Agartala',
      neighbors: [
        { name: 'Dehradhun', distance: 12 },
        { name: 'Thiruvanthapuram', distance: 20 },

      ],
    },
    {
      name: 'Hyderabad',
      neighbors: [
        { name: 'Dehradhun', distance: 22 },
        { name: 'Bangalore', distance: 18 },
        { name: 'Raipur', distance: 30 },
      ],
    },
    {
      name: 'Thiruvanthapuram',
      neighbors: [
        { name: 'Chandigarh', distance: 28 },
        { name: 'Agartala', distance: 20 },
      ],
    },
    {
      name: 'Raipur',
      neighbors: [
        { name: 'Patna', distance: 45 },
        { name: 'Hyderabad', distance: 30 },
      ],
    },

  ];

  await City.insertMany(cities);

  console.log('Example data inserted.');
  process.exit();

});








// import City from './City';
// import db from './db';

// db.once('open', async () => {
//   await City.deleteMany();

//   const cities = [
//     {
//       name: 'paris',
//       neighbors: [
//         { name: 'rome', distance: 10 },
//         { name: 'london', distance: 20 },
//         { name: 'miami', distance: 30 },
//       ],
//     },
//     {
//       name: 'rome',
//       neighbors: [
//         { name: 'paris', distance: 10 },
//         { name: 'madrid', distance: 15 },
//         { name: 'tokyo', distance: 25 },
//       ],
//     },
//     {
//       name: 'london',
//       neighbors: [
//         { name: 'paris', distance: 20 },
//         { name: 'miami', distance: 10 },
//         { name: 'sydney', distance: 40 },
//       ],
//     },
//     {
//       name: 'miami',
//       neighbors: [
//         { name: 'paris', distance: 30 },
//         { name: 'london', distance: 10 },
//         { name: 'quito', distance: 35 },
//       ],
//     },
//     {
//       name: 'madrid',
//       neighbors: [
//         { name: 'rome', distance: 15 },
//         { name: 'istanbul', distance: 12 },
//         { name: 'dubai', distance: 22 },
//       ],
//     },
//     {
//       name: 'tokyo',
//       neighbors: [
//         { name: 'rome', distance: 25 },
//         { name: 'dubai', distance: 18 },
//       ],
//     },
//     {
//       name: 'sydney',
//       neighbors: [
//         { name: 'london', distance: 40 },
//         { name: 'jerusalem', distance: 28 },
//       ],
//     },
//     {
//       name: 'quito',
//       neighbors: [
//         { name: 'miami', distance: 35 },
//         { name: 'toronto', distance: 45 },
//       ],
//     },
//     {
//       name: 'istanbul',
//       neighbors: [
//         { name: 'madrid', distance: 12 },
//         { name: 'jerusalem', distance: 20 },

//       ],
//     },
//     {
//       name: 'dubai',
//       neighbors: [
//         { name: 'madrid', distance: 22 },
//         { name: 'tokyo', distance: 18 },
//         { name: 'toronto', distance: 30 },
//       ],
//     },
//     {
//       name: 'jerusalem',
//       neighbors: [
//         { name: 'sydney', distance: 28 },
//         { name: 'istanbul', distance: 20 },
//       ],
//     },
//     {
//       name: 'toronto',
//       neighbors: [
//         { name: 'quito', distance: 45 },
//         { name: 'dubai', distance: 30 },
//       ],
//     },

//   ];

//   await City.insertMany(cities);

//   console.log('Example data inserted.');
//   process.exit();
// });