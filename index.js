// let users = [
//     {
//         userid : 1,
//         name : "abc",
//         email : "abc@gmail.com",
//         password : 'Abc@123',
//         role : 'admin'
//     }
//     // {
//     //     userid : 2,
//     //     name : "smit",
//     //     email : "smit@gmail.com",
//     //     password : 'Smit@123',
//     //     role : 'user'
//     // },
//     // {
//     //     userid : 3,
//     //     name : "krish",
//     //     email : "krish@gmail.com",
//     //     password : 'Krish@123',
//     //     role : 'user'
//     // },
//     // {
//     //     userid : 4,
//     //     name : "xyz",
//     //     email : "xyz@gmail.com",
//     //     password : 'Xyz@123',
//     //     role : 'user'
//     // }
// ]
let data=[
    {
        userid : 1,
        name : "abc",
        email : "abc@gmail.com",
        password : "Abc@123",
        role : "Admin"
    }
];
const save = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;

    if(cpassword == password){
        let obj = {
            userid : Math.floor(Math.random( ) * 10000),
            name : name,
            email : email,
            password : password,
            role : "User"
        }

        if(localStorage.getItem('user') === null || localStorage.getItem('user') === undefined){
            data.push(obj);
            localStorage.setItem('user',JSON.stringify(data));
        }else{
            let val = JSON.parse(localStorage.getItem('user'));
            val.push(obj);
            localStorage.setItem('user',JSON.stringify(val));
        }

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('cpassword').value = "";

        window.location.href = "login.html"
    }else{
        alert("Password must be same.");
    }
}


const login = () => {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    let role = document.getElementById('role').value;
    let ans = JSON.parse(localStorage.getItem('user'));

    let value = ans.filter((val)=>{
        return val.email == email;
    })
    
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
document.getElementById('check-otp').style.display = "block";
document.getElementById('fade-otp').style.display = "block";

const verify = () => {
    let vmail = document.getElementById('verify-email').value;
    let ans = JSON.parse(localStorage.getItem('user'));
    let value = ans.filter((val)=>{
        return val.email == vmail;
    })
    
    if(value.length == 1){
        let otp = Math.floor(Math.random() * 10000);
        alert("Your Otp is "+otp);
        document.getElementById('fade-otp').style.display = "block";
        document.getElementById('check-otp').style.display = "block";
        document.getElementById('send-otp').style.display = "none";
        let obj = {
            otp : otp
        }
        let sol = value;
        sol.push(obj);
        localStorage.setItem('otp',JSON.stringify(sol));
    }else{
        alert("E-mail not found")
    }
}

const checkOtp = () => {
    let otp = document.getElementById('verify-otp').value;
    let ans = JSON.parse(localStorage.getItem('otp'));
    let value = ans.filter((val)=>{
        return val.otp == otp;
    })
    
    if(value.length == 1){
        window.location.href = "new-password.html"
    }else{
        alert("Incorrect Otp");
    }
}