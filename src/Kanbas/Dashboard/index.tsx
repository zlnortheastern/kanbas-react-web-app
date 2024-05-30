export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published" >Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/webdev.jfif" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5610 Web Development
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Web Development 2024 Summer
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/java.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1111 Java
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Java fundamental development
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/python.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS2222 Python
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Python fundamental development
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/mysql.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS3333 MySQL
                </a>
                <p className="wd-dashboard-course-title card-text">
                  MySQL database management system
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/nodejs.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS4444 NodeJS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  JavaScript framework development
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/vue.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5555 VUE
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Progressive Web Development
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/unity.webp" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS6666 Unity3D
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Game development
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/chatgpt.webp" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS7777 Artificial Intelligence
                </a>
                <p className="wd-dashboard-course-title card-text">
                  LLM application optimization
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}
