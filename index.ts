#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.magentaBright.italic("Welcome to Code-With-Haroon-Afridi - OOP(Object-Oriented-Programming)"));

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}

class Person{
    students:Student[]=[]

    addStudent(obj:any){
        this.students.push(obj)
    }
}

const persons = new Person()

const programmStart = async(persons:Person)=>{
    do{
    console.log(chalk.bold.yellow("Welcome Guest"));
    const ans = await inquirer.prompt({
        type:"list",
        message:"Who would you like to talk to?",
        name:"Select",
        choices:["Self","Student"],
    });

    if(ans.Select == "Self"){
        console.log("I'm talking to Myself")
        console.log("Alhamdulillah,I'm Doing Well")
    }
    if(ans.Select == "Student"){
        const ans = await inquirer.prompt({
            type:"input",
            message:"Which student do you want to talk to?",
            name:"student"
        });

        const student = persons.students.find(val => val.name ==ans.student)

        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)

            console.log(`Asslam-o-Alikum I am ${name.name}, and I'm Fine`)
            console.log(persons.students);
        }
        if(student){
            console.log(`Asslam-o-Alikum I am ${student.name}, and I'm Fine..`)
            console.log(persons.students)
        }
    }
}while(true)
};
programmStart(persons)