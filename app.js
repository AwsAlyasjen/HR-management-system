'use strict';
let allEmployyes = [];
let from = document.getElementById("from");
let card = document.getElementById("information");
let card2 = document.getElementById("information2");
let card3 = document.getElementById("information3");
let card4 = document.getElementById("information4");
let card5 = document.getElementById("information5");


function employeeDetals(employeeID, fullName, department,
    level, salary, image,uniqueId) {
    this.name = fullName;
    this.id = employeeID;
    this.department = department;
    this.level = level;
    this.imageURL = image;
    this.salary = salary;
    this.uniqueId=uniqueId;
    allEmployyes.push(this);

}
var seniorSalaryMin = 1500;
var seniorSalaryMax = 2000;
var midSeniorSalaryMin = 1000;
var midSeniorSalaryMax = 1500;
var juniorSalaryMin = 500;
var juniorSalaryMax = 1000;



const calculateSalary = (min, max) => {
    var salaryBeforeTax;
    var salaryAfterTax;
    salaryBeforeTax = Math.floor(Math.random() * (max - min + 1)) + min;
    return salaryAfterTax = salaryBeforeTax - (salaryBeforeTax * 0.075);
}
function uniqueFunction() {
    const num = Math.floor(1000 + Math.random() * 9000);
    return num;
   }



let employee1 = new employeeDetals("ID Number :1000", "Name: Ghazi Samer", "Department: Administration", "Level: Senior", calculateSalary(seniorSalaryMin, seniorSalaryMax), "./assets/Ghazi.jpg",uniqueFunction(1));
let employee2 = new employeeDetals("ID Number :1001", "Name: Lana Ali", "Department: Finance", "Level: Senior", calculateSalary(seniorSalaryMin, seniorSalaryMax), "./assets/Lana.jpg",uniqueFunction(1));
let employee3 = new employeeDetals("ID Number :1002", "Name: Tamara Ayoub", "Department: Marketing", "Level: Senior", calculateSalary(seniorSalaryMin, seniorSalaryMax), "./assets/Tamara.jpg",uniqueFunction(1));
let employee4 = new employeeDetals("ID Number :1003", "Name: Safi Walid", "Department: Administration", "Level: Mid-Senior", calculateSalary(midSeniorSalaryMin, midSeniorSalaryMax), "./assets/Safi.jpg",uniqueFunction(1));
let employee5 = new employeeDetals("ID Number :1004", "Name: Omar Zaid", "Department: Development", "Level: Senior", calculateSalary(seniorSalaryMin, seniorSalaryMax), "./assets/Omar.jpg",uniqueFunction(1));
let employee6 = new employeeDetals("ID Number :1005", "Name: Rana Saleh", "Department: Development", "Level: Junior", calculateSalary(juniorSalaryMin, juniorSalaryMax), "./assets/Rana.jpg",uniqueFunction(1));
let employee7 = new employeeDetals("ID Number :1006", "Name: Hadi Ahmad", "Department: Finance", "Level: Mid-Senior", calculateSalary(midSeniorSalaryMin, midSeniorSalaryMax), "./assets/Hadi.jpg",uniqueFunction(1));


employeeDetals.prototype.render = function () {
    
    let image = document.createElement('img'); 
    image.setAttribute("src", this.imageURL);
    card.appendChild(image);

    /*let heading = document.createElement('article');
    heading.textContent = this.name;
    card.appendChild(heading);*/
     let section =document.createElement("article");
    card2.appendChild(section);
    let paragh1=document.createElement("p");
    paragh1.textContent=this.name;
    card2.appendChild(paragh1);

    let section2 =document.createElement("article");
    card3.appendChild(section2);
    let paragh2=document.createElement("p");
    paragh2.textContent=this.department;
    card3.appendChild(paragh2);

   /* var departmentEmp=document.createElement('h4');
    departmentEmp.textContent=this.department;
    card.appendChild(departmentEmp);*/
   /* let section3 =document.createElement("article");
    card.appendChild(section3);
    let paragh3=document.createElement("p");
    paragh3.textContent=this.id;
    card.appendChild(paragh3);*/

    /*let div = document.createElement('h4');
    div.textContent = this.id;
    card.appendChild(div);*/
    let section4 =document.createElement("article");
    card4.appendChild(section4);
    let paragh4=document.createElement("h4");
    paragh4.textContent=this.level;
    card4.appendChild(paragh4);

    /*let ul = document.createElement('ul');
    card.appendChild(ul); 
    let list = document.createElement('li');
    ul.appendChild(list);
    list.textContent = this.level;*/
    let section5 =document.createElement("article");
    card5.appendChild(section5);
    let paragh5=document.createElement("h4");
    paragh5.textContent=(this.id+" ("+this.uniqueId+")");
    card5.appendChild(paragh5);
    
   /* var uniqueNumber=document.createElement('h6');
    uniqueNumber.textContent=this.uniqueId;
    card.appendChild(uniqueNumber);*/

}
function renderAll() {
    for (let i = 0; i < allEmployyes.length; i++) {
        allEmployyes[i].render();
    }

}
renderAll();



/* employee1.render();
 employee2.render();
 employee3.render();
 employee4.render();
 employee5.render();
 employee6.render();
 employee7.render();*/
form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let images = event.target.images.value;
    let newEmployee = new employeeDetals("",fullName, department, level, "",images,"");
    newEmployee.render();
    

    

}
