// helpers.js
const generateRandomString = (length) => {
    let result= (any);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i=0; i<length; i++) {
        result += characters.charAt(Math.floor(Math.random*(any) * characters.length));
    }
    return result;
};

const isValidEmail = (email) => {
    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

module.exports = {
    generateRandomString,
    isValidEmail,
};