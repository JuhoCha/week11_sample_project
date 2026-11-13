# OSS Week 11 — React Course Manager (Student Starter)

React + Vite 기반 학생 배포용 Sample Project입니다. **조회와 삭제는 완성**, 등록 및 완료 변경은 학생이 직접 구현하도록 `TODO`로 남겨두었습니다.

## 실행 방법

Node.js 20.19+ 또는 22.12+ 권장.

```bash
npm install
npm run dev
```

브라우저에 표시되는 Local URL에 접속하세요. 빌드 테스트: `npm run build`.

## 소스 구조

- `src/App.jsx`: 페이지 전체 레이아웃
- `src/components/CourseList.jsx`: State 및 목록, 삭제 로직, **TODO 1/2**
- `src/components/CourseItem.jsx`: Props로 데이터를 받고 이벤트 콜백 호출
- `src/data/courses.js`: 초기 과목 데이터
- `src/App.css`: 전체 디자인

## 수행 내용

1. 코드를 실행하고 목록 조회·삭제를 확인합니다.
2. 초기 과목 5개 이상, 제목, CSS 3곳 이상 변경합니다.
3. `CourseList.jsx`의 **TODO 1**: 과목 등록 (빈 값 입력 방지, 고유 id 지정, State 업데이트).
4. `CourseList.jsx`의 **TODO 2**: 완료 체크박스 클릭 시 `completed` 상태 변경.
5. 선택: 검색/필터, 이름 수정 기능 추가.
6. GitHub에 Commit/Push 후 Vercel에 배포합니다.
7. README에 프로젝트 소개, 주요 코드 분석 2개, 변경 내용, Weekly Review, GitHub URL, Vercel URL을 정리합니다.

## 확인할 질문

- `CourseList`와 `CourseItem`의 역할은?
    CouseList는 부모로 CourseItem은 자식. 따라서 CourseList에 있는 함수를 호출한다.
- 왜 `courses`를 직접 수정하지 않고 `setCourses()`를 사용할까요?
    React는 state의 저장 방식이 달라서 직접 수정시에 바뀌지 않아서 useState사용함.
- `map()`과 `filter()`는 각각 어떤 목적인가요?
    map은 하나하나 배열 모든 요소 그리는 함수이고, filter은 주어진 조건을 통과하는걸 남기는것.
- `course`, `onDelete`, `onToggle` Props는 어디에서 전달되나요?
    CourseList에서 CourseItem로 받는다.
- 브라우저 새로고침 시 데이터가 초기화되는 이유는? (DB/localStorage 없음)
    State는 브라우저 메모리에만 있어서.

> 교육 목적의 로컬 State 앱입니다. 서버 API 및 데이터베이스는 사용하지 않습니다.

22400719 차주호

Project Information: 프로젝트 소개, 주요 기능 및 원본 Sample Project URL
- 프로젝트는 react 연습을 위한 todo 앱 입니다. 주요 기능으로는 과목 추가, 삭제, 완료 표시 등이 있습니다.

Installation: 설치·실행 방법 및 실행 화면
- git clone, npm install, npm run dev
- localhost:5173
- Node.js 20.19+ 또는 22.12+ 권장.
- 실행화면:


Source Code Exploration: 주요 파일 3개, Component와 Props 관계, useState 및 Event 분석, 주요 코드 2개 설명
- 주요파일 3개: CourseItem.jsx, CourseList.jsx, courses.js
- Compoenet와 Props의 관계:

Customizing: 수정한 데이터, 텍스트, 스타일 및 파일명
Feature Extension: 구현한 기능 2개 이상, 주요 코드 및 동작 결과
Deployment: 실제 접근 가능한 Vercel URL
Weekly Review:
새롭게 배운 내용 3가지
어려웠던 점과 해결 방법
AI 활용 내용 및 느낀 점
