const fetchDataOnline = async (searText = 'a' , trueFalse)=>{

    const res = await fetch(` https://openapi.programming-hero.com/api/phones?search=${searText}`)
    const data= await res.json();
    const phones= data.data;
    displayData(phones, trueFalse );

}

const displayData= (data,trueFalse)=>{
    const loadDataContainer= document.getElementById("load-data-container");
             const loading= document.getElementById("loading-icon");
     const showAll= document.getElementById("show-all");
    loadDataContainer.innerHTML=""
    let phones= data;
      console.log("amar sonar bangla",trueFalse)


    if(!trueFalse){

          phones= data.slice(0,12);

    }
    
   

  

    if(data.length>12 && trueFalse == false){
       
        showAll.classList.remove("hidden");
    }
    else{
   
        showAll.classList.add("hidden");

    }
    

     phones.forEach (phone => {
        const {image,phone_name,slug,brand}=phone;
       

       const divPhone= document.createElement("div");
       divPhone.classList.add('card','bg-base-100','shadow-xl');
      
       divPhone.innerHTML=`
        <div class="card bg-base-100  shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src="${image}" alt="Shoes"
                                class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Name: ${phone_name}</h2>
                            <p>Brand: ${brand}</p>
                            <div class="card-actions">
                                <button onclick=(seeMoreDetails('${slug}')) class="btn btn-primary">See Details </button>
                            </div>
                        </div>
                    </div>      
       
       
       `
       loadDataContainer.appendChild(divPhone);




     })

    loading.classList.add("hidden") ;
}

const showAllData= ()=>{
    const inputValue= document.getElementById("input-value").value;
     fetchDataOnline(inputValue,true)
}


const displayModalData= async (id)=>{

    const res= await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
    const phone = await res.json();   
  
    const {name, brand,image}=phone.data;
    console.log(phone.data);
    document.getElementById("modal-img").src =image;
    document.getElementById("modal-title").innerText= name;
    document.getElementById("modal-brand").innerText= brand;


   


}


const seeMoreDetails=(slug)=>{

    showModals.showModal();
     displayModalData(slug)
}





const loadData=()=>{

    const inputValue= document.getElementById("input-value").value;
    const loading= document.getElementById("loading-icon");
    loading.classList.remove("hidden")

    fetchDataOnline(inputValue,false)

   
}

loadData( fetchDataOnline());