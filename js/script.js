
const table = document.querySelector("#table-body");

const form = document.querySelector(".form-top");

const inptName = document.querySelector("#name");
const inptEmail = document.querySelector("#email");
const inpttel = document.querySelector("#tel");

const center = document.querySelector(".center");

const inptBtnAdd = document.querySelector("#add");
const inptBtnUpdate = document.querySelector("#Update");

const alertEmail = document.querySelector(".alert");

const disabledOrAble = () =>{
  const data = table;
   const buttonAdd = data.querySelectorAll(".edit")
  buttonAdd.forEach((btn) =>{
    btn.removeAttribute("disabled");
    btn.classList.add("abled")
  })
  
 
}

const CleanInputs = () =>{

  if(inptName.value != null || inptEmail.value != null || inpttel.value != null){
      inptName.value = "";
      inptEmail.value = "";
      inpttel.value = "";

      }
  inptName.focus();
  
  
}


const inputValues = (inptValueName, inptValueEmail, inptValueTel) => {
  const dataBases = table;
  const row = dataBases.querySelector("tr");
  const ids = dataBases.querySelectorAll(".id");
  const name = dataBases.querySelectorAll(".name");
  const email = dataBases.querySelectorAll(".email");
  const tel = dataBases.querySelectorAll(".tel");
  const edits_ = dataBases.querySelectorAll(".edit");
  const delete_ = dataBases.querySelectorAll(".delete");
 
let contador;
for(contador = 0; contador < ids.length ; contador ++){
    ids[contador].innerHTML = [contador];
}

name.forEach((n) => {
  if(n.innerHTML === ""){
    n.innerHTML += inptValueName;
  }else{
    n.innerHTML += "";
  }
  
});
email.forEach((e) => {
  if(e.innerHTML === ""){
    e.innerHTML += inptValueEmail;
  }else{
    e.innerHTML += "";
  }
});
tel.forEach((t) => {
  if(t.innerHTML === ""){
    t.innerHTML += inptValueTel;
  }else{
    t.innerHTML += "";
  }
  
});


delete_.forEach((d) =>{
  d.addEventListener("click", (e) =>{
    const target = e.target;
    const parentElement = target.parentElement.parentElement;
    parentElement.remove();
    for(contador = 0; contador < ids.length ; contador --){
      ids[contador].innerHTML = [contador];
  }

 


   
  });
})


row.innerHTML = "";

 
}

const updateRow = () =>{
const dataRow = table;
 const edits = dataRow.querySelectorAll(".edit");
 disabledOrAble();
 edits.forEach((edit) =>{
  edit.addEventListener("click" , (e)=>{
  CleanInputs();
  const target = e.target;
  const parentElement = target.parentElement.parentElement;
    console.log(parentElement);
  const namesUpdate = parentElement.querySelectorAll(".name");
  const emailsUpdate = parentElement.querySelectorAll(".email")
  const tellsUpdate = parentElement.querySelectorAll(".tel")

   namesUpdate.forEach((nameUpdate) =>{
   if(nameUpdate.innerHTML == nameUpdate.innerHTML){
      nameUpdate.innerHTML = inptName.value;
   }
   })
   emailsUpdate.forEach((emailUpdate) =>{
    if(emailUpdate.innerHTML == emailUpdate.innerHTML){
       emailUpdate.innerHTML = inptEmail.value;
    }
    })
    tellsUpdate.forEach((tellUpdate) =>{
      if(tellUpdate.innerHTML == tellUpdate.innerHTML){
         tellUpdate.innerHTML = inpttel.value;
      }
      })
 
 
  
  })
 })
}

const createRow = () => {

  const row = document.createElement("tr");
  const dataroId = document.createElement("td")
  dataroId.classList.add("id");
  const datarowName = document.createElement("td")
  datarowName.classList.add("name");

  const datarowEmail = document.createElement("td")
  datarowEmail.classList.add("email");

  const datarowNumber = document.createElement("td")
  datarowNumber.classList.add("tel");
  
  // creating container the buttons
  const tdContainerButtons = document.createElement("td");
  tdContainerButtons.classList.add("flex")
  
  // creating the buttons
  const buttonEdit = document.createElement("button");
   buttonEdit.classList.add("edit","disabled");
   buttonEdit.setAttribute("disabled", "");
   buttonEdit.innerText = "Edit";

   const buttonDelete = document.createElement("button");
   buttonDelete.classList.add("delete");
   buttonDelete.innerText = "Delete"

  row.appendChild(dataroId);
  row.appendChild(datarowName);
  row.appendChild(datarowEmail);
  row.appendChild(datarowNumber);

  tdContainerButtons.appendChild(buttonEdit)
  tdContainerButtons.appendChild(buttonDelete)
  row.appendChild(tdContainerButtons);

  table.appendChild(row);

  // CleanInputs(); 
  
}


form.addEventListener("submit" , (e) =>{
  e.preventDefault();

  const inptValueName = inptName.value;
  const inptValueEmail = inptEmail.value;
  const inptValueTel = inpttel.value;
  
  if(!(inptValueName || inptValueEmail  || inptValueTel)){
  return;
  }
 inputValues(inptValueName,inptValueEmail,inptValueTel);

})


inptBtnAdd.addEventListener("click", ()=>{
  if(!(inptName.value || inptEmail.value || inpttel.value)){
    return;
    }else if(!inptEmail.value.includes("@")){
    alertEmail.innerHTML = "Insira @";
    }else{
      alertEmail.innerHTML = "";
      createRow();
    }
})


inptBtnUpdate.addEventListener("click", ()=>{
  if(!(inptName.value || inptEmail.value || inpttel.value)){
    return;
    }else if(!inptEmail.value.includes("@")){
    alertEmail.innerHTML = "Insira @";
    }else{
      alertEmail.innerHTML = "";
      updateRow();
    }
  
  })
  


