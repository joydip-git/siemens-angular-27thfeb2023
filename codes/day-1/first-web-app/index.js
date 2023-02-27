function clicked() {
    //var text = document.createTextNode('button clicked')
    var spanElement = document.createElement('span')
    spanElement.id = 'spanMessage'
    spanElement.innerText = 'button clicked'

    var brElement = document.createElement('br')
    document.body.append(brElement, spanElement)
}

function onCheckChanged(e) {
    //console.log(e.target.checked)
    if (e.target.checked) {
        var spanElement = document.getElementById('spanMessage')
        spanElement.innerText = 'changing text on check of the check box'
    }
}