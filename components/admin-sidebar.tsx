import Link from "next/link";
const AdminSidebar = ({ handleList }) => {
  return (
    <div>
        <div onClick={() => showCloseicon()}>
        <i className="fa fa-chevron-circle-right openicon mr-5"
                id="openicon"
                onClick={() => openNav()}
                style={{ fontSize: "20px", cursor: "pointer" }}
              />
      </div>
      <a onClick={() => closeNav()}>
          <i className="fa fa-chevron-circle-left closebtn" id="closeicon" />
        </a>
        
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

        <div className="sidenavmenu">
          <a href="#analytics">
            <li>
              <i className="fe fe-activity mr-5"></i> Analytics
              <i id="optionicon" className="fe fe-chevron-right mt-1"></i>
            </li>
          </a>
        </div>

        <div className="sidenavmenu">
          <a href="#" onClick={() => hideshow()}>
            <li>
              <i className="fe fe-user mr-5"></i>
              Users<i id="optionicon" className="fe fe-chevron-right mt-1"></i>
            </li>
          </a>
        </div>
        <ul id="list">
          <Link href="/userList">
            <a
              onClick={() => {
                handleList("individuals");
              }}
            >
              <li>Individual Users</li>
            </a>
          </Link>
          <Link href="/userList">
            <a
              onClick={() => {
                handleList("organizations");
              }}
            >
              <li>Organization Users</li>
            </a>
          </Link>

          <Link href="/userList">
            <a
              onClick={() => {
                // handleListView("inactive");
                handleList("organizationalrequests");
              }}
            >
              <li>Organizational Requests</li>
            </a>
          </Link>
          <Link href="/userList">
            <a
              onClick={() => {
                // handleListView("inactive");
                handleList("deactivated_users");
              }}
            >
              <li>Deactivated Accounts</li>
            </a>
          </Link>
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
  document.getElementById("closeicon").style.display = "none";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "247px";
  document.getElementById("main").style.marginLeft = "220px";
  document.getElementById("openicon").style.display = "none";
}

function hideshow() {
  var toggle = document.getElementById("list");
  toggle.style.display = toggle.style.display == "block" ? "none" : "block";
}

function showCloseicon() {
  var toggle = document.getElementById("closeicon");
  toggle.style.display = toggle.style.display == "block" ? "none" : "block";
}
