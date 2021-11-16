const db = require('./connection');
const { User, Toilet, Review } = require('../models');

db.once('open', async () => {
       
    await Toilet.deleteMany();

    const toilets = await Toilet.insertMany([
        {zipcode: '90027', coordinates: '34.101912X-118.302526', lat:'34.101912', lng: '-118.30252' },
        {zipcode: '90027', coordinates: '34.099943X-118.297707', lat: '34.099943', lng: '-118.297707'},
    ]);

    console.log('toilets seeded');

    await User.deleteMany();

    await User.create({
      firstName: 'Pamela',
      lastName: 'Washington',
      email: 'pamela@testmail.com',
      username: 'pamela',
      password: 'password12345',
    });
  
    await User.create({
      firstName: 'Elijah',
      lastName: 'Holt',
      email: 'eholt@testmail.com',
      username: 'eholt',
      password: 'password12345'
    });
  
    console.log('users seeded');

    await Review.deleteMany();

    const reviews = await Review.insertMany([
        {
            username: 'pamela',
            overallRating: 4,
            coordinates: '678X678',
            genderNeutral: true,
            cleanliness: 4,
            changingTable: false,
            handicapAccessible: true,
            toiletPaper: true,
            keys: false,
            comments: 'This is a great place to use the bathroom.'
        },
        {
            username: 'eholt',
            overallRating: 1,
            coordinates: '9723X2309',
            genderNeutral: false,
            cleanliness: 2,
            changingTable: true,
            handicapAccessible: true,
            toiletPaper: true,
            keys: false,
            comments: 'This is a terrible place to use the bathroom.'
        },
        {
            username: 'pamela',
            overallRating: 3,
            coordinates: '1289X09324',
            genderNeutral: true,
            cleanliness: 3,
            changingTable: false,
            handicapAccessible: true,
            toiletPaper: false,
            keys: true,
            comments: 'This is a decent place to use the bathroom.'
        },
        {
            username: 'eholt',
            overallRating: 1,
            coordinates: '1209X230990',
            genderNeutral: true,
            cleanliness: 1,
            changingTable: false,
            handicapAccessible: true,
            toiletPaper: false,
            keys: false,
            comments: 'This is a terrible place to use the bathroom.'
        }
    ]);

    console.log('toilets seeded');

    process.exit();
})