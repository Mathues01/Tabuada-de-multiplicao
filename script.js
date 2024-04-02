function tabuadaMultiplicacao() {
    let num = document.getElementById('txn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert("Digite um número!!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        window.alert("Sua tabauda está pronta")
        
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

function tabuadaDivisao() {
    let num = document.getElementById('txn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert("Digite um número!!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        window.alert("Sua tabauda está pronta")
        
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${n/c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
function tabuadaSoma() {
    let num = document.getElementById('txn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert("Digite um número!!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        window.alert("Sua tabauda está pronta")
        
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
function tabuadaSubtracao() {
    let num = document.getElementById('txn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert("Digite um número!!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        window.alert("Sua tabauda está pronta")
        
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}


 



 


 


 



 


 

