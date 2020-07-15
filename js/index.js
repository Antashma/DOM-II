// variable for pg body and creating notice
const pageBody = document.querySelector('body') 

function showNotice() {
    const notice = document.createElement('div')
    notice.style.visibility = 'visible'
    notice.style.display = 'flex'
    notice.style.flexDirection = 'column'
    notice.style.justifyContent = 'center'
    notice.style.border = '2px solid black'
    notice.style.width = '30%'
    notice.style.padding = '50px'
    notice.style.background = 'silver'
    notice.style.position = 'fixed'
    notice.style.top = '50%'
    notice.style.left = '50%'
    notice.style.transform = 'translate(-50%, -50%)'

    //add paragraph el for notice
    const noticePara = document.createElement('p')
    noticePara.textContent = 'THIS IS ANNOUNCEMENT!'
    notice.appendChild(noticePara)

    //add button that will remove notice
    const noticeBtn = document.createElement('button')
    noticeBtn.textContent = 'THANK YOU'
    noticeBtn.addEventListener('click', () => notice.style.visibility = 'hidden')
    notice.appendChild(noticeBtn)

    //add notice to page!
    pageBody.prepend(notice);
}
// event1 - domcontentloaded event
document.addEventListener('DOMContentLoaded', showNotice)



// event 2 & 3 - All IMG using click and dblclick to scale 👆 & 👇
const allImgs = Array.from(
    document.getElementsByTagName('img')
    );
allImgs.forEach(
    function(el) {
        el.addEventListener('click', () => el.style.transform = 'scale(2)');
        el.addEventListener('dblclick', () => el.style.transform =  'scale(1)');
        el.style.transition = '0.3s ease-in'
    }
)


//event 4 & 5 - H2 using mouseover and mouse leave to change color
const allHeadline2 = Array.from(document.getElementsByTagName('h2'));

allHeadline2.forEach(
    function(el) { 
        el.addEventListener('mouseover', () => el.style.color = 'lime');
        el.addEventListener('mouseleave', () => el.style.color = 'black')
        el.style.transition = '0.2s ease-in'
    }
)

//event 6 -pointer leaves the window & calls pop-up 
document.addEventListener('pointerleave', leaveAlert)
function leaveAlert() { // will also remove event
    window.alert('Don\'t leave yet! Use 25OFF at checkout to get $25 off your first booking!')
    document.removeEventListener('pointerleave', leaveAlert)
}

//event 7 - scrolling removes the nav
const header = document.querySelector('.main-navigation')
document.addEventListener('scroll', () => header.style.display = 'none')

//event 8 - 
const contentPick = document.querySelector('.content-pick')
document.addEventListener('keydown', () => window.alert('You pressed a key!'))

// event 9 - header will display again upon resize
window.addEventListener('resize', () => header.style.display = 'block')

//event 10 - 
allImgs.forEach(img => img.addEventListener('transitionend', () => window.alert(event.target.alt)))