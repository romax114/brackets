module.exports = function check(str, bracketsConfig) {
    while(str){
        let counter = 0
        for(const i of bracketsConfig) {
            let brackets = i[0] + i[1]
            if(str.includes(brackets)){
                str = str.replace(brackets, '');
                counter += 1;
            }
        }
        if(counter == 0)
            break;
    }
    return str == '' ? true : false
}
