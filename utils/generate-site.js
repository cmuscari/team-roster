const generateCard = teamArray => {
    for (let i = 0; i < teamArray.length; i++) {
        let html = `
        <h1>Role: ${teamArray[i].getRole()}<h1>
        <h2>Name: ${teamArray[i].name}</h2>
        <h3>ID Number: ${teamArray[i].id}</h3> 
        <h3>Email: ${teamArray[i].email}</h3> 
        `;
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
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    ${generateCard(data)}
</body>
</html>
`;
return html;
};









// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/index.html', fileContent, err => {
//             // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//             if (err) {
//                 reject(err);
//                 // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//                 return;
//             }

//             // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//             resolve({
//                 ok: true,
//                 message: 'File created!'
//             });
//         });
//     });
// };


module.exports = generatePageContent;