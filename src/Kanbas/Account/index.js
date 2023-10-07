import { Link } from "react-router-dom";
import './index.css'

function Account() {
  return (
    <div class="wd-account-main-page">
        <div class="container-fluid">
          <div class="row account-header">
            <div class = "col col-sm-1">
              <i class="fa-solid fa-bars wd-custom-hamburger">

              </i>
            </div>

            <div class = "col col-sm-11  wd-profile-name-text" >
                Jose Annunziato's Profile
            </div>
          </div>


        

    <div class="row">
      <hr class="wd-custom-divider" />
    </div>

    <div class="row">
      <div class="col col-sm-3">
        <div class="wd-account-navigation">
          <div class="wd-navigation-element"> <a href="#">Notifications</a></div>
          <div class="wd-navigation-element wd-navigation-element-active"><a href="index.html">Profile</a></div>
          <div class="wd-navigation-element"><a href="#">Files</a></div>
          <div class="wd-navigation-element"><a href="#">Settings</a></div>
          <div class="wd-navigation-element"><a href="#">ePortfolios</a></div>
          <div class="wd-navigation-element"><a href="#">Shared Content</a></div>
          <div class="wd-navigation-element"><a href="#">The Hub</a></div>
          <div class="wd-navigation-element"><a href="#">Quickly Course Tools</a></div>
          <div class="wd-navigation-element"><a href="#">Global Announcements</a></div>
        </div>
      </div>
      <div class="col col-sm-9">
          <div class="float-end">
              <a href="profile/edit.html">
                  <button
                      type="button"
                      class="btn btn-secondary wd-profile-action-button">
                      Edit Profile
                      {/* <i class="fa-solid fa-pencil" style="color: rgb(229, 218, 218)"></i> */}
                  </button>
              </a>
          </div>

          <div class="wd-profile-details">
              <div class="wd-basic-details">
                  <div class="wd-account-icon-container">
                      <i class="fa fa-user wd-account-icon" aria-hidden="true"></i>
                  </div>
                  <h2 class="wd-account-title">Jose Annunziato</h2>
              </div>

              <div class="contact">
                  <h3 class="section-heading">Contact</h3>
                  <p class="section-description">
                      No registered services, you can add some on the
                      <a class="wd-navigation-element-title" href="/">
                          settings
                      </a>

                      page
                  </p>
              </div>

              <div class="biography">
                  <h3 class="section-heading">Biography</h3>
                  <p class="section-description">
                      Faculty, Software Engineer, AI, Space, and renewables
                      enthusiast.
                  </p>
              </div>

              <div class="links">
                  <h3 class="section-heading">Links</h3>
                  <p class="section-description">
                      <i class="fa-solid fa-link wd-link-icon wd-pointer"></i>
                      <span class="wd-navigation-element-title"> Youtube</span>
                      <i
                          class="fa-solid fa-up-right-from-square red pointer"
                      ></i>
                  </p>
              </div>
          </div>
      </div>

    </div>
    </div>
    </div>
  );
}
export default Account;