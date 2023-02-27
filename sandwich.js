



function ToggleMenuOFF(){

    const element = document.getElementById('headerMobile');
    element.style.display = 'none';
   
    const menu = document.getElementById('menu');
    menu.style.display = 'block';

    
    const gray = document.getElementById('gray');
    gray.style.display = 'none';


}
function ToggleMenuON(){

    const element = document.getElementById('headerMobile');
    element.style.display = '';

    
    const gray = document.getElementById('gray');
    gray.style.display = '';

    
   
    const menu = document.getElementById('menu');
    menu.style.display = 'none';

}