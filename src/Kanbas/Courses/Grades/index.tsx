import GradesControls from "./GradesControls";
export default function Grades() {
  return (
    <div id="wd-grades">
      <GradesControls />
      <div style={{maxWidth:"850px"}}>
        <div className="table-responsive">
          <table id="wd-grade-table" className="table table-striped table-bordered align-middle fs-5 text-nowrap">
            <tbody className="text-center">
              <tr>
                <td className="text-start">Student Name</td>
                <td>
                  A1 SETUP
                  <div className="fs-6">Out of 100</div>
                </td>
                <td >
                  A2 HTML
                  <div className="fs-6">Out of 100</div>
                </td>
                <td>
                  A3 CSS
                  <div className="fs-6">Out of 100</div>
                </td>
                <td>
                  A4 BOOTSTRAP
                  <div className="fs-6">Out of 100</div>
                </td>
                <td>
                  A5
                  <div className="fs-6">Out of 100</div>
                </td>
                <td>
                  A6
                  <div className="fs-6">Out of 100</div>
                </td>
              </tr>
              <tr>
                <td className="text-danger text-start">Jane Adams</td>
                <td>100%</td>
                <td>96.67%</td>
                <td>92.18%</td>
                <td>66.22%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td className="text-danger text-start">Christina Allen</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td className="text-danger text-start">Samreen Ansari</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td className="text-danger text-start">Han Bao</td>
                <td>100%</td>
                <td>100%</td>
                <td>
                  <input type="text" value="88.03" className="text-center" style={{width:"60px"}}/>%
                </td>
                <td>98.99%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td className="text-danger text-start">Mahi Sai Srinivas Bobbili</td>
                <td>100%</td>
                <td>96.67%</td>
                <td>98.37%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td className="text-danger text-start">Siran Cao</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}