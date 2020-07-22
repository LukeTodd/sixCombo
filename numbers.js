let numbers = []
let template = ''
function getTemplate() {
    '<h3></h3>'
}

function sixCombo() {

    let template = '<h3></h3>' 
    for(let i = 200000; i <= 299999; i++){
        numbers.push(i)
        numbers.forEach( number => {
            template += number
        })
        document.getElementById('displayNum').innerHTML = template
        }   
    }





