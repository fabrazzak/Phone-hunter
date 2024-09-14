const fetchDataOnline = async (a)=>{

    const res = await fetch(` https://openapi.programming-hero.com/api/phones?search=${a}`)
    const data= await res.json();
    const phones= data.data;
    displayData(phones);

}

const displayData= (data)=>{
    const loadDataContainer= document.getElementById("load-data-container");
     const showAll= document.getElementById("show-all");
    loadDataContainer.innerHTML=""
    
    const phones= data.slice(0,12);

    if(data.length>12){
       
        showAll.classList.remove("hidden");
    }
    else{
   
        showAll.classList.add("hidden");

    }
    console.log(data.length)

     phones.forEach (phone => {
        const {image,phone_name,slug,brand}=phone;
        console.log(phone)

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
                                <button onclick=(seeMoreDetails(${slug})) class="btn btn-primary">See Details </button>
                            </div>
                        </div>
                    </div>      
       
       
       `
       loadDataContainer.appendChild(divPhone);




     })
}

const loadData=()=>{

    const inputValue= document.getElementById("input-value").value;

    fetchDataOnline(inputValue)
   
}