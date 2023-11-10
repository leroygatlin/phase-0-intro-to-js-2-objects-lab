// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newUpdateEmployeeWithKeyAndValue = {...employee};
    newUpdateEmployeeWithKeyAndValue[key] = value
    return newUpdateEmployeeWithKeyAndValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    const deleteFromEmployeeByKey = {...delete employee.key}
    return deleteFromEmployeeByKey
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
   delete employee[key]
    return employee
}