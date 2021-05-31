import React, {  } from 'react';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import SettingsNav from '../element/settings-nav';

// Sub-Components
// import UserProfile from './settingComponents/user-profile';
import ChangePassword from './settingComponents/change-password';
// import PersonalInformation from './settingComponents/personal-information';

function Settings() {

	return (
		<>
			<Header2 />
			<Sidebar />
			<PageTitle />

			<div className="content-body">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-md-4">
							<SettingsNav />
						</div>
						<div className="col-xl-9 col-md-8">
							<div className="row">
								{/* <div className="col-xl-6">
									<div className="card">
										<UserProfile />
									</div>
								</div> */}
								<div className="col-xl-6">
									<div className="card">
										<ChangePassword />
									</div>
								</div>
								<div className="col-xl-12">
									<div className="card">
										{/* <PersonalInformation /> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer2 />
		</>
	)
}

export default Settings;
