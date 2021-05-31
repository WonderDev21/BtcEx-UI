import React, { } from "react";

const UserProfile = () => {

  return (
    <>
      <div className="card-header">
        <h4 className="card-title">User Profile</h4>
      </div>
      <div className="card-body">
        <form action="#">
          <div className="form-row">
            <div className="form-group col-xl-12">
              <label className="mr-sm-2">Your Name</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group col-xl-12">
              <label className="mr-sm-2">Email</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group col-xl-12">
              <div className="media align-items-center mb-3">
                <img className="mr-3 rounded-circle mr-0 mr-sm-3" src={require('./../../../images/profile/2.png')} width="55" height="55" alt="" />
                <div className="media-body">
                  <h4 className="mb-0">John Doe</h4>
                  <p className="mb-0">Max file size is 20mb</p>
                </div>
              </div>
              <div className="file-upload-wrapper" data-text="Change Photo">
                <input name="file-upload-field" type="file" className="file-upload-field" />
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-success waves-effect">Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserProfile;
