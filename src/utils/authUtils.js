// utils/authUtils.js
const fs = require('fs');

const userFilePath = './users.txt';

export const registerUser = (email, password) => {
  // Check if the user already exists
  const users = readUsersFile();
  if (users.find(user => user.email === email)) {
    throw new Error('User already exists');
  }

  // Create a new user object
  const newUser = { email, password };
  
  // Append the new user to the file
  fs.appendFileSync(userFilePath, JSON.stringify(newUser) + '\n');

  return newUser;
};

export const loginUser = (email, password) => {
  // Check if the user exists and the password is correct
  const users = readUsersFile();
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    throw new Error('Invalid email or password');
  }

  return user;
};

const readUsersFile = () => {
  try {
    // Read the file and parse its content
    const content = fs.readFileSync(userFilePath, 'utf-8');
    const lines = content.trim().split('\n');
    const users = lines.map(line => JSON.parse(line));
    return users;
  } catch (error) {
    // If the file doesn't exist, return an empty array
    return [];
  }
};
