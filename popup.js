document.addEventListener("DOMContentLoaded", () => {
  // 저장된 토큰을 불러와서 input에 표시
  chrome.storage.local.get("token", ({ token }) => {
    if (token) document.getElementById("token").value = token;
  });
  // 복사 버튼 동작
  document.getElementById("copyBtn").addEventListener("click", () => {
    const input = document.getElementById("token");
    input.select();
    document.execCommand("copy");
  });
});
