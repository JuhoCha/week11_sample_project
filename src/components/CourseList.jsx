import { useState } from "react";
import CourseItem from "./CourseItem.jsx"; // CourseItem 컴포넌트를 불러옴
import { initialCourses } from "../data/courses.js"; // 초기 과목 데이터를 불러옴

//addCourse라는 const 만들어서 newName이라는 state만들고 trim으로 공백 확인하고 공백이면 과목 입력
//일단 버튼 만드들어서 이벤트로 업데이트 하는 기능 만들고

export default function CourseList() {
  // [제공] 초기 배열을 useState로 관리합니다.
  const [courses, setCourses] = useState(initialCourses);
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("all"); //선택: 필터링 기능 구현.

  // [제공] 삭제 기능: filter로 새 배열을 만들어 업데이트합니다.
  function handleDelete(id) {
    if (!window.confirm("이 과목을 삭제하시겠습니까?")) return;
    setCourses((previous) => previous.filter((course) => course.id !== id));
  }

  // TODO 1 (필수): 과목 추가 기능을 구현하세요.
  function handleAdd(event) {
    event.preventDefault(); //jsx는 자동으로 false를 거르지 않아서 preventDefault 꼭 해줘야 한다.
    // TODO: 빈 입력 검사, 새 과목 객체 생성, setCourses 호출, 입력창 초기화
    const addCourse = (newName) => {
      if (!newName.trim()) {
        alert("과목명을 입력해주세요.");
        return;
      }
      const newCourse = {
        id: Date.now(),
        name: newName,
        category: "General Elective",
        completed: false,
      };
      setCourses((previous) => [...previous, newCourse]);
      setNewName("");
    };
    addCourse(newName);
  }

  // TODO 2 (필수): 완료 상태 변경 기능을 구현하세요.
  function handleToggle(id) {
    //부모 toggle
    // TODO: map과 spread(...)를 사용하여 해당 id의 completed를 반전
    setCourses(
      (previous) =>
        previous.map(
          (course) =>
            course.id === id
              ? { ...course, completed: !course.completed }
              : course, //... 으로 course 불러오고
        ), //?는 if else 문이라서 completed
    ); //jsx에서는 빈칸이 false로 인식됨.
  }

  const filteredCourses = courses.filter((course) => {
    if (filter === "all") return true;
    if (filter === "completed") return course.completed;
    if (filter === "incomplete") return !course.completed;
    return true;
  });

  const doneCount = courses.filter((course) => course.completed).length;

  return (
    <>
      <section className="stats" aria-label="과목 통계">
        <div className="stat">
          <span>전체 과목</span>
          <strong>{courses.length}</strong>
        </div>
        <div className="stat">
          <span>완료</span>
          <strong className="green">{doneCount}</strong>
        </div>
        <div className="stat">
          <span>진행 중</span>
          <strong className="blue">{courses.length - doneCount}</strong>
        </div>
      </section>
      <section className="panel">
        <div className="panel-header">
          <h2>Juho's Courses</h2>
          <span className="small-note">{courses.length} courses</span>
        </div>
        <form className="add-form" onSubmit={handleAdd}>
          <input
            className="input"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder="새 과목명을 입력하세요"
            aria-label="새 과목명"
          />
          <button className="btn primary" type="submit">
            + Add Course
          </button>
        </form>
        <div className="filter-group" aria-label="과목 필터">
          <button
            type="button"
            className={filter === "all" ? "btn small active" : "btn small"}
            onClick={() => setFilter("all")}
          >
            전체
          </button>
          <button
            type="button"
            className={
              filter === "completed" ? "btn small active" : "btn small"
            }
            onClick={() => setFilter("completed")}
          >
            완료
          </button>
          <button
            type="button"
            className={
              filter === "incomplete" ? "btn small active" : "btn small"
            }
            onClick={() => setFilter("incomplete")}
          >
            진행 중
          </button>
        </div>
        <div className="list-head">
          <span>COURSE</span>
          <span>CATEGORY</span>
          <span>ACTIONS</span>
        </div>
        {filteredCourses.length === 0 && (
          <div className="empty">등록된 과목이 없습니다.</div>
        )}
        {filteredCourses.map(
          (course /*CourseItem 컴포넌트를 반복적으로 부름. */) => (
            <CourseItem
              key={course.id}
              course={course}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ),
        )}
      </section>
    </>
  );
}
