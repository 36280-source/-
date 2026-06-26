// admin.js

// แสดงข้อมูลทั้งหมดจาก Firestore
db.collection("orders")
.orderBy("createdAt","desc")
.onSnapshot((snapshot)=>{

    let html="";

    snapshot.forEach((doc)=>{

        let data=doc.data();

        html += `

        <tr>

            <td>${data.name}</td>

            <td>${data.room}</td>

            <td>${data.amount}</td>

            <td>${data.date}</td>

            <td>

                ${
                    data.done
                    ? "✅ ทำแล้ว"
                    : `<button class="done"
                        onclick="finishOrder('${doc.id}')">
                        ทำแล้ว
                       </button>`
                }

            </td>

        </tr>

        `;

    });

    document.getElementById("orderTable").innerHTML = html;

});


// เปลี่ยนสถานะเป็นทำแล้ว
function finishOrder(id){

    db.collection("orders")
    .doc(id)
    .update({

        done:true

    });

}
