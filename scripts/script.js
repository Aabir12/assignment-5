 const blogPage = document.getElementById('blog-page');

 if (blogPage){
    blogPage.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href  ='/blog.html'
    })
 }
 const homePage = document.getElementById('home-page');

 if (homePage){
    homePage.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href  ='/index.html'
    })
 }

 
 