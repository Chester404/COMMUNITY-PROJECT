const AdminSidebar = ({handleList}) => {
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <div className="heading">
          <a href="#dashboard">
            <li>
              <i className="fe fe-grid mr-5"></i>
              Dashboard
            </li>
          </a>
          <br />
          <br />
          <a>
            <li className="mng">
              <b>Management</b>
            </li>
          </a>
        </div>
        <div>
          {/* <i className="fa fa-chevron-circle-left closebtn" /> */}
          <i
            className="fa fa-chevron-circle-left closebtn"            
            onClick={() => closeNav()}
            style={{ fontSize: "20px", cursor: "pointer" }}
          />          
        </div>

        <div className="sidenavmenu">
          <a href="#analytics">
            <li>
              <i className="fe fe-activity mr-5"></i> Analytics
              <i id="i" className="fe fe-chevron-right mt-1"></i>
            </li>
          </a>
        </div>

        <div className="sidenavmenu">
          <a href="#" onClick={() => hideshow()}>
            <li>
              <i className="fe fe-users mr-5"></i>
              Users<i id="i" className="fe fe-chevron-right mt-1"></i>
            </li>
          </a>
        </div>
        <ul id="list">
          <a href="#" onClick={() => {            
            handleList("individual")
          }}>
            <li>Individual List</li>
          </a>
          <a href="#" onClick={() => {            
            handleList("organization")
          }}>
            <li>Organizational List</li>
          </a>
          <a href="#organizationalrequests">
            <li>Organizational Requests</li>
          </a>
          <a href="#deactivatedaccounts">
            <li>Deactivated Accounts</li>
          </a>
        </ul>

        <div className="sidenavmenu">
          <a href="#marketplace">
            <li>
              <i className="fe fe-shopping-bag mr-5"></i> Marketplace
            </li>
          </a>
        </div>
        <div className="sidenavmenu">
          <a href="#jobs">
            <li>
              <i className="fe fe-briefcase mr-5"></i> Jobs
            </li>
          </a>
        </div>
        <div className="sidenavmenu">
          <a href="#partnership">
            <li>
              <i className="fe fe-link mr-5"></i>
              Partnership
            </li>
          </a>
        </div>
        <div className="sidenavmenu">
          <a href="#forum">
            <li>
              <i className="fe fe-message-square mr-5"></i>
              Forum
            </li>
          </a>
        </div>

        <div className="sidenavmenu">
          <a href="#">
            <li>
              <i className="fe fe-users mr-5"></i>
              Super Users
            </li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

function closeNav() {
  document.getElementById("mySidenav").style.width = "60px";
  document.getElementById("main").style.marginLeft = "30px";
  document.getElementById("list").style.display = "none";
  document.getElementById("openicon").style.display = "block";
}

function hideshow() {
  var toggle = document.getElementById("list");
  toggle.style.display = toggle.style.display == "block" ? "none" : "block";
}
