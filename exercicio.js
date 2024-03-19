function boxSelect(n) {
    if (n == 'd') {
        document.getElementById('binary').value = ""
    }
    else if (n == 'b') {
        document.getElementById('decimal').value = ""
    }
}

function converter() {    
    let nDec = document.getElementById('decimal').value
    let nBin = document.getElementById('binary').value



    if (nBin) {
        document.getElementById('decimal').value = parseInt(nBin, 2)

    }
    else if(nDec) {
        document.getElementById('binary').value = parseInt(nDec).toString(2)
    }
    else {
        alert("Entre com um valor para a conversão")
    }
 
}


