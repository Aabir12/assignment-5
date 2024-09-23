function getElementByIdValue (id){
    return parseFloat(document.getElementById(id).value);
}


 
//  navigate the 2 html file start 
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
//  navigate the 2 html file end 

// donate button make manupulate while using add addEventListener  start 

const donateMoney = document.getElementById('btn-donate');
donateMoney.addEventListener('click', function(){
    const amountInput =  getElementByIdValue('doneted-tk-nuwakhali');
    
    
     
   const nuwakhaliTk=parseFloat(document.getElementById('nuwakhali-tk').innerText);
   const balance=parseFloat(document.getElementById('main-balance').innerText);

   const  currentBalance = balance-amountInput;
   document.getElementById('main-balance').innerText = currentBalance.toFixed(2);

    const nuwakhaliAdding = amountInput + nuwakhaliTk;
    document.getElementById('nuwakhali-tk').innerText = nuwakhaliAdding.toFixed(2);


     
    document.getElementById('doneted-tk-nuwakhali') = '';
     

     

     
})



// donate button make manupulate while using add addEventListener  end  

 
 