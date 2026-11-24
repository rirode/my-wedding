/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "김익재",
    nameEn: "Kim Ik Jae",
    father: "김연광",
    mother: "김기남",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "안주혜",
    nameEn: "An Ju Hye",
    father: "안복준",
    mother: "이연옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-04-24",
    time: "12:30",
    venue: "헤리움 웨딩홀",
    hall: "",
    address: "부산광역시 중앙대로666번길50 더샵센트럴스타 E동 2층",
    tel: "051-943-1004"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://map.kakao.com/?urlX=969363.0000003137&urlY=464705.0000000058&urlLevel=3&itemId=1374996497&q=%ED%97%A4%EB%A6%AC%EC%9B%80%EC%9B%A8%EB%94%A9%ED%99%80&srcid=1374996497&map_type=TYPE_MAP",
    naver: "https://naver.me/GtYdmVub"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김익재", bank: "카카오뱅크", number: "3333-02-1250207" },
      { role: "아버지", name: "김연광", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김기남", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "안주혜", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "안복준", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이연옥", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 김익재 ♥ 신부 안주혜 결혼합니다",
    description: "2027년 4월 24일, 소중한 분들을 초대합니다."
  }
};
