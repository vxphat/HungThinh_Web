// Lấy phần tử header
const header = document.querySelector("header");
// Biến lưu vị trí cuộn trước đó
let lastScroll = 0;

window.addEventListener("scroll", () => {
  // Lấy vị trí cuộn hiện tại
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 0) {
    // Cuộn xuống: ẩn header
    header.classList.add("header-hidden");
  } else if (currentScroll < lastScroll) {
    // Cuộn lên 1 nấc: hiện header
    header.classList.remove("header-hidden");
  }

  // Cập nhật vị trí cuộn trước đó
  lastScroll = currentScroll;
});
