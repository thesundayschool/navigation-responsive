document.querySelector('#toggle').addEventListener('click', function(){
    console.log('clicked on toggle')
    document.querySelector('.nav_mobile').style.display = 'block'
})

document.querySelector('#close_menu').addEventListener('click', function(){
    console.log('clicked on close icon')
    document.querySelector('.nav_mobile').style.display = 'none'
})