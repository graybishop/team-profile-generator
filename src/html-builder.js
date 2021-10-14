const htmlOpening = () => {
    return`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/style/style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Team Profile</title>
</head>

<body class="bg-dark text-light">
    <header class="text-center">
        <div class="bg-light text-dark fw-bolder">
            <h1>Team Profile</h1>
        </div>
    </header>
    <main>
        <div id='cardHolder' class="container">
            <div class="row justify-content-center">
            `
}

const htmlClosing = () => {
    return`
    </div>
    </div>
</main>
<footer>
</footer>
</body>

</html>`
}

const addHTMLCard = (obj) => {
    let name = obj.name
    let id = obj.id
    let email = obj.email
    let role = obj.role
    let misc;

    switch (role) {
        case `Employee`:
            misc = undefined
            break;
        case `Engineer`:
            misc = `GitHub: ${obj.github}`
            break;
        case `Intern`:
            misc = `School: ${obj.school}`
            break;
        case `Manager`:
            misc = `Office Number: ${obj.officeNumber}`
            break;
    
        default:
            throw console.error(`cant find a role for this person`);
            break;
    }
return `
<!-- card start -->
<div class="col-sm-4">
    <div class="card text-dark shadow mb-3">
        <div class="card-body">
            <div class="d-flex flex-row justify-content-between">
                <h2 class="card-title">${name}</h2>
                <span class="material-icons">
                    ${role ==`Engineer`? `engineering` :
                        role ==`Intern`? `history_edu` : `cases`}
                </span>
            </div>
            <div class="mb-3">
                <h3 class="card-subtitle text-muted">${role}</h3>
            </div>
            <div>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: ${email}</p>
                <p class="card-text">${misc}</p>
            </div>
        </div>
    </div>
</div>
<!-- card end -->
`
    
}