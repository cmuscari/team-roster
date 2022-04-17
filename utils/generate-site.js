const cardsArray = [];

const generateCard = teamArray => {
    for (let i = 0; i < teamArray.length; i++) {
        if (teamArray[i].getRole() === "Manager") {
            return `
            <h1>Role: ${teamArray[i].getRole()}<h1>
            <h2>Name: ${teamArray[i].name}</h2>
            <h3>ID Number: ${teamArray[i].id}</h3> 
            <h3>Email: ${teamArray[i].email}</h3>
            <h3>Office Number: ${teamArray[i].officeNum}</h3> 
            `
        } 
        if (teamArray[i].getRole() === "Engineer") {
            return `
            <h1>Role: ${teamArray[i].getRole()}<h1>
            <h2>Name: ${teamArray[i].name}</h2>
            <h3>ID Number: ${teamArray[i].id}</h3> 
            <h3>Email: ${teamArray[i].email}</h3> 
            <h3>GitHub Username: ${teamArray[i].github}</h3>
            `
        }
        if (teamArray[i].getRole() === "Intern") {
            return `
            <h1>Role: ${teamArray[i].getRole()}<h1>
            <h2>Name: ${teamArray[i].name}</h2>
            <h3>ID Number: ${teamArray[i].id}</h3> 
            <h3>Email: ${teamArray[i].email}</h3> 
            <h3>School: ${teamArray[i].school}</h3>
            `
        }
    }
};




const generatePageContent = (data) => {
    let html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Roster</title>
    <link rel="stylesheet" href="./src/style.css">
</head>

<body>
    ${generateCard(data)}
</body>
</html>
`;
return html;
};









module.exports = generatePageContent;