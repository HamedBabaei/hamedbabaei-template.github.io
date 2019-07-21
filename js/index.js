
function Header(){
    let links = ["#", "#about", "#education", "#research", "#publication", "#skills", "#connect"];
    let headers = ["Home", "About", "Education", "Research", "Publication", "Skills", "Connect"];
    for(let i = 0 ; i < links.length ; i ++){
        document.write("<li class='nav-item padding-right '>");
        document.write("<a class='nav-link text-white' href='" + links[i] + "'>" + headers[i] + "</a>" );
        document.write("</li>");
    }
}

jQuery(document).ready( function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= 60){
            $("header").addClass('secondary');
        }
        else{
            if($("header").hasClass('secondary')){
                $("header").removeClass('secondary');
            }
        }
    });
});