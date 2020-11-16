const btn = document.querySelector('button')
const sidebar = document.querySelector('.sidebar')
const mainPageData = document.querySelector('.mainPageData');

btn.addEventListener('click',function(){
    sidebar.classList.toggle('sidebarUpdate')
    mainPageData.classList.toggle('mainPageDataUpdate');
})