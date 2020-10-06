import MainLayout from "../components/MainLayout";
import { Users } from "../lib/endpoints";
import { useState, useEffect, useContext } from "react";
// import Link from "next/link";
import { Store } from "../contextStore";
import { REGIONS, CATEGORY } from "../public/assets/js/customData"

export default function Home() {
	const [profileData, setProfileData] = useState<any>({});
	const [isReady, setIsReady] = useState(false);

	const { state } = useContext<any>(Store);

	useEffect(() => {
		(async () => {
			const rs = await new Users().getBusinessProfile();
			console.log("Profile", rs);
			const rIndex = REGIONS.findIndex((r) => r[0] == rs.region);
			rs.region = rs.region?.length > 0 ? REGIONS[rIndex][1] : "";
			const cIndex = CATEGORY.findIndex((r) => r[0] == rs.category);
			rs.category = rs.category?.length > 0 ? CATEGORY[cIndex][1] : "";
			setProfileData(rs);
			setIsReady(true);
		})();
	}, []);

	return (
		<>
			<MainLayout>
				{!isReady ? (
					<h3>Loading...</h3>
				) : (
						<div>
							{/* page-header */}
							<div className="page-header mt-6">
								<h3 className="page-title ">Profile</h3>
							</div>
							{/* End page-header */}
							<div className="row ">
								<div className="col-md-3 ">
									<div className="userpic mb-4">
										<img
											src={
												profileData.image
													? profileData.image
													: "/assets/images/Profile_Icon.png"
											}
											alt=""
											width={200}
											height={200}
											style={{ borderRadius: "10px" }}
										/>
									</div>
									<div className="text-center">
										{/* <Link href="/editbusinessprofile"> */}
										<a
											onClick={() => (window.location.pathname = "/editbusinessprofile")}
											className="btn btn-primary btn-block mt-1"
											style={{
												borderRadius: "10px",
												width: "200px",
												height: "36px",
												backgroundColor: "#3964fc",
												color: "#FFF",
												textAlign:"center",
											}}
										>
											Edit Profile
                  </a>
										{/* </Link> */}
										<br />
									</div>
								</div>
								<div className="col-lg-6 col-xl-9 col-md-12 col-sm-12">
									{/* <div className="card-body"> */}
									<div className="row">
										<div className="col-lg-5 col-md-12">
											<div className="form-group">
												<label style={{ fontWeight: "bolder" }}>Organization Title</label>
												<input
													type="text"
													className="form-control form-rounded"
													defaultValue={profileData?.name ? profileData.name : ""}
													readOnly
												/>
											</div>

											<div className="form-group">
												<label style={{ fontWeight: "bolder" }}>
													Email Address
                      </label>
												<input
													type="text"
													className="form-control form-rounded"
													defaultValue={
														profileData?.user
															? profileData.user.email
															: state.emailaddress
													}
													readOnly
												/>
											</div>
											<div className="form-group">
												<label style={{ fontWeight: "bolder" }}>
													Category
                      </label>
												<input
													type="text"
													className="form-control form-rounded"
													defaultValue={
														profileData?.category
															? profileData.category
															: ""
													}
													readOnly
												/>
											</div>
											<div className="form-group">
												<label
													style={{ fontWeight: "bolder" }}
													htmlFor="form-label"
												>
													Description
                      </label>
												<div className="form-group">
													<div className="input-group-date">
														<textarea style={{ resize: "none" }} className="form-control form-rounded "
															defaultValue={profileData?.description ? profileData.description : ""}
															rows={4} readOnly></textarea>
													</div>
												</div>
											</div>

										</div>

										<div className="col-lg-1"></div>
										<div className="col-lg-5 col-md-12">
											<div className="form-group">
												<label style={{ fontWeight: "bolder" }}>Website</label>
												<input
													type="text"
													className="form-control form-rounded"
													defaultValue={
														profileData?.website
															? profileData.website
															: ""
													}
													readOnly
												/>
											</div>
											<div className="form-group">
												<label style={{ fontWeight: "bolder" }}>Phone Number</label>
												<input
													type="text"
													className="form-control form-rounded"
													defaultValue={
														profileData?.phone
															? profileData.phone
															: ""
													}
													readOnly
												/>
											</div>
											<div className="form-group">
												<label style={{ fontWeight: "bolder" }}>Region</label>
												<input
													type="text"
													className="form-control form-rounded"
													defaultValue={
														profileData?.region ? profileData.region : ""
													}
													readOnly
												/>
											</div>
											<div className="form-group">
												<label style={{ fontWeight: "bolder" }}>
													Digital Address
                      </label>
												<input
													type="text"
													className="form-control form-rounded"
													defaultValue={
														profileData?.location
															? profileData.location
															: ""
													}
													readOnly
												/>
											</div>
											<div className="form-group">
												<label style={{ fontWeight: "bolder" }}>
													Town
                      </label>
												<input
													type="text"
													className="form-control form-rounded"
													defaultValue={
														profileData?.city
															? profileData.city
															: ""
													}
													readOnly
												/>
											</div>
										</div>
									</div>
									{/* </div> */}
								</div>
							</div>
						</div>
					)}
			</MainLayout>
		</>
	);
}
