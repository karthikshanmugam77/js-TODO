const name1=document.getElementById("name");
const emailid=document.getElementById("email");
const addbutton = document.getElementById("cu-action");
let array=[];
let number=null;
let id=1;
function insert()
{
        if(number){
            array=array.map(ar => {

                if(number===ar.id)
                {
                 ar.name=name1.value ;
                  ar.email = emailid.value;
                }
                return ar;
             });
             
            updatefunction(null ,'add');
        }
        else{ 
            obj = {};
                obj.id=id++;
                obj.name= name1.value;
                obj.email = emailid.value;   
                array.push(obj);
            }
    display();
}
function updatefunction(numberno,text){
    number=numberno;
   
    addbutton.innerHTML=text;
}
function edit(objectno){
  const arr=array.find(index=>index.id==objectno);
    name1.value = arr.name;
     emailid.value = arr.email ;
  updatefunction(arr.id,'update')
   // key++;
}
 document.getElementById("cu-action").addEventListener("click", insert);

// let objArray=[];
// let id1=0;
// flag = null;
// val=0;

function reset()
{
    document.getElementById("name").value=''
    document.getElementById("email").value=''    
}
// function getDetails()
// {
//     if(!flag)
//     {
//     const a={};
//     trows='';
//     a.name1 =  document.getElementById("name").value;
//     a.email = document.getElementById("email").value;
//     a.id=++id1;
//     objArray.push(a);
//     display();
//     reset();
//     else
//     {
//         const a={};

//     }
// }
   
// function edit(n)
// {
//     document.getElementById('cu-action').innerHTML='update';
//     objArray.map( objArray => objArray.id===n )
//     {
//         document.getElementById('cu-action').value='update';
//         document.getElementById("name").value = objArray[n-1].name1;
//         document.getElementById("email").value = objArray[n-1].email;
//         delete(n);
//         display();
//         objArray[n-1].name1 =  document.getElementById("name").value;
//         objArray[n-1].email = document.getElementById("email").value;
//     }
// }

function Delete1(n)
{
    array = array.filter( array =>array.id !== n )
    display();
    reset(); 
}
function display()
{
    trows='';
    array.forEach(element =>{
    let newrow =`<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td><button id='edit' style='border:none;background:none;color:blue'; onclick="edit(${element.id})">Edit</button>
                <button id='delete1' onclick="Delete1(${element.id})" style='border:none;background:none;color:blue';>Delete</button></td></tr>`
                trows+=newrow;
    });
    document.getElementById("todo-body").innerHTML=trows;
}

// const name1 =  document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const edit = document.getElementById("edit").value;
// const delete1 = document.getElementById("delete").value;
// const update = document.getElementById('update').value;






