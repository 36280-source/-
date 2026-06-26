function sendOrder() {

    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;
    let amount = document.getElementById("amount").value;
    let date = document.getElementById("date").value;

    if(name=="" || room=="" || amount=="" || date==""){

        alert("กรุณากรอกข้อมูลให้ครบ");

        return;

    }

    alert("❤️ ขอบคุณค่า\n\nรับออเดอร์เรียบร้อย");

    document.getElementById("name").value="";
    document.getElementById("room").value="";
    document.getElementById("amount").value="";
    document.getElementById("date").value="";

}
