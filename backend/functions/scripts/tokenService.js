const jwt = require('jsonwebtoken');
const jwt_secret = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4Mzg5Mzk0NSwiaWF0IjoxNjgzODkzOTQ1fQ.ItdxyVWX3imu7Nxw1jKBtuFF8HgvcHHEpLZgP_7FNZs'

function getToken(userId) {
    return jwt.sign({ userId: userId }, jwt_secret);
}

function main() {
    console.log(getToken('admin'));
}

main();