async function getUsers(){
    try{
    Api = "https://reqres.in/api/users?page=2"
    const output = await fetch(Api);
    const users = await output.json();
    var mainContainer = document.getElementById("demo");
    for (var i = 0; i < users.data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'id: ' + users.data[i].id +
                        '<br> Name: ' + users.data[i].first_name + ' ' + users.data[i].last_name +
                        '<br> Email: '+ users.data[i].email;
        mainContainer.appendChild(div);
    }
    }
    catch(e){
        console.log("Error!!");
        console.log(e);
    }
}
document.getElementById("click").onclick = getUsers;