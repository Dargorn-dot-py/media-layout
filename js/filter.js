// filter func
const filterBox = document.querySelectorAll('.update__item');
document.querySelector('nav').addEventListener('click', event => {
   if(event.target.tagName !== 'LI') return false;
   let filterClass = event.target.dataset['f'];
   // console.log(filterClass);
   filterBox.forEach( elem => {
      elem.classList.remove('hide');
      if(!elem.classList.contains(filterClass) && filterClass !== 'all') {
         elem.classList.add('hide');
      }
   })
})
// pink color to #all (JQuarry))
$(".filter li").click(function () {
   $(".filter__item").removeClass("pink");
   $(this).addClass("pink");
});