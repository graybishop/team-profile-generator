const htmlOpening = () => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Team Profile</title>
</head>

<body class="">
    <header class="text-center">
        <div class="bg-light text-primary fw-bolder p-4 mb-3">
            <h1>Team Profile</h1>
        </div>
    </header>
    <main>
        <div id='cardHolder' class="container">
            <div class="row justify-content-center">
            `;
};

const htmlClosing = () => {
    return `
    </div>
    </div>
</main>
<footer>
</footer>
</body>

</html>`;
};

const addHTMLCard = (obj) => {
    let name = obj.name;
    let id = obj.id;
    let email = obj.email;
    let role = obj.role;
    let misc;

    switch (role) {
        case `Employee`:
            misc = undefined;
            break;
        case `Engineer`:
            misc = `GitHub: <a href="https://github.com/${obj.github}">${obj.github}</a>`;
            break;
        case `Intern`:
            misc = `School: ${obj.school}`;
            break;
        case `Manager`:
            misc = `Office #: ${obj.officeNumber}`;
            break;

        default:
            throw console.error(`cant find a role for this person`);
    }
    return `
    <!-- card start -->
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card text-dark shadow mb-3 h-100">
            <div class="card-body p-4">
                <div class="d-flex flex-row justify-content-between pb-2">
                    <h2 class="card-title fs-4 text-primary">${name}</h2>
                    <span class="material-icons text-primary">
                        ${role ==`Engineer`? `engineering` :
                            role ==`Intern`? `history_edu` : `cases`}
                    </span>
                </div>
                <div class="mb-2 border-bottom pb-2 border-primary">
                    <h3 class="card-subtitle text-secondary fs-5">${role}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item card-text m-0 pb-1 fw-bold">ID: ${id}</>
                    <li class=" list-group-item card-text m-0 fw-bold pb-1">Email: <a href="mailto:${email}">${email}</a></>
                    <li class=" list-group-item card-text m-0 fw-bold pb-1">${misc}</>
                </ul>
            </div>
        </div>
    </div>
    <!-- card end -->
`;

};

export const createFullHTMl = (arr) => {
    let string = ''
    string = string.concat(htmlOpening())
    arr.forEach(element => {
        string = string.concat(addHTMLCard(element))
    });
    string = string.concat(htmlClosing())
    return string
}