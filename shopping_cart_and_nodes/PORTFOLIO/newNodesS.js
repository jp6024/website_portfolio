var add = document.getElementById("addNodes");
add.addEventListener("click", addElements);

function addElements(){
    
    var node = document.createElement('a');
    var link = document.createTextNode("SHOPPING CART");
    node.appendChild(link);
    node.href="../products.html";
    node.classList.add("btn" , "btn-primary");
    node.setAttribute('type', 'button');
    document.getElementById("addElements").appendChild(node);


    var node2 = document.createElement('a');
    var link2 = document.createTextNode("NEW NODES");
    node2.appendChild(link2);
    node2.href="index.html";
    node2.classList.add("btn" , "btn-primary");
    node2.setAttribute('type', 'button');
    document.getElementById("addElements").appendChild(node2);
    

    let changeItems = document.querySelectorAll('a');                  
// ADD A CLASS OF COOL TO ALL LIST ITEMS

    let i; 
                                                    
    for (i = 0; i < changeItems.length-3; i++) {            
        changeItems[i].setAttribute('id', 'addNodes');                
    }

    add.removeEventListener("click", addElements);
}