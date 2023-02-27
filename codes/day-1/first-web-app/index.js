function writeData(result) {
    var spanElement = document.createElement('div')
    spanElement.id = 'spanMessage'
    spanElement.innerText = result.name
    spanElement.classList.add('center-style', 'h1-font')
    spanElement.style.backgroundColor = 'burlywood'
    spanElement.style.marginLeft = '300px'
    spanElement.style.marginRight = '300px'
    var brElement = document.createElement('br')
    document.body.append(brElement, spanElement)
}
async function clicked() {
    try {
        var resp = await fetch('http://localhost:3000')
        var data = await resp.json()
        console.log(data)
        writeData(data)
    } catch (error) {
        console.log(error)
        //writeData(error.message)
    }
    //var text = document.createTextNode('button clicked')

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