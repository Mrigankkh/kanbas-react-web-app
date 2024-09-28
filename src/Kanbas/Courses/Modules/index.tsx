export default function Modules() {
  return (
    <div>
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>

        <select id="publish-all">
          <option value="publish">Publish All</option>
          <option value="unpublish">Unpublish</option>
        </select>
        <button>Module +</button>
      </div>
      <div>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    Introduction to the course
                  </li>
                  <li className="wd-content-item">
                    Learn what is Web Development
                  </li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    Full Stack Developer - Chapter 1 - Introduction
                  </li>
                  <li className="wd-content-item">
                    Full stack Developer - Chapter 2 - Creating user
                  </li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to wevbdev</li>
                  <li className="wd-content-item">
                    Creating an HTTP server with Nodejs
                  </li>
                  <li className="wd-content-item">Creating a React app</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
