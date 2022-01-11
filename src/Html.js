let html = `<DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, inital-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">

    <title>Work Team Profile</title>
</head>

<body>
    <header class="jumbotron sticky-top bg-primary py-3 text-center mb-2">
        <h1 class="text-light"> Work Team:</h1>
    </header>

    <main>
        <div class="container">
            ${teamCards.join(' ')}
        </div>
    </main>
</body>
</html>`



const createHtml = workTeam => {
    const teamCards = [];

    for (let i = 0; i < workTeam.length; i++) {
// Manager card HTML code here
        if (workTeam[i].getRole() === 'Manager') {
            teamCards.push(` <div class="card" style="width: 18rem; display: inline-block">
            <div class="card-header bg-danger">
                <p class="text-light">Name: ${workTeam[i].name}</p>
                <p class="test-light">Manager</p>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${workTeam[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${workTeam[i].email}>${workTeam[i].email}</a></li>
                <li class="list-group-item">Office Number: ${workTeam[i].office}</li>
            </ul>
            </div>`)
// Engineer card HTML code here
        } else if (workTeam[i].getRole() === 'Engineer') {
            teamCards.push(`
            
            `)
        }
    }
}