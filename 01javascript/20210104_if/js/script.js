var id,password;
id = prompt("아이디 입력");

if( id == "admin"){
	//document.write("관리자입니다.");
	location.href = "login.html"
}else{
	//document.write("관리자가 아닙니다.");
	location.href = "error.html"
}