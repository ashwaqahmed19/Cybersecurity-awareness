const tips = [
"Never share your OTP.",
"Use different passwords for every account.",
"Update your software regularly.",
"Do not connect to unknown Wi-Fi.",
"Enable Two-Factor Authentication.",
"Always verify website URLs."
];

function showTip(){

const random=Math.floor(Math.random()*tips.length);

alert(tips[random]);

}

function answer(correct){

const result=document.getElementById("result");

if(correct){
result.innerHTML="✅ Correct! Strong passwords are safer.";
result.style.color="lime";
}
else{
result.innerHTML="❌ Incorrect. Choose a long random password.";
result.style.color="red";
}

}