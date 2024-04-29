let sales = [455, 505, 340, 780, 690, 880, 900, 685, 835, 754];
let customers = [25, 30, 20, 35, 36, 32, 44, 45, 34, 15];
let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];

let firstWeekSales = sales.filter((element, index) => index < 7);
let firstWeekCustomers = customers.filter((element, index) => index < 7);
let firstWeekSalesSum = firstWeekSales.reduce((prev, curr) => prev + curr);
let firstWeekCustomersSum =firstWeekCustomers.reduce((prev, curr) => prev + curr);
let firstWeekAverage = firstWeekSalesSum / 7;
let firstWeekCustomerAvg = firstWeekSalesSum / firstWeekCustomersSum;
let firstWeekDailyAverage = firstWeekSales.map((element, index) => element / firstWeekCustomers[index]);
let labeled = firstWeekDailyAverage.map((element, index) => daysOfTheWeek[index] + " " + element.toFixed(2));
let labeledString = labeled.reduce((prev, curr) => prev + ", " + curr);

console.log("First Week Customers: " + firstWeekCustomers);
console.log("First Week Sales: " + firstWeekSales);
console.log("First Week Sales Sum: " + firstWeekSalesSum);
console.log("First Week Customers Sum: " + firstWeekCustomersSum);
console.log("First Week Average: " + firstWeekAverage);
console.log("First Week Customer Average: " + firstWeekCustomerAvg);
