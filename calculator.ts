import inquirer from "inquirer";
let answers =await inquirer.prompt([
    {message:"Please enter 1st number", type:"number",name:"FirstNumber"},
    {message:"Please enter 2nd number",type:"number", name:"SecondNumber"},
    {
        message:"Please select one option for operation", 
        type:"list", 
        name:"options",
        choices:["add","subtract","multiply","divide"],
    },
])
if (answers.options=="add"){
    console.log(answers.FirstNumber+answers.SecondNumber)
}
else if(answers.options=="subtract"){
    console.log(answers.FirstNumber-answers.SecondNumber)
}
else if(answers.options=="multiply"){
    console.log(answers.FirstNumber*answers.SecondNumber)
}
else if(answers.options=="divide"){
    console.log(answers.FirstNumber/answers.SecondNumber)
}
else{
    console.log("please enter numbers again")
}
