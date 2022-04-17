const cardsArray = [];

const generateCard = teamArray => {
    for (let i = 0; i < teamArray.length; i++) {
        if (teamArray[i].getRole() === "Manager") {
            let managerCard = `
            <div class="col-12 flex-row d-flex">
                <div class="col-4 border border-dark rounded text-center mb-3">
                    <h1><span class="font-weight-bold">Name: </span>${teamArray[i].name}<h1>
                    <h2><span class="font-weight-bold">Role: </span>${teamArray[i].getRole()}</h2>
                    <h3><span class="font-weight-bold">ID Number: </span>${teamArray[i].id}</h3> 
                    <h3><span class="font-weight-bold">Email: </span>${teamArray[i].email}</h3>
                    <h3><span class="font-weight-bold">Office Number: </span>${teamArray[i].officeNum}</h3> 
                </div>
            </div>
            `
            cardsArray.push(managerCard);
        } 
        else if (teamArray[i].getRole() === "Engineer") {
            let engineerCard = `
            <div class="col-12 flex-row d-flex">
                <div class="col-4 border border-dark rounded text-center mb-3">
                    <h1><span class="font-weight-bold">Name: </span>${teamArray[i].name}<h1>
                    <h2><span class="font-weight-bold">Role: </span>${teamArray[i].getRole()}</h2>
                    <h3><span class="font-weight-bold">ID Number: </span>${teamArray[i].id}</h3> 
                    <h3><span class="font-weight-bold">Email: </span>${teamArray[i].email}</h3>
                    <h3><span class="font-weight-bold">GitHub Username: </span>${teamArray[i].github}</h3> 
                </div>
            </div>
            `
            cardsArray.push(engineerCard);
        }
        else if (teamArray[i].getRole() === "Intern") {
            let internCard = `
            <div class="col-12 flex-row d-flex">
                <div class="col-4 border border-dark rounded text-center mb-3">
                    <h1><span class="font-weight-bold">Name: </span>${teamArray[i].name}<h1>
                    <h2><span class="font-weight-bold">Role: </span>${teamArray[i].getRole()}</h2>
                    <h3><span class="font-weight-bold">ID Number: </span>${teamArray[i].id}</h3> 
                    <h3><span class="font-weight-bold">Email: </span>${teamArray[i].email}</h3>
                    <h3><span class="font-weight-bold">School: </span>${teamArray[i].school}</h3> 
                </div>
            </div>
            `
            cardsArray.push(internCard);
        }
    }
    return cardsArray.join('');
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    ${generateCard(data)}
</body>
</html>
`;
return html;
};









module.exports = generatePageContent;