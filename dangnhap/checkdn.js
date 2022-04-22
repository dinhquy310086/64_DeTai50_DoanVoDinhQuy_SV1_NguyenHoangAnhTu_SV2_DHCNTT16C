
$(document).ready(function(){
  $("#myModal").modal();
  
  //Check tài khoản
  function KTemail(){
    var kt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if($("#email").val()==""){
        $("#tbemail").html("*Bắt buộc nhập !!");
        return false;
    }
    if(!kt.test($("#email").val())){
        $("#tbemail").html("Nhập đúng định dạng mail");
        return false;
    }
    $("#tbemail").html("*");
    return true;
    };

    $("#email").blur(KTemail);

  $("#btndn").click(function() { 
    if(KTemail()==true){
    let email = document.getElementById("email").value
    let pwd = document.getElementById("pwd").value


    let row="<tr><td>"+email+"</td><td>"+pwd+"</td></tr>"
    let myTable = document.getElementById("dangnhap")
    let newRow = myTable.insertRow(myTable.rows.length)
    newRow.innerHTML = row
    $("#myModal").modal("hide");
    return true
    }
    })
})

//Check Mật khẩu
//đăng nhập

