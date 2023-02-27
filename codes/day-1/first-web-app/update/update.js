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