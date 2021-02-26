let emp_details = {
  emp_name: "Adam",
  emp_salary: "",
  emp_age : 25
}

let param = {
  emp_name: "",
  emp_salary: "",
  emp_age: ""
}

Object.getOwnPropertyNames(emp_details).forEach(function(val) {
  if(val != null || val != "") {
    param[val] = emp_details[val]
  } else {
    return console.error(`O campo ${val} precisa ser preenchido`);
  }
});

console.log(param)