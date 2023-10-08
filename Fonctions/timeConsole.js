const moment = require('moment');

async function consolaTime(message) {
    let currentdate = new Date();
    const formattedDate = moment(currentdate).format('YYYY-MM-DD HH:mm:ss');
    const formattedConsole = `${formattedDate} | ${message}`;

    return console.log(formattedConsole);
}

async function consolaLogs() {
    const formattedDate = moment().format('YYYY-MM-DD');
    return formattedDate;
}

module.exports = {
    consolaTime,
    consolaLogs
};

