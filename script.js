var list1=[];
var list2=[];
var list3=[];
var orderedlist1=document.querySelector("#orderedlist1");

function function1(){
  var textInput = document.querySelector(".class2").value;
  console.log(textInput);
  var list1=textInput.split(",");
  console.log(list1);       //created string list

  for (i in list1){         // creating integer list
    var z=Number(list1[i]);
    list2.push(z);
    console.log(list2)};
  displayList();

  // list2=list1.sort((a,b)=>a-b);
  //
  // for(i in list2){
  //   list3=[0,i];
  // };

  var var1=Math.max(...list2);
  var var2=Math.min(...list2);
  var var3=list2.indexOf(var2);
  var var4=list2.indexOf(var1);

  list3=[var3,var4];

  console.log(list3);

  document.querySelector(".class3").innerHTML="<p>"+"["+list3+"]"+"</p>";


  return false;

};

function displayList(){
  orderedlist1.innerHTML="";
  for (i in list2){
    orderedlist1.innerHTML += '<li class="li1">'+i+". "+list2[i]+'</li>';
  };
  var x = document.querySelectorAll("li");

  for (let i = 0; i < x.length; i++) {
    x[i].style.display="inline";
    x[i].style.backgroundColor = "pink";
    x[i].style.margin="10px";
    x[i].style.padding="10px";
    x[i].style.borderRadius="15% 15% 15% 15%/20% 20% 20% 20%";


  }
};
