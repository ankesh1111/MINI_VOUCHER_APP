

let purchase=JSON.parse(localStorage.getItem("purchase"))||[];

console.log(purchase);

let  purchased_vouchers=document.getElementById("purchased_vouchers");

display(purchase);

function display(purchase){

    purchase.forEach(function(){

        let image=document.createElement("img");
        image.src=ele.image;

        let name=document.createElement("p");
        name.innerText=ele.name;

        let price=document.createElement("p");
        price.innerText=ele.price;

        let btn=document.createElement("button");
        btn.innerText="Balance";
        btn.addEventListener("click",function(){
            voucher(ele)
        })
        purchased_vouchers.append(image,name,price,btn)

    })
}

function voucher(){
    window.location.href="index.html"
}