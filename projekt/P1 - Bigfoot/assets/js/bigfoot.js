function loadBigFoot() {
    document.getElementById('BigFoot').src = 'assets/images/bigfoot.png'
    document.getElementById('xddEmote').src = 'assets/images/xddemote.jpg'
}

function moveBigFoot() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    alert('Du hittade Bigfoot!')
    var picture = document.getElementById('BigFoot')
    var y = Math.random() * height
    var x = Math.random() * width
    
    picture.style.top = y +'px'
    picture.style.left = x +'px'

    console.log(width, height)
}

function xddJumpScare() {
    alert('xdd')
    const width = window.innerWidth;
    const height = window.innerHeight;

    var picture = document.getElementById('xddEmote')
    var y = Math.random() * height
    var x = Math.random() * width

    picture.style.top = y +'px'
    picture.style.left = x +'px'
}