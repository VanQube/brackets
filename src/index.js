module.exports = function check(str, bracketsConfig) {
    let simpleBrackets = bracketsConfig.map( b => b.join("") );

    for (let i = 0; i < simpleBrackets.length; i++) {

        if( str.includes(simpleBrackets[i]) ) {
            str = str.replace(simpleBrackets[i], "");
            i = -1;
        }
    }
    return  !str;

}
