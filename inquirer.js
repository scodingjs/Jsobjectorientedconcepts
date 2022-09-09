
    inquirer.prompt([
        {
            type:"list",
            message:"Select option",
            name:"inputchoice",
            choices:["one","two","three","four"]
        },
        {
            type:"input",
            message:"When one",
            name:"one",
            when:(answers) => answers.inputchoices==="one"
        },
        { message:"When two",
        name:"two",
        when:(answers) => answers.inputchoices==="two"

        }
    ]).then(answers =>{
        console.log(answers)
    })