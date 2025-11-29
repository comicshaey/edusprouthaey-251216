// /static/global-loader.js
// 공통 로더 + 우클릭/복사 방지 우산 스크립트

(function () {

  /* -------------------------------------------------------
     1) disable-copy.js 자동 로드 (우산 스크립트 핵심)
     ------------------------------------------------------- */
  try {
    const host = location.hostname || "";
    const allowed = [
      "edusprouthaey.co.kr",
      "narcolepsyhaeyisking.co.kr",
      "localhost",
      "127.0.0.1"
    ];

    // 허용된 도메인에서만 보호기능 활성
    if (allowed.includes(host)) {

      const s = document.createElement("script");
      s.src = "/static/disable-copy.js?v=1";
      s.defer = true;
      document.head.appendChild(s);

    }
  } catch (_) {}



  /* -------------------------------------------------------
     2) (선택) 페이지 공통 로딩 관련 기능 넣을 자리
        - 필요시 로딩 스피너
        - 전역 이벤트 로그 등
        지금은 비워둠
     ------------------------------------------------------- */

  // 예: 로딩 스피너 준비 시 여기에 구현
  // console.log("global-loader.js loaded");

})();
