// Simple script to create or upgrade an admin user
// Run from backend folder: `node createAdmin.js [email] [password] [name]`

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/epicentre';

async function main() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const email = process.argv[2] || 'hello@thesilent.club';
    const password = process.argv[3] || '@Club9900';
    const name = process.argv[4] || 'D.D';

    console.log('Using Mongo URI:', MONGO_URI);
    console.log('Creating / updating admin with:');
    console.log(`  email:    ${email}`);
    console.log(`  name:     ${name}`);

    let user = await User.findOne({ email });

    if (user) {
      console.log('User already exists, updating role to admin...');
      user.role = 'admin';
      // Only update password if argument explicitly provided
      if (process.argv[3]) {
        user.password = password;
      }
      await user.save();
      console.log('✅ Existing user upgraded to admin.');
    } else {
      console.log('No user found, creating a new admin account...');
      user = new User({
        name,
        email,
        password, // hashed by pre-save hook in User model
        role: 'admin',
      });
      await user.save();
      console.log('✅ Admin user created.');
    }

    console.log('\nYou can now log in at /admin/login with:');
    console.log(`  email:    ${email}`);
    console.log(`  password: ${process.argv[3] ? password : '(whatever you passed or "admin123")'}`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Error creating admin:', err);
    process.exit(1);
  }
}

main();

