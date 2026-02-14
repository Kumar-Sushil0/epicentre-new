require('dotenv').config();
const connectDB = require('../config/database');
const { seedRooms } = require('./seedRooms');
const { seedActivities } = require('./seedActivities');
const { seedResidencies } = require('./seedResidencies');
const { seedDining } = require('./seedDining');

const seedAll = async () => {
  try {
    // Connect to database
    await connectDB();

    console.log('🌱 Starting database seeding...\n');

    // Seed all collections
    await seedRooms();
    await seedActivities();
    await seedResidencies();
    await seedDining();

    console.log('\n✅ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error seeding database:', error);
    process.exit(1);
    console.log("Express Server Running")
  }
};

// Run seeder
seedAll();
