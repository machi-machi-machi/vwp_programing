// ==========================
// アカウント管理
// ==========================
const users = [
  { id: "machida",   password: "20011114" },
  { id: "kurosaki",  password: "20011016" },
  { id: "sekiba",    password: "20010924" },
  { id: "sekiba",    password: "20010925" },
  { id: "sekiba",    password: "20010926" },
  { id: "sekiba",    password: "20010927" },
  { id: "kato",      password: "20010905" },
  { id: "watanabe",  password: "20010826" },
  { id: "kishi",     password: "20010705" },
  { id: "matsumoto", password: "20020216" },
  { id: "yamanaka",  password: "20011108" },
];

// ==========================
// ログイン判定
// ==========================
const form = document.getElementById("loginForm");
const message = document.getElementById("loginMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  const isValid = users.some(user =>
    user.id === userId && user.password === password
  );

  if (isValid) {
    // ログイン成功
    const box = document.querySelector(".login-box");
    box.style.opacity = "0";
    box.style.transform = "scale(0.9)";

    setTimeout(() => {
      location.href = "dashBorad.html";
    }, 400);

  } else {
    // ログイン失敗
    message.textContent = "ユーザーIDまたはパスワードが違います";
    message.style.color = "#ff6b6b";

    // 揺らす
    const box = document.querySelector(".login-box");
    box.style.animation = "shake 0.4s";

    box.addEventListener("animationend", () => {
      box.style.animation = "";
    }, { once: true });
  }
});
