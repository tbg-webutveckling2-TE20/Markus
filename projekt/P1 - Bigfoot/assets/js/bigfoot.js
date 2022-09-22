function loadBigFoot() {
    document.getElementById('BigFoot').src = 'assets/images/bigfoot.png'
    document.getElementById('xddEmote').src = 'assets/images/xdd emote.jpg'
}

function moveBigFoot() {
    alert('Du hittade Bigfoot!')
    var picture = document.getElementById('BigFoot')
    var x = Math.random() * 300
    var y = Math.random() * 300

    picture.style.top = x +'px'
    picture.style.left = y +'px'
}

function xddJumpScare() {
    const width = window.screen.availWidth;
    const height = window.screen.availHeight;
    var picture = document.getElementById('xddEmote')
    var x = Math.random() * height
    var y = Math.random() * width

    picture.style.top = x +'%'
    picture.style.bottom = y +'%'
}