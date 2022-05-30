function camelize(string) {
    string = string.split('');
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '-') {
            string.splice(i, 1);
            result += string[i].toUpperCase();
        } else {
            result += string[i];
        }
    }
    return result;
}

