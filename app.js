//
//var list = document.getElementById('list')
//todoitems=[];
//function add(){
//  var a = document.getElementById('item');  
//    var todo = { 
//         title: a.value,
//        createdAt: date,
//        iscompleted: false
//    };
//todoitems.push(todo);
//var li = document.createElement('li')
//var text = document.createTextNode(todoitems[0].title);
//li.appendChild(text);
//
//var para = document.createElement("p")
//var textpara = document.createTextNode(todoitems[0].createdAt)
//para.appendChild(textpara)
//li.appendChild(para);
//
//
//var editbtn = document.createElement('button');
//var textedit = document.createTextNode('edit');
//editbtn.appendChild(textedit)
//li.appendChild(editbtn)
//var  delbtn = document.createElement('button')
//var textdel = document.createTextNode('delete')
//delbtn.appendChild(textdel)
//li.appendChild(delbtn)
//
//}
//
var date;
function today(){

    var dmy = new Date();
    date= dmy.getDate() + "/" + (dmy.getMonth()+1) + "/" + dmy.getFullYear();
} 
 
function add(){
    
 var list = document.getElementById('list')
 var a = document.getElementById('item'); 
 var li = document.createElement('li')
 var text = document.createTextNode(a.value);


 if (a.value == "")
 {
   alert("please enter something in input!")
   list.childNode.innerHTML = ""
 }



 li.appendChild(text);
 var br=document.createElement("br")
 var paragraph= document.createElement("span")
 var dmy = new Date();
 date= "      " + dmy.getDate() + " - " + (dmy.getMonth()+1) + " - " + dmy.getFullYear();
var textparagraph=document.createTextNode(date)
paragraph.appendChild(textparagraph)
li.appendChild(paragraph)
  var editbtn = document.createElement('button')
 var textedit = document.createTextNode('EDIT')
 editbtn.setAttribute("class","btn")
 editbtn.setAttribute("onclick","edititem(this)")
 editbtn.appendChild(textedit)
 li.appendChild(editbtn)
var  delbtn = document.createElement('button')
var textdel = document.createTextNode('DELETE')
delbtn.setAttribute('class','btn')
delbtn.setAttribute("onclick", "deleteitem(this)")
delbtn.appendChild(textdel)
li.appendChild(delbtn)
list.appendChild(li)
a.value = ""
}

function deleteitem(e){
  e.parentNode.remove()
}

function deleteAll(){
  list.innerHTML = ""
}

function edititem(e){
  var  val = e.parentNode.firstChild.nodeValue
  var editValue = prompt("Enter Your Edit Value?",val)
  e.parentNode.firstChild.nodeValue = editValue
}