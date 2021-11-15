const db = require('./connection');
const { User, Toilet, Location } = require('../models');

db.once('open', async () => {
       
    await Location.deleteMany();

    const locations = await Location.insertMany([
        {location: '205 N Spring St, Los Angeles, CA 90012'},
        {location: 'N Alvarado St &, Bellevue Ave, Los Angeles, CA 90026'},
        {location: '217 N Hill St, Los Angeles, CA 90012'}
    ]);

    console.log('locations seeded');

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

    await Toilet.deleteMany();

    const toilets = await Toilet.insertMany([
        {
            username: 'pamela',
            overallRating: 4,
            location: locations[0]._id,
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
            location: locations[1]._id,
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
            location: locations[2]._id,
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
            location: locations[0]._id,
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