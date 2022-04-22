
$(document).ready(function(){
  $("#myModal").modal();
//Kiem tra ten
  function KTTen(){
    var kt=/^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
    if($("#txtTen").val()==""){
        $("#tbTen").html("*Bắt buộc nhập !!");
        return false;
    }
    if(!kt.test($("#txtTen").val())){
        $("#tbTen").html("*Chữ cái đầu cảu mỗi từ phải viết hoa !!");
        return false;
    }
    $("#tbTen").html("*");
    return true;
    };

    $("#txtTen").blur(KTTen);
//Kiem tra SDT
    function kiemTraSDT() {
        var mauKT= /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#txtSDT").val=="") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#txtSDT").val())) {
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(kiemTraSDT);
//Kiem tra Ngay sinh
    function KiemTraNgaySinh(){
        var ns=new Date(document.getElementById('txtNS').value);
        var today = new Date();
        if (eval(today.getFullYear()-ns.getFullYear()) <= 10){
            $("#tbNS").html("Tuổi phải lớn hơn 10");
            return false;
        }
        else{
            $("#tbNS").html("*");
            return true;
        }
    }
    $("#txtNS").blur(KiemTraNgaySinh);
//Kiem tra Email
    function KTemail(){
        var kt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if($("#txtemail").val()==""){
            $("#tbemail").html("*Bắt buộc nhập !!");
            return false;
        }
        if(!kt.test($("#txtemail").val())){
            $("#tbemail").html("Nhập đúng định dạng mail");
            return false;
        }
        $("#tbemail").html("*");
        return true;
        };

        $("#txtemail").blur(KTemail);
//Kiem tra mat khau
    function KiemTraPassWord(){
        var re = /(?=.*\d).{6,}/;
        if(re.test(document.getElementById('pwd').value.trim()) == false){
            $("#tbpwd").html("*Phải có  chữ, số, ít nhất 6 ký tự");
            return false;
        }
        else{
            $("#tbpwd").html("*");
            return true;
        }
    };
    $("#pwd").blur(KiemTraPassWord);
//Kiem tra lai mat khau
    function KiemTraXacNhanPassWord(){
        if(document.getElementById('repwd').value != 
            document.getElementById('pwd').value) {
                $("#tbrepwd").html("* Phải giống  ô mật khẩu!");
            return false;
        }
        else{
            $("#tbrepwd").html("*");
            return true;
        }
    }
    $("#repwd").blur(KiemTraXacNhanPassWord);

//Them vao trang web
    $("#btnSave").click(function() { 
        if(KTTen() && KTemail()&&KiemTraNgaySinh()&&KiemTraPassWord()&&KiemTraXacNhanPassWord()&&kiemTraSDT()==true){
        let ten = document.getElementById("txtTen").value
        let SDT = document.getElementById("txtSDT").value
        let NS = document.getElementById("txtNS").value
        let email = document.getElementById("txtemail").value
        let pwd = document.getElementById("pwd").value
  

        let row="<tr><td>"+ten+"</td><td>"+SDT+"</td><td>"+NS+"</td><td>"+email+"</td><td>"+pwd+"</td></tr>"
        let myTable = document.getElementById("addRow")
        let newRow = myTable.insertRow(myTable.rows.length)
        newRow.innerHTML = row
        $("#myModal").modal("hide");
        return true
        }
        })

})
