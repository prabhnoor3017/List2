function List() {
    //creating elemnets
    let ul = document.getElementById("ul1");
    let li = document.createElement("li");
    let p = document.createElement("p");
    let deletebtn = document.createElement("button");
    deletebtn.setAttribute("onclick", "removelist()");
    //creating delete button
    deletebtn.setAttribute("class", "deletebtn");
    deletebtn.innerHTML = "Delete";

    // setting up checbox declaration
    let cbox = document.createElement("input");
    cbox.setAttribute("type", "checkbox");
    cbox.setAttribute("id", "chkbox");
    cbox.setAttribute("onclick", "cfunction()");
    // creating elemets for adding in to the list
    let newItem = document.getElementById("newSub").value;
    let item = document.createTextNode(newSub);
    // appending things
    li.appendChild(cbox);
    li.appendChild(p);
    li.appendChild(deletebtn);
    // function adding new element in to the list
    p.innerHTML = newItem;
    p.setAttribute("id", "newp");
    p.style.display = 'inline-block';
    document.getElementById("ul1").appendChild(li);
    document.getElementById("newSub").value = "";
    // on adding a element audio is played
    document.getElementById("audio").play();

}

// function when 
function removelist() {
    let db = document.getElementsByClassName("deletebtn");
    for (i = 0; i < (db.length); i++) {
        db[i].onclick = function (e) {
            let div = e.target.closest("li");
            div.style.display = "none";
        }
    }
}

function cfunction() {

    let checkBox = document.getElementById("chkbox");
    let listItem = document.getElementById("newp");
    for (j = 0; j < checkBox.length && j < listItem.length; j++) {
        if (checkBox[j].checked) {
            listItem[j].style.textDecoration = "line-through";
        } else {
            listItem[j].style.textDecoration = "none";
        }
    }
}