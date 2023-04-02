// Tạo 1 mãng trống để thêm các task vào
var toDoList = [];
function addTask() {
  // Lấy giá trị của tiêu đề
  var titletask = document.getElementById("title").value;
  // Lấy giá trị của mô tả
  var destask = document.getElementById("des").value;
  // Nếu giá trị của mô tả > 20 và giá trị của tiêu để lớn hơn 5 thì thực hiên thêm giá trị tiêu để vào key title và giá trị mô tả vào key name
  if (destask.length > 20 && titletask.length > 5) {
    toDoList.unshift({
      title: titletask,
      name: destask,
    });
    // Thực hiện renderTask()
    renderTask();
  } else {
    // Nếu giá trị của mô tả < 20 và giá trị của tiêu để < 5 thì thực hiên thông báo người dùng nhập lại!
    alert("Vui lòng nhập tiêu đề lớn hơn 5 ký tự và mô tả lớn hơn 20 ký tự!");
  }
  // Reset lại giá trị tiêu đề
  document.getElementById("title").value = "";
  // Reset giá trị mô tả
  document.getElementById("des").value = "";
}
function renderTask() {
  // Khai báo task = chuỗi rỗng
  let task = "";
  // Duyệt qua phần tử của mãng toDoList và thêm các giá trị của phần tử vào thẻ <li>
  toDoList.map(function (item, index) {
    task += `<div class="listTask">
            <div class="content">
                <li>${index + 1}</li>
                <li class="tit">${item.title}</li>
                <li>${item.name}</li>
                <div class="btn-task">
                    <button onclick="deleteTask(${index})" class="delete">Delete</button>
                    <input class="edit" value="Edit" type="button" onclick="editTask(${index})">
                </div>
            </div>
            <hr></hr>
            </div>`;
  });
  // Thêm nội dung của task vào thẻ <ul>
  document.querySelector("ul").innerHTML = task;
}
function deleteTask(index) {
  // Functione deleteTask lây vị trí của mảng và xoá bắt đầu tự vị trí đấy xoá 1 phần tử
  toDoList.splice(index, 1);
  // Hiển thị lại các Task
  renderTask();
}
function editTask(index) {
  // Lấy value của tiêu đề trong danh sách bằng title của toDoList tại vị trí index (Vị trí của phần tử)
  document.getElementById("title").value = toDoList[index].title;
  // Lấy value của mô tả trong danh sách bằng name của toDoList tại vị trí index (Vị trí của phần tử)
  document.getElementById("des").value = toDoList[index].name;
  console.log(index);
  // Thực hiện xoá Task bắt đầu từ vị trí của phần tử ấy và xoá 1 phần tử
  toDoList.splice(index, 1);
}