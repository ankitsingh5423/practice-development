import React from "react";
function App() {
  return (
    <>
      <div className="app-wrapper">
        <nav className="app-header navbar navbar-expand bg-body">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-lte-toggle="sidebar"
                  href="#"
                  role="button"
                >
                  <i className="bi bi-list"></i>
                </a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-widget="navbar-search"
                  href="#"
                  role="button"
                >
                  <i className="bi bi-search"></i>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" data-bs-toggle="dropdown" href="#">
                  <i className="bi bi-chat-text"></i>
                  <span className="navbar-badge badge text-bg-danger">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                  <a href="#" className="dropdown-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <img
                          src="../../../dist/assets/img/user1-128x128.jpg"
                          alt="User Avatar"
                          className="img-size-50 rounded-circle me-3"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="dropdown-item-title">
                          Brad Diesel
                          <span className="float-end fs-7 text-danger">
                            <i className="bi bi-star-fill"></i>
                          </span>
                        </h3>
                        <p className="fs-7">Call me whenever you can...</p>
                        <p className="fs-7 text-secondary">
                          <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <img
                          src="../../../dist/assets/img/user8-128x128.jpg"
                          alt="User Avatar"
                          className="img-size-50 rounded-circle me-3"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="dropdown-item-title">
                          John Pierce
                          <span className="float-end fs-7 text-secondary">
                            <i className="bi bi-star-fill"></i>
                          </span>
                        </h3>
                        <p className="fs-7">I got your message bro</p>
                        <p className="fs-7 text-secondary">
                          <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <img
                          src="../../../dist/assets/img/user3-128x128.jpg"
                          alt="User Avatar"
                          className="img-size-50 rounded-circle me-3"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="dropdown-item-title">
                          Nora Silvester
                          <span className="float-end fs-7 text-warning">
                            <i className="bi bi-star-fill"></i>
                          </span>
                        </h3>
                        <p className="fs-7">The subject goes here</p>
                        <p className="fs-7 text-secondary">
                          <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item dropdown-footer">
                    See All Messages
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" data-bs-toggle="dropdown" href="#">
                  <i className="bi bi-bell-fill"></i>
                  <span className="navbar-badge badge text-bg-warning">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                  <span className="dropdown-item dropdown-header">
                    15 Notifications
                  </span>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">
                    <i className="bi bi-envelope me-2"></i> 4 new messages
                    <span className="float-end text-secondary fs-7">
                      3 mins
                    </span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">
                    <i className="bi bi-people-fill me-2"></i> 8 friend requests
                    <span className="float-end text-secondary fs-7">
                      12 hours
                    </span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">
                    <i className="bi bi-file-earmark-fill me-2"></i> 3 new
                    reports
                    <span className="float-end text-secondary fs-7">
                      2 days
                    </span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item dropdown-footer">
                    {" "}
                    See All Notifications{" "}
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" data-lte-toggle="fullscreen">
                  <i
                    data-lte-icon="maximize"
                    className="bi bi-arrows-fullscreen"
                  ></i>
                  <i
                    data-lte-icon="minimize"
                    className="bi bi-fullscreen-exit"
                    
                  ></i>
                </a>
              </li>

              <li className="nav-item dropdown user-menu">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="../../../dist/assets/img/user2-160x160.jpg"
                    className="user-image rounded-circle shadow"
                    alt="User Image"
                  />
                  <span className="d-none d-md-inline">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                  <li className="user-header text-bg-primary">
                    <img
                      src="../../../dist/assets/img/user2-160x160.jpg"
                      className="rounded-circle shadow"
                      alt="User Image"
                    />
                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2023</small>
                    </p>
                  </li>

                  <li className="user-body">
                    <div className="row">
                      <div className="col-4 text-center">
                        <a href="#">Followers</a>
                      </div>
                      <div className="col-4 text-center">
                        <a href="#">Sales</a>
                      </div>
                      <div className="col-4 text-center">
                        <a href="#">Friends</a>
                      </div>
                    </div>
                  </li>

                  <li className="user-footer">
                    <a href="#" className="btn btn-default btn-flat">
                      Profile
                    </a>
                    <a href="#" className="btn btn-default btn-flat float-end">
                      Sign out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <aside
          className="app-sidebar bg-body-secondary shadow"
          data-bs-theme="dark"
        >
          <div className="sidebar-brand">
            <a href="../index.html" className="brand-link">
              <img
                src="../../../dist/assets/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image opacity-75 shadow"
              />

              <span className="brand-text fw-light">AdminLTE 4</span>
            </a>
          </div>

          <div className="sidebar-wrapper">
            <nav className="mt-2">
              <ul
                className="nav sidebar-menu flex-column"
                data-lte-toggle="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-speedometer"></i>
                    <p>
                      Dashboard
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../index.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Dashboard v1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../index2.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Dashboard v2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../index3.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Dashboard v3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="../generate/theme.html" className="nav-link">
                    <i className="nav-icon bi bi-palette"></i>
                    <p>Theme Generate</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-box-seam-fill"></i>
                    <p>
                      Widgets
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../widgets/small-box.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Small Box</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../widgets/info-box.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>info Box</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../widgets/cards.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Cards</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-clipboard-fill"></i>
                    <p>
                      Layout Options
                      <span className="nav-badge badge text-bg-secondary me-3">
                        6
                      </span>
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a
                        href="../layout/unfixed-sidebar.html"
                        className="nav-link"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Default Sidebar</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../layout/fixed-sidebar.html"
                        className="nav-link"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Fixed Sidebar</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../layout/layout-custom-area.html"
                        className="nav-link"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>
                          Layout <small>+ Custom Area </small>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../layout/sidebar-mini.html"
                        className="nav-link"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Sidebar Mini</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../layout/collapsed-sidebar.html"
                        className="nav-link"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>
                          Sidebar Mini <small>+ Collapsed</small>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../layout/logo-switch.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>
                          Sidebar Mini <small>+ Logo Switch</small>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../layout/layout-rtl.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Layout RTL</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-tree-fill"></i>
                    <p>
                      UI Elements
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../UI/general.html" className="nav-link active">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>General</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../UI/icons.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Icons</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../UI/timeline.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Timeline</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon bi bi-pencil-square"></i>
                    <p>
                      Forms
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a
                        href="../forms/general.html"
                        className="nav-link active"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>General Elements</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-table"></i>
                    <p>
                      Tables
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../tables/simple.html" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Simple Tables</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-header">EXAMPLES</li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-box-arrow-in-right"></i>
                    <p>
                      Auth
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-icon bi bi-box-arrow-in-right"></i>
                        <p>
                          Version 1
                          <i className="nav-arrow bi bi-chevron-right"></i>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <a href="../examples/login.html" className="nav-link">
                            <i className="nav-icon bi bi-circle"></i>
                            <p>Login</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="../examples/register.html"
                            className="nav-link"
                          >
                            <i className="nav-icon bi bi-circle"></i>
                            <p>Register</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-icon bi bi-box-arrow-in-right"></i>
                        <p>
                          Version 2
                          <i className="nav-arrow bi bi-chevron-right"></i>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <a
                            href="../examples/login-v2.html"
                            className="nav-link"
                          >
                            <i className="nav-icon bi bi-circle"></i>
                            <p>Login</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="../examples/register-v2.html"
                            className="nav-link"
                          >
                            <i className="nav-icon bi bi-circle"></i>
                            <p>Register</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../examples/lockscreen.html"
                        className="nav-link"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Lockscreen</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-header">DOCUMENTATIONS</li>
                <li className="nav-item">
                  <a href="../docs/introduction.html" className="nav-link">
                    <i className="nav-icon bi bi-download"></i>
                    <p>Installation</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../docs/layout.html" className="nav-link">
                    <i className="nav-icon bi bi-grip-horizontal"></i>
                    <p>Layout</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../docs/color-mode.html" className="nav-link">
                    <i className="nav-icon bi bi-star-half"></i>
                    <p>Color Mode</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-ui-checks-grid"></i>
                    <p>
                      Components
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a
                        href="../docs/components/main-header.html"
                        className="nav-link"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Main Header</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../docs/components/main-sidebar.html"
                        className="nav-link"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Main Sidebar</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-filetype-js"></i>
                    <p>
                      Javascript
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a
                        href="../docs/javascript/treeview.html"
                        className="nav-link"
                      >
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Treeview</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="../docs/browser-support.html" className="nav-link">
                    <i className="nav-icon bi bi-browser-edge"></i>
                    <p>Browser Support</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../docs/how-to-contribute.html" className="nav-link">
                    <i className="nav-icon bi bi-hand-thumbs-up-fill"></i>
                    <p>How To Contribute</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../docs/faq.html" className="nav-link">
                    <i className="nav-icon bi bi-question-circle-fill"></i>
                    <p>FAQ</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../docs/license.html" className="nav-link">
                    <i className="nav-icon bi bi-patch-check-fill"></i>
                    <p>License</p>
                  </a>
                </li>
                <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle-fill"></i>
                    <p>Level 1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle-fill"></i>
                    <p>
                      Level 1<i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Level 2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>
                          Level 2
                          <i className="nav-arrow bi bi-chevron-right"></i>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="nav-icon bi bi-record-circle-fill"></i>
                            <p>Level 3</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="nav-icon bi bi-record-circle-fill"></i>
                            <p>Level 3</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="nav-icon bi bi-record-circle-fill"></i>
                            <p>Level 3</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p>Level 2</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle-fill"></i>
                    <p>Level 1</p>
                  </a>
                </li>
                <li className="nav-header">LABELS</li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle text-danger"></i>
                    <p className="text">Important</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle text-warning"></i>
                    <p>Warning</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle text-info"></i>
                    <p>Informational</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <main className="app-main">
          <div className="app-content-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <h3 className="mb-0">General Form</h3>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-end">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      General Form
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="app-content">
            <div className="container-fluid">
              <div className="row g-4">
                <div className="col-12">
                  <div className="callout callout-info">
                    For detailed documentation of Form visit
                    <a
                      href="https://getbootstrap.com/docs/5.3/forms/overview/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="callout-link"
                    >
                      Bootstrap Form
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card card-primary card-outline mb-4">
                    <div className="card-header">
                      <div className="card-title">Quick Example</div>
                    </div>

                    <form>
                      <div className="card-body">
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="file"
                            className="form-control"
                            id="inputGroupFile02"
                          />
                          <label
                            className="input-group-text"
                            for="inputGroupFile02"
                          >
                            Upload
                          </label>
                        </div>
                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            for="exampleCheck1"
                          >
                            Check me out
                          </label>
                        </div>
                      </div>

                      <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="card card-success card-outline mb-4">
                    <div className="card-header">
                      <div className="card-title">Input Group</div>
                    </div>

                    <div className="card-body">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                          @
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Recipient's username"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span className="input-group-text" id="basic-addon2">
                          @example.com
                        </span>
                      </div>
                      <div className="mb-3">
                        <label for="basic-url" className="form-label">
                          Your vanity URL
                        </label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon3">
                            https://example.com/users/
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4"
                          />
                        </div>
                        <div className="form-text" id="basic-addon4">
                          Example help text goes outside the input group.
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Amount (to the nearest dollar)"
                        />
                        <span className="input-group-text">.00</span>
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                        />
                        <span className="input-group-text">@</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Server"
                          aria-label="Server"
                        />
                      </div>
                      <div className="input-group">
                        <span className="input-group-text">With textarea</span>
                        <textarea
                          className="form-control"
                          aria-label="With textarea"
                        ></textarea>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </div>
                  </div>

                  <div className="card card-warning card-outline mb-4">
                    <div className="card-header">
                      <div className="card-title">Horizontal Form</div>
                    </div>

                    <form>
                      <div className="card-body">
                        <div className="row mb-3">
                          <label
                            for="inputEmail3"
                            className="col-sm-2 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail3"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            for="inputPassword3"
                            className="col-sm-2 col-form-label"
                          >
                            Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword3"
                            />
                          </div>
                        </div>
                        <fieldset className="row mb-3">
                          <legend className="col-form-label col-sm-2 pt-0">
                            Radios
                          </legend>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="gridRadios1"
                              >
                                {" "}
                                First radio{" "}
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                for="gridRadios2"
                              >
                                {" "}
                                Second radio{" "}
                              </label>
                            </div>
                            <div className="form-check disabled">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios3"
                                value="option3"
                                disabled
                              />
                              <label
                                className="form-check-label"
                                for="gridRadios3"
                              >
                                Third disabled radio
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <div className="row mb-3">
                          <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck1"
                              />
                              <label
                                className="form-check-label"
                                for="gridCheck1"
                              >
                                Example checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <button type="submit" className="btn btn-warning">
                          Sign in
                        </button>
                        <button type="submit" className="btn float-end">
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card card-secondary card-outline mb-4">
                    <div className="card-header">
                      <div className="card-title">Different Height</div>
                    </div>

                    <div className="card-body">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder=".form-control-lg"
                        aria-label=".form-control-lg example"
                      />
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Default input"
                        aria-label="default input example"
                      />
                      <br />
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder=".form-control-sm"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                  </div>

                  <div className="card card-danger card-outline mb-4">
                    <div className="card-header">
                      <div className="card-title">Different Width</div>
                    </div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=".col-3"
                          />
                        </div>

                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=".col-4"
                          />
                        </div>

                        <div className="col-5">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=".col-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-info card-outline mb-4">
                    <div className="card-header">
                      <div className="card-title">Form Validation</div>
                    </div>

                    <form className="needs-validation" novalidate>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label
                              for="validationCustom01"
                              className="form-label"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              value="Mark"
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>

                          <div className="col-md-6">
                            <label
                              for="validationCustom02"
                              className="form-label"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom02"
                              value="Otto"
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>

                          <div className="col-md-6">
                            <label
                              for="validationCustomUsername"
                              className="form-label"
                            >
                              Username
                            </label>
                            <div className="input-group has-validation">
                              <span
                                className="input-group-text"
                                id="inputGroupPrepend"
                              >
                                @
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                              <div className="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <label
                              for="validationCustom03"
                              className="form-label"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom03"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid city.
                            </div>
                          </div>

                          <div className="col-md-6">
                            <label
                              for="validationCustom04"
                              className="form-label"
                            >
                              State
                            </label>
                            <select
                              className="form-select"
                              id="validationCustom04"
                              required
                            >
                              <option selected disabled value="">
                                Choose...
                              </option>
                              <option>...</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid state.
                            </div>
                          </div>

                          <div className="col-md-6">
                            <label
                              for="validationCustom05"
                              className="form-label"
                            >
                              Zip
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom05"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid zip.
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                              />
                              <label
                                className="form-check-label"
                                for="invalidCheck"
                              >
                                Agree to terms and conditions
                              </label>
                              <div className="invalid-feedback">
                                You must agree before submitting.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <button className="btn btn-info" type="submit">
                          Submit form
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="app-footer">
          <div className="float-end d-none d-sm-inline">Anything you want</div>

          <strong>
            Copyright &copy; 2014-2024&nbsp;
            <a href="https://adminlte.io" className="text-decoration-none">
              AdminLTE.io
            </a>
            .
          </strong>
        </footer>
      </div>
    </>
  );
}

export default App;
