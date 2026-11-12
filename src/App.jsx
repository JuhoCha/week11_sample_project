import CourseList from "./components/CourseList.jsx";

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">오소스 2026-2 01분반</p>
          <h1>Juho's Course Manager</h1>
          <p className="subtitle">React로 만든 todo 목업</p>
        </div>
        <span className="tag">끝까지 화이팅</span>
      </header>
      <CourseList />
      <footer className="bottom">
        <span>OSS Week 11 · React</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}
