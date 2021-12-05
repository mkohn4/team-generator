const fs = require('fs');

var markup = function(teamHTML) {
    return `
    <!DOCTYPE html>
        <html>
        <head>
            <title>Bootstrap 101 Template</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Bootstrap -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            </head>
        <body>
            <h1>Team Layout</h1>
            <div>
                ${teamHTML}
            </div>
            <script src="https://code.jquery.com/jquery.js"></script>
            <script src="js/bootstrap.min.js"></script>
        </body>
        </html>
    
    `
}


const writeFile = markup => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/index.html', markup, err => {
            //if error, reject promise and send error to promises catch method
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'HTML Created!'
            });
        })
    })
}

module.exports = {
    writeFile: writeFile,
    markup: markup,
};