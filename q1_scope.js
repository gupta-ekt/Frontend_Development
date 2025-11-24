var bonus = 5000;
var employee = false;

function calculateSalary() {
  var Salary = 40000;
  var Permanent = true;
  var totalSalary = Salary + (Permanent ? bonus : 0);

  console.log("Inside function -> Permanent?", Permanent);
  console.log("Inside function -> Total Salary ₹" + totalSalary);
}

console.log("Global -> Permanent?", employee);

calculateSalary();

console.log("Global after function -> Permanent?", employee);
