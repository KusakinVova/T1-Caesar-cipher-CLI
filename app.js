const { program } = require('commander');
const fs = require('fs');
const process = require('process');
const readline = require('readline');
const encodetext = require('./caesarcipher');


program
    .option('-s, --shift <type>', 'a shift')
    .option('-i, --input <type>', 'an input file')
    .option('-o, --output <type>', 'an output file')
    .option('-a, --action <type>', 'an action encode/decode');

program.parse(process.argv);
const options = program.opts();

let just_do_it = true;

const shift = parseInt(`${options.shift}`)
if(typeof shift !== 'number' || isNaN(shift)){
    just_do_it = false;
    console.log('-s/--shift must be only number');
}

const action = `${options.action}`;
if(action !== 'encode' && action !== 'decode'){
    just_do_it = false;
    console.log('-a/--action must be only encode/decode');
}

const readfile = `${options.input}`;
const writefile = `${options.output}`;
if(just_do_it){
    if(readfile === 'undefined') {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question('Enter text for encode: ', (answer) => {      
            content_d = encodetext(answer, shift, action);
            to_file = '====================\n' + answer + '\n--------------------\n' + content_d + '\n====================\n';
            if(writefile === 'undefined')
                console.log( answer + ' / ' + content_d);
            else
                fs.appendFile(writefile, to_file, { flag: 'a+' }, err => {});
            rl.close();
        });
    }
    else{
        try {
            let content = fs.readFileSync(readfile, 'utf8');
            content_d = encodetext(content, shift, action);
            to_file = '====================\n' + content + '\n--------------------\n' + content_d + '\n====================\n';
            if(writefile === 'undefined')
                console.log(`Text code : ` + content_d);
            else
                fs.appendFile(writefile, to_file, { flag: 'a+' }, err => {});
            
            console.error("Text was " + action + " with shift = " + shift);
            
        } catch (err) {
            // ошибка чтения файла // console.error(err)
            console.log(readfile + " - this file isn't find ");
        }
    }
}

