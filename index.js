// Write your solution in this file!
const employee={name:"catherine",streetAddress:"juja"};
function updateEmployeeWithKeyAndValue(employee,key,value){
    const employee1={...employee};
    employee1[key]=value;
    return employee1;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key){
   employee.name="Sam";
   employee.streetAddress="12 Broadway";
   return employee;
}
function deleteFromEmployeeByKey(){
    const employee2={...employee};
    delete employee2.name;
    return employee2;
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee.name;
    return employee;
}