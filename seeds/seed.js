const sequelize = require('../config/connection');
const { User, Comments } = require('../models');

const userData = require('./users.json');
const recommendationData = require('./comments.json');
// const for recommendationData + location
const seedDatabase = async () => {
    await sequelize.sync({force: true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    await Comments.bulkCreate(recommendationData,{include: {model: User}});

    console.log("===== db now seeded =====")

    process.exit(0);
    };

seedDatabase();
