// Xử lý gửi form

document.getElementById("userForm");
document.addEventListener("submit", function (e) {
  e.preventDefault();

  // Lấy dữ liệu từ form
  const formData = new FormData(this);

  // Gửi dữ liệu đến Google Apps Script (sẽ cập nhật URL sau)
  fetch(
    "https://script.google.com/macros/s/AKfycbytUaAzQqsisctICQYAf5pqNRRAk7AdQVNZ1mFTu9bj3Gp6TaUglk-r5OhO2lop4RTa/exec",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      alert("Gửi thông tin thành công!");
      this.reset(); // Xóa dữ liệu form sau khi gửi
    })
    .catch((error) => {
      console.error("Lỗi:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    });
});
