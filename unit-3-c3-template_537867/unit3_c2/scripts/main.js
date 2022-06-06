
let arr=JSON.parse(localStorage.getItem("user"))||[]
function main(){
    event.preventDefault()
    
    let form=document.getElementById("form");
     
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value
    let address=document.getElementById("address").value
    let amount=document.getElementById("amount").value

    function Product(name,email,address,amount){
        this.name=name;
        this.email=email;
        this.address=address;
        this.amount=amount;
    }

    let prod=new Product(name,email,address,amount);
    console.log(prod)
    
    arr.push(prod);
    console.log(arr);
    localStorage.setItem("user",JSON.stringify(arr))
   
    
}