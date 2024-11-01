/*
const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator,currentValue) =>{
    return accumulator + currentValue;
},0);

console.log(sum);
*/

function safeHTML(strings,...values){
    return strings.reduce((result, str,i) =>{
        let value = values[i - 1];
        if(value){
            value = value.replace(/&/g, '&amp;')
                         .replace(/</g, '&lt;')
                         .replace(/>/g, '&gt;')
                         .replace(/"/g, '&quot;')
                         .replace(/'/g, '&apos;');
        }

        return result + (value || '') +str;

    },'');
}

document.getElementById('userForm').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    const safeOutput = safeHTML`${username} : ${message}`;
    document.getElementById('output').innerHTML = safeOutput;
})




