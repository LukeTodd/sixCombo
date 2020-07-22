let numbers = []



function sixCombo() {

    let template = '<ul>'
    for(let i = 200000; i <= 200050; i++){
        numbers.push(i)
        numbers.forEach( number => {
            template += '<li>' + number + '</li>'
        })
        template += '</ul>'
        document.getElementById('displayNum').innerHTML = template
        }   
    }





