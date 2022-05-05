import 청귤마켓 from "../assets/project/청귤마켓.png";
import 회상 from "../assets/project/회상.png";

export const projectMap = (number) => {
  number = number % 2 === 0 ? number / 2 : Math.floor(number / 2) + 1;
  const newArray = [];
  for (let i = 0; i < number; i++) {
    newArray.push([0, 0]);
  }
  if (number % 2 !== 0) newArray[newArray.length - 1][1] = null;
  return newArray;
};

export const projectList = [
  {
    name: "청귤마켓",
    participants: 3,
    simple_desc: "자신의 스토어에서 판매할 상품을 등록하고 홍보할 수 있는 SNS",
    skill: ["HTML", "CSS", "JavaScript"],
    desc: [
      "자신의 일상을 글과 사진으로 공유하고 다른 사용자의 소식을 확인할 수 있습니다.",
      "home, profile, follower, following nav menu 페이지를 구현했습니다.",
      "매일 회의하며 코딩 컨벤션을 설정하고 진행 상황을 점검했습니다.",
      "font-size를 계산된 vw로 설정해 화면 크기에 맞춰 요소의 크기도 변하는 스타일을 구축했습니다.",
    ],
    img: 청귤마켓,
  },
  {
    name: "회상 - 이전의 일기를 한눈에",
    participants: 1,
    simple_desc: "하루를 기록하고 이전의 일기를 회상하는 일기 앱",
    skill: ["HTML", "CSS", "JavaScript", "React", "Sass", "TypeScript"],
    desc: [
      "일기는 기본적으로 오늘, 하루 전, 일주일 전, 한 달 전, 일 년 전의 일기만 볼 수 있습니다.",
      "하루에 일기는 하나만 작성할 수 있고 수정과 삭제는 당일에만 할 수 있습니다.",
      "일기를 메인 화면에서 편리하게 보기 위해 'styled-components'를 이용해 이미지 슬라이드를 구현했습니다.",
      "'react-datepicker'라이브러리를 이용해 캘린더 모드를 구현해 원하는 날짜의 일기를 볼 수 있습니다.",
      "반응형으로 디자인해 모바일과 태블릿에서도 사용이 가능합니다.",
    ],
    img: 회상,
  },
  {
    name: "똥",
    participants: 2,
    simple_desc:
      "자신의 스토어에서 판매ㅇㅁㄴㅇㅁㄴㅁㄴㅇㅁ할 상품을 등록하고 홍보할 수 있는 SNS",
    skill: ["HTML", "CSS", "JavaScript"],
    desc: [
      "자신의 일상을 글과 사진으로 공유하고ㅇㅁㄴㅇㅁㄴㅇㄴㅁ 다른 사용자의 소식을 확인할 수 있습니다.",
      "home, profile, follower, fㅇㅁㄴㅇㅁㄴㅇollowing nav menu 페이지를 구현했습니다.",
      "매일 회의를 하며 코딩 컨벤션을 설정ㅇㄴㅁㅇㅁㄴㅇ하고 진행상황을 점검했습니다.",
      "font-size를 계산된 vw로 설정해ㅁㄴㅇㅁㄴㅇㄴㅁㅇㅇㅁㄴ 화면 크기에 맞춰 요소의 크기도 변하는 스타일을 구축했습니다.",
    ],
    img: 청귤마켓,
  },
];
