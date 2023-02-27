function clicked() {
    //var text = document.createTextNode('button clicked')
    var spanElement = document.createElement('div')
    spanElement.id = 'spanMessage'
    spanElement.innerText = 'button clicked'
    spanElement.classList.add('center-style', 'h1-font')
    spanElement.style.backgroundColor = 'burlywood'
    spanElement.style.marginLeft = '300px'
    spanElement.style.marginRight = '300px'
    var brElement = document.createElement('br')
    document.body.append(brElement, spanElement)
}

function onCheckChanged(e) {
    //console.log(e.target.checked)
    if (e.target.checked) {
        var spanElement = document.getElementById('spanMessage')
        spanElement.innerText = 'changing text on check of the check box'
        // spanElement.style.backgroundColor = 'grey'
        // spanElement.style.color = 'white'
        spanElement.setAttribute('style', 'background-color:grey;color:white')
    }
}