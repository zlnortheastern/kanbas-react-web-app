export default function Dashboard() {
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/webdev.jfif" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS5610 Web Development
            </a>
            <p className="wd-dashboard-course-title">
              Web Development 2024 Summer
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/java.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1111 Java
            </a>
            <p className="wd-dashboard-course-title">
              Java fundamental development
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/python.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS2222 Python
            </a>
            <p className="wd-dashboard-course-title">
              Python fundamental development
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/mysql.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS3333 MySQL
            </a>
            <p className="wd-dashboard-course-title">
              MySQL database management system
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/nodejs.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS4444 NodeJS
            </a>
            <p className="wd-dashboard-course-title">
              JavaSctipt framework development
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/vue.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS5555 VUE
            </a>
            <p className="wd-dashboard-course-title">
              Progressive Web Development
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/unity.webp" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS6666 Unity3D
            </a>
            <p className="wd-dashboard-course-title">
              Game development
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/chatgpt.webp" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS7777 Artificial Intelligence
            </a>
            <p className="wd-dashboard-course-title">
              LLM application optimization
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
      </div>
    </div >
  );
}
