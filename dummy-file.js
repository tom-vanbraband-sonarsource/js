function hasAdminAccess(user) {
  // BUG is on the next line
  if (user.role = 'ADMIN') { // This is an assignment, not a comparison!
    console.log('User role assigned to ADMIN.'); // This line will always run
    return true; // This function will always return true
  }
  return false;
}

// Example Usage:
const regularUser = { role: 'USER' };
const hasAccess = hasAdminAccess(regularUser);

console.log(`Does the user have access? ${hasAccess}`); // Outputs: "Does the user have access? true"
console.log(`User's role is now: ${regularUser.role}`); // Outputs: "User's role is now: ADMIN"
