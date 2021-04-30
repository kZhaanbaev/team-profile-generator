const employeeData = require('../src/employeeData');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

/**
 * Function will generate full html document as a String based on injected data
 * @param {*} data is an object type of Manager/Engineer/Intern
 * @returns an html document as a String
 */
function getHtmlOutput() {
    const htmlOutput =
        `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <section class="container-fluid py-5 text-center">
                <h1>My Team</h1>
            </section>
            <div class="container mt-5">
            <div class="row row-cols-1 row-cols-sm-2 rows-cols-md-3 g-4">
            ${addAllEmployees()}
            </div>
            </div>
            <script type="text/javascript" src="../src/home.js"></script>
        </body>
        </html>
        `;

    return htmlOutput;
}

/**
 * Function reads employeeData creates an html element as a String based on data.
 * @returns an html element as a String
 */
function addAllEmployees() {
    let data = [createCard(employeeData.manager[0])];

    if (employeeData.engineers.length > 0) {
        employeeData.engineers.forEach(each => {
            data.push(createCard(each));
        })
    }

    if (employeeData.interns.length > 0) {
        employeeData.interns.forEach(each => {
            data.push(createCard(each));
        })
    }

    return data.join('');
}

/**
 * Function will generate a String variable that will have an html structure with data based on what type of object will be injected.
 * @param {*} Object is either Manager, Engineer or Intern
 * @returns an html card element as a String
 */
function createCard(Object) {
    let icon = 'bi-file-earmark-person-fill';
    let type = 'Office number';
    let typeValue;
    let title = 'Manager';

    if (Object.getRole() === Engineer) {
        title = 'Engineer';
        icon = 'bi-tools';
        type = 'GitHub';
        typeValue = `<a href='https://github.com/${Object.getGithub()}'>${Object.getGithub()}</a>`;
    } else if (Object.getRole() === Intern) {
        title = 'Intern';
        icon = 'bi-award';
        type = 'School';
        typeValue = Object.getSchool();
    } else {
        typeValue = Object.getOfficeNumber();
    }

    const card =
        `<div class="col custom-card mb-5">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-light">
                    <h3 class="card-title">${Object.getName()}</h3>
                    <i class="bi ${icon}"></i>
                    <h5>${title}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${Object.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${Object.getEmail()}">${Object.getEmail()}</a></li>
                        <li class="list-group-item">${type}: ${typeValue}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    return card;
}

exports.getHtmlOutput = getHtmlOutput;