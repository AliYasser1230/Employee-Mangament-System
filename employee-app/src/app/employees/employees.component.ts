import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.interface';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
    employees: Employee[] = [];
    isAddingEmployee: boolean = false;
    newEmployee: Employee = { name: '', role: '', joiningDate: new Date() };
    errorMessage: string = ''; // Property for error message

    constructor(private employeeService: EmployeeService) {}

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees(): void {
        this.employeeService.getEmployees().subscribe((data) => {
            this.employees = data;
        });
    }

    toggleAddEmployee(): void {
        this.isAddingEmployee = !this.isAddingEmployee;
        this.errorMessage = ''; // Reset error message when toggling
    }

    submitEmployee(): void {
        if (
            this.newEmployee.name &&
            this.newEmployee.role &&
            this.newEmployee.joiningDate
        ) {
            this.errorMessage = ''; // Clear any previous error message
            this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
                this.getEmployees();
                this.resetForm();
            });
        } else {
            this.errorMessage = 'Please fill in all fields.'; 
        }
    }

    resetForm(): void {
        this.newEmployee = { name: '', role: '', joiningDate: new Date() };
        this.isAddingEmployee = false;
    }
}
