module.exports = {
    'envConfig': {
        host: 'localhost',
        connectionLimit : 10,
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'vcapp',
        waitForConnections: true
    },
    'authoring': {
    	'passwordError' : 'Please enter correct password',
    	'userNameError' : 'Please enter correct Mobile Number'
    },
    saltRounds: 10
};
