const showHome = () => {
    document.getElementById("Homepage").style.display = "block";
    document.getElementById("Productpage").style.display = "none";
    document.getElementById("Locationpage").style.display = "none";
    document.getElementById("Newspage").style.display = "none";
    document.getElementById("GuestBookpage").style.display = "none";
    document.getElementById("RegisterPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";


    document.getElementById("Home").style.backgroundColor = "grey";
    document.getElementById("Products").style.backgroundColor = "transparent";
    document.getElementById("Location").style.backgroundColor = "transparent";
    document.getElementById("News").style.backgroundColor = "transparent";
    document.getElementById("GuestBook").style.backgroundColor = "transparent";
    document.getElementById("Register").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";

}
const showProduct = () => {
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("Productpage").style.display = "block";
    document.getElementById("Locationpage").style.display = "none";
    document.getElementById("Newspage").style.display = "none";
    document.getElementById("GuestBookpage").style.display = "none";
    document.getElementById("RegisterPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";


    document.getElementById("Home").style.backgroundColor = "transparent";
    document.getElementById("Products").style.backgroundColor = "grey";
    document.getElementById("Location").style.backgroundColor = "transparent";
    document.getElementById("News").style.backgroundColor = "transparent";
    document.getElementById("GuestBook").style.backgroundColor = "transparent";
    document.getElementById("Register").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";


    const fetchProduct = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/items", {
        headers: {
            "Accept": "application/json"

        },
    });
    const streamProduct = fetchProduct.then((response) => response.json());
    streamProduct.then((productData) => {
        for(let i = 0; i<productData.length; i++){
            console.log(productData[i]);
            let item = productData[i];
            let p1 = document.createElement('div');
            let p2 = document.createElement("input");
            p2.setAttribute("type","submit");
            p2.setAttribute("value", "Buy Now");
            p2.setAttribute("onclick", "purchase()");
            p1.innerHTML=
                
                "<div class = 'item'><div><img src='http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=" + item.ItemId + "'/></div>" +
                "<div class='names'>" +"Name:" +item.Title + "</div>" + "<br/>" +
                "<div class='price'>" + "Price:$"+item.Price + "</div>" + "<br/>" +
                "<div class='origin'>" + "Origin:"+item.Origin + "</div>" + "<br/>" +
                "<div class='type'>" + "Type:"+item.Type + "</div></div>"
                
            document.getElementById("Productlist").appendChild(p1);
            p1.appendChild(p2);
        }

    }

    );
    
    
    






}
const showLocation = () => {
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("Productpage").style.display = "none";
    document.getElementById("Locationpage").style.display = "block";
    document.getElementById("Newspage").style.display = "none";
    document.getElementById("GuestBookpage").style.display = "none";
    document.getElementById("RegisterPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";


    document.getElementById("Home").style.backgroundColor = "transparent";
    document.getElementById("Products").style.backgroundColor = "transparent";
    document.getElementById("Location").style.backgroundColor = "grey";
    document.getElementById("News").style.backgroundColor = "transparent";
    document.getElementById("GuestBook").style.backgroundColor = "transparent";
    document.getElementById("Register").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";
}

const showNews = () => {
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("Productpage").style.display = "none";
    document.getElementById("Locationpage").style.display = "none";
    document.getElementById("Newspage").style.display = "block";
    document.getElementById("GuestBookpage").style.display = "none";
    document.getElementById("RegisterPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";


    document.getElementById("Home").style.backgroundColor = "transparent";
    document.getElementById("Products").style.backgroundColor = "transparent";
    document.getElementById("Location").style.backgroundColor = "transparent";
    document.getElementById("News").style.backgroundColor = "grey";
    document.getElementById("GuestBook").style.backgroundColor = "transparent";
    document.getElementById("Register").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";


    const fetchNews = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/news",
        {
            headers: {
                "Accept": "application/json"

            },
        });
    const streamNews = fetchNews.then((response) => response.json());
    streamNews.then((data) => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);

            let newsItem = data[i];
            let nf = document.createElement('div');
            nf.innerHTML =
                "<a href='" + newsItem.linkField + "'>" +
                "<img src='" + newsItem.enclosureField.urlField + "'/>" +
                "</a>" +
                "<h1>" + newsItem.titleField + "</h1>" + "<br/>" +
                "<div>" + newsItem.pubDateField + "</div>" + "<br/>" +
                "<div>" + newsItem.descriptionField + "</div>" + "<br/>"
            document.getElementById("Newslist").appendChild(nf);
        }


    });






}
const showGuestbook = () => {
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("Productpage").style.display = "none";
    document.getElementById("Locationpage").style.display = "none";
    document.getElementById("Newspage").style.display = "none";
    document.getElementById("GuestBookpage").style.display = "block";
    document.getElementById("RegisterPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";


    document.getElementById("Home").style.backgroundColor = "transparent";
    document.getElementById("Products").style.backgroundColor = "transparent";
    document.getElementById("Location").style.backgroundColor = "transparent";
    document.getElementById("News").style.backgroundColor = "transparent";
    document.getElementById("GuestBook").style.backgroundColor = "grey";
    document.getElementById("Register").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";


    const commentList = document.getElementById("Comment");
    const fetchComment = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/htmlcomments");
    const streamComment = fetchComment.then((response) => response.text());
    streamComment.then((commentData)=>{
        let c1 = document.createElement("div");
        c1.innerHTML=commentData;

        commentList.appendChild(c1);

        
    });

    
}
window.onload = showHome;

//function filter() {
//    let input = document.getElementById("productSearch");
//    let inputlow = input.value.toLowerCase();
//    let allItem = document.getElementById("Productlist")
//    let display = document.getElementsByClassName("item");

//    for (let i =0; i<display.length; i++){
//        let item = display[i]
//        let item1 = item.getElementsByClassName("names")[0].innerHTML.toLowerCase();
//        let item2 = item.getElementsByClassName("price")[0].innerHTML.toLowerCase();
//        let item3 = item.getElementsByClassName("origin")[0].innerHTML.toLowerCase();
//        let item4 = item.getElementsByClassName("type")[0].innerHTML.toLowerCase()
//        if (item1.indexOf(inputlow)>-1 ){
//            display[i].style.display = "";
//        }
//        else if (item4.indexOf(inputlow)>-1){
//            display[i].style.display = "";
//        }
//        else if (item3.indexOf(inputlow)>-1){
//            display[i].style.display = "";
//        }
//        else{
//            display[i].style.display = "none";
//        }
//    }
//}

function filter2(){
    const productlist = document.getElementById("Productlist");
    productlist.innerHTML= ' '

    let input = document.getElementById("productSearch");
    let inputValue = input.value;
    const fetchProductSearch = fetch( "http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/search?term=" +input.value, {
        headers: {
            "Accept": "application/json"

        },
    });
    const streamProductSearch = fetchProductSearch.then((response) => response.json());
    streamProductSearch.then((productData) => {
        for(let i = 0; i<productData.length; i++){
            console.log(productData[i]);
            let item = productData[i];
            let p1 = document.createElement('div');
            let p2 = document.createElement("input");
            p2.setAttribute("type","submit");
            p2.setAttribute("value", "Buy Now");
            p2.setAttribute("onclick", "purchase()");
            p1.innerHTML=
                
                "<div class = 'item'><div><img src='http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=" + item.ItemId + "'/></div>" +
                "<div class='names'>" +"Name:" +item.Title + "</div>" + "<br/>" +
                "<div class='price'>" + "Price:$"+item.Price + "</div>" + "<br/>" +
                "<div class='origin'>" + "Origin:"+item.Origin + "</div>" + "<br/>" +
                "<div class='type'>" + "Type:"+item.Type + "</div></div>"
                
            productlist.appendChild(p1);
            p1.appendChild(p2);
        }
    })




}

//function getComment(){
   // const commentList = document.getElementById("Comment");
   // const fetchComment = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/htmlcomments", {
    //    headers: {
         //   "Accept": "application/json"

    //    }, 
   // });
//     const streamComment = fetchComment.then((response) => response.json());
//     streamComment.then((commentData)=>{
//         for(let i = 0; i<commentData.length; i++){
//             console.log(commentData[i]);
//         }
//     })
// }

function postComment(){

    const comment = document.getElementById("Comment");
    
    let input = document.getElementById("yourName").value;
    let commentInput = document.getElementById("newComment").value;
    const fetchPost = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/comment?name="+ input,{
        headers: {
            "Content-Type":'application/json',
        },
        method:"POST",
        body:JSON.stringify(commentInput)
    });
    const streamPost = fetchPost.then((response) => response.text());


    streamPost.then((Data)=>{

        document.getElementById("yourName").value=' ';
        document.getElementById("newComment").value=' ';
        comment.innerHTML=' ';
        const fetchComment = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/htmlcomments");
        const streamComment = fetchComment.then((response) => response.text());
        streamComment.then((Data)=>{
        let c1 = document.createElement("div");
        c1.innerHTML=Data;

        comment.appendChild(c1);

        
    });


        

        
    });

}

const showRegister = () => {
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("Productpage").style.display = "none";
    document.getElementById("Locationpage").style.display = "none";
    document.getElementById("Newspage").style.display = "none";
    document.getElementById("GuestBookpage").style.display = "none";
    document.getElementById("RegisterPage").style.display = "block";
    document.getElementById("loginPage").style.display = "none";


    document.getElementById("Home").style.backgroundColor = "transparent";
    document.getElementById("Products").style.backgroundColor = "transparent";
    document.getElementById("Location").style.backgroundColor = "transparent";
    document.getElementById("News").style.backgroundColor = "transparent";
    document.getElementById("GuestBook").style.backgroundColor = "transparent";
    document.getElementById("Register").style.backgroundColor = "grey";
    document.getElementById("Login").style.backgroundColor = "transparent";
}






function register(){
    const register = document.getElementById("registerBox");
    let input1 = document.getElementById("username").value;
    let input2 = document.getElementById("password").value;
    let input3 = document.getElementById("address").value;
    const fetchUser = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/register",{
        headers: {
            "Content-Type":'application/json',
        },
        method:"POST",
        body:JSON.stringify({
            Address: input3,
	        Name: input1,
	        Password: input2
        
        })
    });
    const streamUser = fetchUser.then((response)=>response.json());
    streamUser.then((Data)=>{
        alert(Data);
    });
}

function purchase(){
    const xhr = new XMLHttpRequest();
    const web = "http://redsox.uoa.auckland.ac.nz/dsa/Service.svc/buy?id=";
    xhr.open("GET", web, true, "user", "password"); xhr.withCredentials = true;
    xhr.onload = () =>{
        const p1 = document.getElementById("Productlist");
        p1.innerHTML = xhr.responseText;
    }
    xhr.send(null);
    // const fetchBuy = fetch("http://redsox.uoa.auckland.ac.nz/dsa/Service.svc/buy?id=",{
    //     headers: new Headers ({
    //         'Authorization': 'Basic ' + btoa("user:pass"),
    //         'Content-Type': 'application/json; charset=utf-8'
    //     }),
    //     credentials: 'include',
    //     mode: 'no-cors',
    //     method: 'GET',
    //     redirect: 'follow'
        
    // });
    // const streamBuy = fetchBuy.then((response)=>response.text());
    // streamBuy.then((data)=>{
    //      console.log(data);
    //      alert(data);
    //      showLogin();
    // });
}

const showLogin =() =>{
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("Productpage").style.display = "none";
    document.getElementById("Locationpage").style.display = "none";
    document.getElementById("Newspage").style.display = "none";
    document.getElementById("GuestBookpage").style.display = "none";
    document.getElementById("RegisterPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";


    document.getElementById("Home").style.backgroundColor = "transparent";
    document.getElementById("Products").style.backgroundColor = "transparent";
    document.getElementById("Location").style.backgroundColor = "transparent";
    document.getElementById("News").style.backgroundColor = "transparent";
    document.getElementById("GuestBook").style.backgroundColor = "transparent";
    document.getElementById("Register").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "grey";

}

function login(){
    const fetchLogin = fetch("http://redsox.uoa.auckland.ac.nz/dsa/Service.svc/user",{
         headers: new Headers ({
             'Authorization': 'Basic ' + btoa("user:pass"),
             'Content-Type': 'application/json; charset=utf-8'
         }),
         credentials: 'include',
         mode: 'no-cors',
         method: 'GET',
         redirect: 'follow'
        
     });
     const streamLogin = fetchLogin.then((response)=>response.text());
     streamLogin.then((data)=>{
          console.log(data);
          alert(data);
     });
    // const xhr = new XMLHttpRequest();
    // const web = "http://redsox.uoa.auckland.ac.nz/dsa/Service.svc/id";
    // xhr.open("GET", web, true, "user", "password"); xhr.withCredentials = true;
    // xhr.onload = () =>{
    //     const p1 = document.getElementById("loginBox");
    //     p1.innerHTML = xhr.responseText;
    // }
    // xhr.send(null);

}
