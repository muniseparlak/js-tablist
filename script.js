let i;
let link = document.getElementsByClassName('link');
let tabcontent = document.getElementsByClassName('tabcontent');



function showArticle(e, component){
 
    for( i = 0 ; i < tabcontent.length; i++ ){
        tabcontent[i].style.display  = 'none'
    }
    for( i = 0 ; i < link.length; i++ ){
       link[i].className =  link[i].className.replace('active', '')
    }
   
    document.getElementById(component).style.display = "block";
    e.currentTarget.className += " active";

}
