const LOCAL_HREF_PATH = "http://127.0.0.1:5500/";

const avatarUser = document.querySelector("#avatar-user");
const divLogin = document.querySelector(".header-login_btn");

// ? Hiển thị avatar khi đã đăng nhập thành công
if (localStorage.getItem("login")) {
  avatarUser.style.display = "block";
  divLogin.style.display = "none";
} else {
  avatarUser.style.display = "none";
  divLogin.style.display = "block";
}

avatarUser.onclick = function () {
  const confirmLogout = window.confirm("Bạn có muốn đăng xuất !");
  console.log(confirmLogout);
  if (confirmLogout) {
    avatarUser.style.display = "none";
    divLogin.style.display = "block";
    localStorage.removeItem("login");
    window.location.href = `${LOCAL_HREF_PATH}pages/login.html`;
  }
};
