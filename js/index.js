// BODY load element
const pageBody = document.querySelector('body') 

function showNotice() {
    const notice = document.createElement('div')
    notice.style.visibility = 'visible'
    notice.style.display = 'flex'
    notice.style.flexDirection = 'column'
    notice.style.justifyContent = 'center'
    notice.style.border = '2px solid black'
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
pageBody.addEventListener('load', showNotice())



//All IMG using click and dblclick to scale 👆 & 👇
const allImgs = Array.from(
    document.getElementsByTagName('img')
    );
allImgs.forEach(
    function(el) {
        el.addEventListener('click', () => el.style.transform = 'scale(2, 0.5)');
        el.addEventListener('dblclick', () => el.style.transform =  'scale(1, 0.5)');
    }
)


//H2 using mouseover and mouse leave to change color to 🟢
const allHeadline2 = Array.from(document.getElementsByTagName('h2'));

console.log('all h2 elements', allHeadline2)

allHeadline2.forEach(
    function(el) { 
        el.addEventListener('mouseover', () => el.style.color = 'lime');
        el.addEventListener('mouseleave', () => el.style.color = 'black')
    }
)