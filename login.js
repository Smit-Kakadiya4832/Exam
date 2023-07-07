const save = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;
    let ans = JSON.parse(localStorage.getItem('Admin'));
    
    if(value.length == 1){
       if(value[0].password == password){
            if(value[0].role == role){
                window.location.href = "dashboard.html"
                localStorage.setItem('userlogin',JSON.stringify(value));
            }else{
                alert("You cannot login as "+role);
            }
       }else{
            alert("Incorrect Password");
       }
    }else{
        alert("E-mail not found");
    }
}



