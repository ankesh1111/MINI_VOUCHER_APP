
let purchase=document.getElementById("voucher_list")
async function wallet(){
    try{
    

        
        let res=await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);

        let data=await res.json();

        data=data[0].vouchers
        console.log(data)
 
        append(data)

       
       
    }catch(err){
        console.log(err)
    }
}
 wallet()
 
function append(data){
    data.forEach(function(ele){
        let div=document.createElement("div");
     
        let image=document.createElement("img");
        image.src=ele.image;
  
        let name=document.createElement("h2");
        name.innerText=ele.name;
  
        let price=document.createElement("h2");
        price.innerText=ele.price;
  
        let btn=document.createElement("button");
        btn.innerText="Buy";
        btn.setAttribute("class","buy_voucher");
        btn.addEventListener("click",function(){
            purchase(ele)
        })
  
        div.append(image,name,price,btn);
  
        voucher_list.append(div);
        
    })
}

let voucherArr=[];
function Purchase(ele){
    voucherArr.push(ele);
    localStorage.setItem("purchase",JSON.stringify(voucherArr));
    window.location.href="purchase.html"
}