function btn(){
    var area  = document.querySelector('#write').value
    var select = document.querySelector('#select').value
    var res = document.querySelector('#res')
    var answer

    switch (select){
        case 'letter':
            for (var i = 0; i <= area.length; i++) {
                if (area == '') {
                    window.alert('Em branco')
                } else if (area.length == '') {
                    area.length = 0
                }
            }
            res.innerHTML = ''
            res.innerHTML = answer
            break
        case 'text':
            answer = area.contains()
            res.innerHTML = ''
            res.innerHTML = answer
            break
    }
}