// webRequest로 모든 요청을 감시해서 Authorization 헤더를 저장
chrome.webRequest.onBeforeSendHeaders.addListener(
  details => {
    for (const header of details.requestHeaders) {
      if (header.name.toLowerCase() === "authorization") {
        // “Bearer ” 접두사 제거하고 저장
        const token = header.value.replace(/^Bearer\s+/i, "");
        chrome.storage.local.set({ token });
        break;
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["requestHeaders" /*, "extraHeaders"*/]
);
// 참고: "extraHeaders" 옵션은 Manifest V3에서만 사용 가능하며, Manifest V2에서는 제거해야 함.
