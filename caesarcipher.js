const encodetext = function (text, shift, action='encode'){
    const alphabet_S = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const alphabet_L = alphabet_S.map(letter => letter.toUpperCase());
    const alphabet_length = alphabet_S.length;
    let result = '';

    if (action === 'decode')
        shift = shift > 0 ? -shift : Math.abs(shift);

    if(shift >= alphabet_length || shift <= -alphabet_length) 
        shift = shift % alphabet_length;
    
    for (let element of text) {
        pos_s = alphabet_S.indexOf(element);
        pos_l = alphabet_L.indexOf(element);
    
        if(pos_l >= 0){
            pos_l = pos_l + shift;
            if(pos_l => alphabet_length) pos_l = pos_l % alphabet_length;
            if(pos_l < 0) pos_l = pos_l + alphabet_length;
            result += alphabet_L[pos_l];
            continue;
        }
    
        if(pos_s >= 0){
            pos_s = pos_s + shift;
            if(pos_s => alphabet_length) pos_s = pos_s % alphabet_length;
            if(pos_s < 0) pos_s = pos_s + alphabet_length;
            result += alphabet_S[pos_s];
            continue;
        }

        result += element;
    }

    return result;
}

module.exports = encodetext;