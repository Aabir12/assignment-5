function getElementByIdValue (id){
    return parseFloat(document.getElementById(id).value);
}

function modal (id){
   const modal = document.getElementById(id).showModal();
   return modal
}

function addHistory (cz, location, amount){
    const historyTab = document.getElementById('history-tap') ;
    const insertDiv = document.createElement('div');
    insertDiv.classList.add('border', 'border-zinc-300', 'p-5', 'mb-5', 'rounded-lg');
    //  creat p tag inside the insert div 
    const information = document.createElement('p');
    information.innerText = `${amount.toFixed(2)}Taka is donated for ${cz} at ${location}`;
    // time information 
    const dataInformation = document.createElement('p');
    const timeInformation = new Date();
    dataInformation.innerText = `Date : ${timeInformation}`

    // append the child 
    insertDiv.appendChild(information);
    insertDiv.appendChild(dataInformation);
    historyTab.appendChild(insertDiv);
    

}

 
//  navigate the 2 html file start 
 const blogPage = document.getElementById('blog-page');
 if (blogPage){
    blogPage.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href  ='./blog.html'
         
    })
 }
 const homePage = document.getElementById('home-page');
 if (homePage){
    homePage.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href  ='./index.html'
    })
 }
//  navigate the 2 html file end 

// donate button make manupulate while using add addEventListener  start 

const donateMoney = document.getElementById('btn-donate');
donateMoney.addEventListener('click', function(){
    const amountInput =  getElementByIdValue('doneted-tk-nuwakhali');
    
    if(amountInput<0 || isNaN(amountInput) || typeof amountInput !== 'number'){
        return alert('please make sure that you provide a positive number')
        
    }
     if(amountInput){
        modal('my_modal')
     }
   
    
     
   const nuwakhaliTk=parseFloat(document.getElementById('nuwakhali-tk').innerText);
   const balance=parseFloat(document.getElementById('main-balance').innerText);

   const  currentBalance = balance-amountInput;
   document.getElementById('main-balance').innerText = currentBalance.toFixed(2);

    const nuwakhaliAdding = amountInput + nuwakhaliTk;
    document.getElementById('nuwakhali-tk').innerText = nuwakhaliAdding.toFixed(2);
    document.getElementById('doneted-tk-nuwakhali').value = '';

    // add history 
    addHistory ('flood', 'nowakhali, bangladesh', amountInput)
     
})



// donate button make manupulate while using add addEventListener  end  

 
 