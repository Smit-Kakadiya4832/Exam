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

// document.getElementById('check-otp').style.display = "block";
// document.getElementById('fade-otp').style.display = "block";

// const verify = () => {
//     let vmail = document.getElementById('verify-email').value;
//     let ans = JSON.parse(localStorage.getItem('user'));
//     let value = ans.filter((val)=>{
//         return val.email == vmail;
//     })
    
//     if(value.length == 1){
//         let otp = Math.floor(Math.random() * 10000);
//         alert("Your Otp is "+otp);
//         document.getElementById('fade-otp').style.display = "block";
//         document.getElementById('check-otp').style.display = "block";
//         document.getElementById('send-otp').style.display = "none";
//         let obj = {
//             otp : otp
//         }
//         let sol = value;
//         sol.push(obj);
//         localStorage.setItem('otp',JSON.stringify(sol));
//     }else{
//         alert("E-mail not found")
//     }
// }

// const checkOtp = () => {
//     let otp = document.getElementById('verify-otp').value;
//     let ans = JSON.parse(localStorage.getItem('otp'));
//     let value = ans.filter((val)=>{
//         return val.otp == otp;
//     })
    
//     if(value.length == 1){
//         window.location.href = "new-password.html"
//     }else{
//         alert("Incorrect Otp");
//     }
// }