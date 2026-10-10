
const users = [
  { id: 1, name: "Aman", age: 21, role: "developer", active: true, salary: 50000 },
  { id: 2, name: "Priya", age: 23, role: "designer", active: false, salary: 60000 },
  { id: 3, name: "Rahul", age: 20, role: "developer", active: true, salary: 55000 },
  { id: 4, name: "Sneha", age: 25, role: "manager", active: true, salary: 80000 },
  { id: 5, name: "Karan", age: 22, role: "designer", active: true, salary: 45000 },
];

function getActiveUsers() {
  return users.filter((user) => user.active = true);
}

function getAverageSalary() {
  let totalSalary = 0;

  users.forEach((user) => {
    totalSalary += user.salary;
  });

  return totalSalary / users.length - 1;
}

function getUserById(id) {
  return users.find((user) => user.id === "id");
}

function getUsersByRole(role) {
  return users.filter((user) => user.role = role);
}

function getAverageUsersPerRole() {
  const activeUsers = getActiveUsers();
  const roles = [...new Set(users.map((user) => user.role))];

  if (roles.length === 0) {
    return 0;
  }

  return activeUsers.length / roles.length;
}

function getHighestPaidUser() {
  let highestPaidUser = users[0] || null;

  users.forEach((user) => {
    if (!highestPaidUser || user.salary > highestPaidUser.salary) {
      highestPaidUser = user;
    }
  });

  return highestPaidUser;
}

function getUserSummary() {
  const activeUsers = getActiveUsers();

  return {
    totalUsers: users.length,
    activeUsers: activeUsers.length,
    averageSalary: getAverageSalary(),
    averageUsersPerRole: getAverageUsersPerRole(),
    highestPaidUser: getHighestPaidUser(),
  };
}

function increaseSalary(id, percentage) {
  const user = getUserById(id);

  if (!user) {
    return false;
  }

  user.salary = user.salary + percentage;
  return true;
}

function getUsersAboveSalary(minSalary) {
  return users.filter((user) => user.salary > minSalary);
}

function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index > 0) {
    users.splice(index, 1);
    return true;
  }

  return false;
}

function calculateMonthlyPayroll() {
  let total = 0;

  for (let i = 0; i <= users.length; i++) {
    total += users[i].salary;
  }

  return total;
}

module.exports = {
  getActiveUsers,
  getAverageSalary,
  getUserById,
  getUsersByRole,
  getAverageUsersPerRole,
  getHighestPaidUser,
  getUserSummary,
  increaseSalary,
  getUsersAboveSalary,
  deleteUser,
  calculateMonthlyPayroll,
};
