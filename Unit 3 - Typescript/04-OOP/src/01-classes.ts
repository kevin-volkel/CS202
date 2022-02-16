// class Department {
//   private paycheck : number = 1000;
//   updatePay = (newNum: number) : number => {
//     this.paycheck = newNum;
//     return this.paycheck
//   }
// }

// const homeDepot = new Department();

class ProjectMath {
  static gravity = 9.8;
  static speed(time: number): number {
    return time ** 2 * ProjectMath.gravity;
  }
}

ProjectMath.speed(4); //

//* gradebook
//*  -> array with current grades (protected)
//*  -> find the passing grade (65%)
//*  -> put in an array and find the average
//*  -> remove the lowest grade from an array
//*  -> print out all the items in an array (...)

class Gradebook {
  static grades: number[] = [20, 50, 10, 70, 40];
  static readonly passing = 65;

  static addGrade(newGrade: number): number[] {
    Gradebook.grades.push(newGrade);
    return Gradebook.grades;
  }

  static average(): number {
    const sum: number = Gradebook.grades.reduce((total, curr) => total + curr);
    return sum / Gradebook.grades.length;
  }

  static removeLowest(): number[] {
    const lowest = Math.min(...Gradebook.grades);
    const index = Gradebook.grades.indexOf(lowest);
    Gradebook.grades.splice(index, 1);
    return Gradebook.grades;
  }

  static printArr(): void {
    return console.log(...Gradebook.grades);
  }

  static findPassing(): number[] {
    const passingGrades: number[] = Gradebook.grades.filter(
      (grade) => grade > Gradebook.passing
    );
    return passingGrades;
  }
}

abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];

  // private name: string;

  constructor(public name: string, protected readonly id: string) {
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  //* any extended class now REQUIRE a describe method
  abstract describe (this: Department): void;

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(...this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]){
    super('IT', id)
  }

  describe(): void {
    console.log(`IT Department -ID:${this.id}`);
    
  }
}

const employee1 = Department.createEmployee('Max')

const it = new ITDepartment('d1', ['Jimmy', employee1.name])

it.addEmployee('Tammy');
it.addEmployee('Temmy')
it.addEmployee('Timmy')
it.addEmployee('Tommy')
it.addEmployee('Tummy')
it.addEmployee('Tymmy')

it.describe()
it.printEmployeeInformation()

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]){
    super('Accounting', id)
  }

  //* method that gets the most recent report
  get latestReport(): string{
    if(this.reports.length == 0) return 'There are no report to view'
    return this.reports[this.reports.length - 1]
  }

  //* add a new report
  set latestReport(newReport: string) {
    if(!newReport) return;
    this.reports.push(newReport)
  }

  describe(): void {
    console.log(`Accounting Department - ID:${this.id}`);
  }

  //* log all reports
  printReports() {
    if(this.reports.length == 0) return console.log('Your reports is belong to us')
    return console.log(...this.reports)
  }
}

const Accounting = new AccountingDepartment('d2', ['Janis'])

Accounting.addEmployee('Jake from StateFarm')
Accounting.printEmployeeInformation()
Accounting.printReports()