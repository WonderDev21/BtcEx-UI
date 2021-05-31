import React, { useEffect } from 'react';
import Header1 from '../layout/header1';
import Bottom from '../element/bottom';
import Footer1 from '../layout/footer1';



function TermsCondition() {

	useEffect(() => {
		document.title = "BtcEX | Terms & Conditions";
	}, []);

	return (
		<>
			<Header1 />

			<div className="terms_condition">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9">
							<div className="terms_condition-content">
								<h2 className="text-center mb-5">Terms & Conditions</h2>
								<div className="terms_condition-text">
									<h3>Last updated: June 2019</h3>
									<p>Ice Holdings Limited, the holder of BtcEX. (“BtcEX”, or , “us”, “our”, “we”) provides secure storage services for Bitcoin and associated services, such as certain currency exchange services (all of the foregoing, the “Services”) through the Internet website located www.btcex.pro (the “Site”). These Terms of Service (“Terms”) govern your access and use of the Services and the Site. “You” or “Your” means a user of the Services or the Site. Below call it BtcEX.</p>
									<p>Please read these Terms carefully. These Terms govern your access to and use of the Services and Site. By using any of the Services or visiting the Site, you signify your assent to both these Terms and our Privacy Policy, a current version of which is available at PrivacyPolicy, and which may be modified from time to time at our sole discretion. Changes may be made to these Terms from time to time. Your continued use of the Site will be deemed acceptance to amended or updated terms. If you do not agree to any of these Terms, please do not use the Site or Services.</p>
								</div>


								<div className="terms_condition-text">
									<h3>Use of Site and Services : </h3>
									<p>Subject to the terms and conditions set forth herein, you may access and use the Site and Services for your personal or internal use only. As used in these Terms, a “Bitcoin” shall refer to Bitcoins and any other type of cryptocurrency or store of value supported by the Services.</p>
									<p>Due to compliance with local regulation, deposit into or withdrawal from your Account (as defined below) and transfer of such money is only available in USD/HKD and from/to bank accounts of Hong Kong banks, which shall be authenticated by BtcEX. For Regular Accounts (as defined below), deposits are limited to an aggregate minimum amount of 10 USD and unlimited per day. Withdrawals of money from your Regular Account are limited to an aggregate maximum amount of USD 25,000 per day.</p>
									<p>Withdrawals from the basic accounts of USD limited to a minimal amount of 10 USD per withdrawal, and the maximum aggregate amount of 25,000 USD per day.</p>
									<p>You acknowledge that BtcEX may, in its sole discretion and at any time, discontinue providing any part of the Site or the Services or modify or delete any content available through the Site or the Services, at any time without notice. If BtcEX ceases providing the Services, it will make commercially reasonable efforts to provide you with access to any stored Bitcoins. Use of the Services and access to the Site is void where prohibited. By using the Services, you represent and warrant that (a) any registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information; (c) you are at least 18 years of age or, if higher, the age of majority in your jurisdiction; and (d) your use of the Site or Services does not violate or promote the violation of any applicable law or regulation or any legal or contractual obligation you may have to a third party, the origin of the money stored using the Services is legitimate and is not related to any illegal activity.</p>
									<p>With reference to the US government tax policy in the Foreign Account Tax Compliance Act ("FATCA") in regard to the use of U.S. Persons (as defined in FATCA) of financial accounts held outside of the United States. U.S. Persons are prohibited from using the Site and the Services and by your continued use of the Site and the Services, you hereby declare that you are not a U.S. person for tax purposes. You are hereby advised to consult with a lawyer or tax consultant for further information in regards to your status under FATCA. For further information, please visit the IRS website at <a href="http://www.irs.gov/Individuals/International-Taxpayers/Substantial-Presence-Test" target="_blank" rel="noopener noreferrer">here</a>.</p>
								</div>


								<div className="terms_condition-text">
									<h3>Accounts : </h3>
									<p>In order to access the Services, you must complete the registration process and create an account. BtcEX reserves the right to refuse to allow a user to open an Account for any reason, or to limit the number of Accounts a user can establish, all at BtcEX’s sole discretion. BtcEX may also offer trial registration for the Service. BtcEX currently offers the following account classes (collectively, an “Account”) :</p>
									<ul>
										<li>
											<i className="fa fa-circle"></i>
											<p>The regular account offers users currency exchange services, allowing users to withdraw and deposit USD/HKD into their BtcEX accounts with certain restrictions, as further set forth above in Section 1 (the “Regular Account”). To create a Regular Account, you must provide certain information as requested by BtcEX , including a user name and password of your choice, your valid email address, your ID number, your bank account, your address of residence, your date of birth and your phone number.</p>
										</li>
										<li>
											<i className="fa fa-circle"></i>
											<p>The VIP account offers users the same currency exchange services, but lifts most restrictions imposed on the Regular account, as further set forth above in Section 1 (the “VIP Account”). To create a VIP Account, you must provide certain information as requested by BtcEX , including a user name and password of your choice, your valid email address, your ID number, your bank account,your address of residence, your date of birth and your phone number. Additionally, you will be requested to verify your identity by the following means:</p>
										</li>
										<li>
											<i className="fa fa-circle"></i>
											<p>Connecting to the Site by means of a social media account.</p>
										</li>
										<li>
											<i className="fa fa-circle"></i>
											<p>An identity card issued by the Hong Kong authorities or authorities of the People's Republic of China, by provision of either an ID card, drivers license or a passport.</p>
										</li>
										<li>
											<i className="fa fa-circle"></i>
											<p>Proof of residence by provision of an electricity, gas or phone bill or a property tax invoice issued to your name.</p>
										</li>
									</ul>
									<p>You must provide truthful and accurate information, and you must keep such information up-to-date. You shall not create an Account using a false identity or information, or on behalf of someone other than yourself. BtcEX will not be responsible for any communications you do not receive because your registration information is not up-to-date.</p>
									<p>You should not reveal your account or security information to third parties. By disclosing your password to third parties you jeopardize the security of your Account. You are responsible for keeping your password and any other registration information secure, and shall immediately notify BtcEX of any unauthorized use of your Account or password. You are fully and solely responsible for the security of your computer system and all activity on your Account, even if such activities were not committed by you. BtcEX will not be liable for any losses or damage arising from unauthorized use of your Account or password, and you agree to indemnify and hold BtcEX harmless for any improper or illegal use of your Account, including any mail sent and any charges and taxes incurred, unless you have notified us via e-mail to <a href="mailto:info@btcex.pro">info@btcex.pro</a> that your Account has been compromised, that you have modified your login information, have requested us to block access to it, and we have had a reasonable amount of time to review and act on such notification. This includes illegal or improper use by someone to whom you have given permission to use your Account. We do not police for, and cannot guarantee that we will learn of or prevent, any inappropriate use of the Services or Site.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Indemnity : </h3>
									<p>You hereby indemnify Tradix.com and undertake to keep Tradix.com indemnified
									against any losses, damages, costs, liabilities, and/or expenses (including without
									limitation legal expenses) and any amounts paid by Tradix.com
									to a third party in settlement of a claim or dispute on the advice of Tradix.com’s
									legal advisers) incurred or suffered by Tradix.com arising out of any breach by you
									of any provision of these terms and conditions,
									or arising out of any claim that you have breachedany provision of these terms and
									conditions.
                                </p>
								</div>

								<div className="terms_condition-text">
									<h3>Termination of Account : </h3>
									<p>You agree that BtcEX may for any reason, in its sole discretion and without notice, terminate your Account. Grounds for such termination may include (but are not limited to) (i) violation of the letter or spirit of these Terms, (ii) fraudulent, harassing or abusive behavior, or (iii) behavior that is harmful to other users, third parties, or the business interests of BtcEX. In the event that your Account is terminated, BtcEX will provide you with access to the Bitcoins remaining in your account on the date of termination, unless BtcEX determines in its reasonable discretion that such Bitcoins are required to reimburse BtcEX for damages caused by your breach of these Terms or pursuant to legal advice, which determines that return of such Bitcoins does not comply with applicable law or regulations. BtcEX shall, upon your request, terminate your Account. Furthermore, BtcEX reserves the right to terminate any Account that has not been active for 180 days.</p>
									<p>If BtcEX believes, in its sole discretion, that a violation of these Terms or any illegal or inappropriate behavior has occurred, we may take any other corrective action we deem appropriate. We reserve the right to investigate suspected violations of these Terms or illegal and inappropriate behavior on the Services or Site. We will fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity of anyone believed to have violated these Terms or to have engaged in illegal behavior on the Site, including disclosing to such law enforcement authorities any information and data in our possession. You may request termination of your BtcEX Account at any time and for any reason by sending an email to <a href="mailto:info@btcex.pro">info@btcex.pro</a>. Any suspension, termination, or cancellation shall not affect your obligations to BtcEX under these Terms (including but not limited to your payment obligations, or the provisions of these terms regarding intellectual property, indemnification and limitation of BtcEX’s liability).</p>
								</div>

								<div className="terms_condition-text">
									<h3>Payment Terms : </h3>
									<p>In consideration for the use of the Site or the Services, you shall make payment to BtcEX as set forth separately by BtcEX Fees. BtcEX may update these payment terms at any time and such change shall take immediate effect. You shall be notified of any such change by written notice, which shall be sent to you directly by e-mail or by notice in your account, or by notice on the main page of the Site. You shall make payments hereunder free and clear, and without deduction or withholding.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Transfers : </h3>
									<p>The Site may allow you to perform transfers or payments using Bitcoins. You are solely responsible for all information entered in performing such transaction, and BtcEX shall not have any liability for incorrect or inaccurate information provided by you.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Taxes : </h3>
									<p>It is your responsibility to determine what, if any, taxes apply to your transactions, and it is your responsibility to collect, report and remit the correct tax to the appropriate tax authority. BtcEX is not responsible for determining whether taxes apply to your transaction, or for collecting, reporting or remitting any taxes arising from any transaction. You are hereby advised to consult in such matters with certified public accountants or lawyers. You declare and acknowledge that BtcEX may deduct and/or withhold taxes at source and/or surcharges from your balance, including withholding taxes at source, if required by applicable law, and you will not have any complaints about the said deductions and/or withholdings against BtcEX. As that in the case that BtcEX or its employees or its representatives will be required by the tax authorities in Hong Kong and / or abroad, to pay any taxes or to bear the financial burden for which, in respect of your activity on the services and which originally were not deducted or withheld from your account by BtcEX for any reason, you agree to indemnify and hold BtcEX harmless within 14 business days, for the full extent of the payment or the burden mentioned above that BtcEX will be required to pay or to bear, including linkage differentials, interest and penalties imposed on BtcEX or its representatives, if any.</p>
									<p>You agree to receive invoices and digital documents, directly to your Account, by e-mail and/or by message to your account.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Intellectual Property: </h3>
									<p>BtcEX and its licensors own the Services and Site, including all worldwide intellectual property rights in the Site and its content, trademarks, service marks, and logos contained therein. You may not copy, further develop, reproduce, republish, modify, alter download, post, broadcast, transmit or otherwise use the Site, Services or any content, including any research and analysis, except as expressly permitted by BtcEX in writing. You will not remove, alter or conceal any copyright, trademark, service mark or other proprietary rights notices incorporated in the Site or content. All trademarks are trademarks or registered trademarks of their respective owners. Nothing in these Terms grants you any right to use any trademark, service mark, logo, or trade name of BtcEX or any third party.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Rules of Use : </h3>
									<p>You may not, nor may you assist other parties to (a) copy, modify, or create derivative works of the Services, Site or Content, (b) reverse-engineer, disassemble, or attempt to derive the source code of the software used to provide the Site or Services, (c) attempt to disable or circumvent any security or access control mechanism of the Site or Services, or (d) design or assist in designing cheats, exploits, automation software, bots, hacks, mods or any other unauthorized third-party software to modify or interfere with the Services.</p>
									<p>You agree that you will not: (a) solicit another person’s password or other personal information under false pretenses; (b) impersonate another user or otherwise misrepresent yourself in any manner whether to another user, to us, or otherwise; (c) violate the legal rights of others, including defaming, abuse, stalking or threatening users; (d) infringe the intellectual property rights, privacy rights, or moral rights of any third party or BtcEX, (e) violate any applicable law, rule or regulation, (f) circumvent, disable, or otherwise interfere with security-related features of the Site or Services or features that prevent or restrict use or copying of any Site content; or (g) take any action that imposes an unreasonable or disproportionately large load on our infrastructure; or detrimentally interfere with, intercept, or expropriate any system, data, or information. Violation of any of these prohibitions shall be cause for immediate termination of your account, and the taking of legal actions on the part of BtcEX according to the law.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Disclaimers :</h3>
									<p>BtcEX makes reasonable efforts to ensure that its technology keeps your Bitcoins safe and secure. However, no method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. Except as expressly set forth herein, your use of the Site and Services is at your sole discretion and risk. The Site, and Services are provided on an AS IS and AS AVAILABLE basis without warranties of any kind. BtcEX expressly disclaims all implied or statutory warranties of any kind relating to the Site and Services, including without limitation the warranties of title, merchantability, fitness for a particular purpose, non-infringement of proprietary rights, course of dealing or course of performance. BtcEX does not give any advice regarding the risk or suitability of any trade, transaction or investment strategy. BtcEX assumes no responsibility for investment or exchange choices made by you and you acknowledge that you are solely responsible for the assessment of your investment or exchange choices and strategies. You understand that the Services provide secure storage services for Bitcoins, inclusive of a venue for currency exchange with other users. You shall not hold BtcEX or any of its employees or affiliates liable for any investments and exchange choices made by you. No advice or information, whether oral or written, obtained by you from BtcEX, shall create any warranty not expressly stated in these Terms. If you choose to rely on such information, you do so solely at your own risk. Some states or jurisdictions do not allow the exclusion of certain warranties. Accordingly, some of the above exclusions may not apply to you.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Limitation Of Liability :</h3>
									<p>BtcEX does not guarantee the value of Bitcoin. You acknowledge that the price or value of Bitcoin can change rapidly, decrease, and potentially even fall to zero. You acknowledge that holding or using Bitcoin is high risk.</p>
									<p>BtcEX is not responsible for any problems or technical malfunction of any telephone network or lines, computer online systems, servers or providers, computer equipment, software, failure of any email due to technical problems or traffic congestion on the Internet or on any of the Site or Services or combination thereof, including any injury or damage to users or to any person's computer related to or resulting from participation or downloading materials in connection with the Site or Services. Under no circumstances shall BtcEX be responsible for the conduct of third parties, including any users of the Site or Services, whether online or offline, and operators of external sites.</p>
									<p>In no event shall BtcEX or any of its officers, directors, employees, or agents be liable to you for any indirect, incidental, special, punitive, or consequential damages, arising out of or in connection with your use of the Site or Services, whether or not the damages are foreseeable and whether or not BtcEX has been advised of the possibility of such damages. The foregoing limitation of liability shall apply to the fullest extent permitted by law in the applicable jurisdiction. In no event shall BtcEX's cumulative liability to you exceed the higher of either (a) the amount required to return any Bitcoins to you that are lost or unavailable as a result of BtcEX ’s intentional misconduct or gross negligence or (b) amounts paid by you directly to BtcEX in the 12 months preceding the applicable claim.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Linked Sites :</h3>
									<p>The Site or Services may contain links or advertisements to websites, services or resources belonging to third parties. Such websites may also include links to the Services or Site. We urge our users to exercise caution in using third party sites. We have no control over such sites, services or resources and all use of the foregoing is at your own risk. Additionally, we do not accept responsibility for any payments processed or submitted through such third party sites. You acknowledge and agree that we are not responsible for the availability of such websites or resources, which may collect data or solicit Personal Information from you, and we are not responsible or liable for any advertising, products, or other materials available on such websites. Third parties provide their own terms and conditions and privacy policies and any claims in regard to the services provided or content contained therein shall be directed to such third party.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Indemnification :</h3>
									<p>You agree to indemnify, defend, and hold harmless BtcEX and its employees, directors, officers, subcontractors and agents, against any and all claims, damages, or costs or expenses (including reasonable attorneys’ fees) that arise directly or indirectly from: (a) breach of these Terms by you or anyone using your computer or password; (b) your violation of any law or regulation; (c) your infringement of any right of any third party; and (d) any other matter for which you are responsible hereunder or under law. You agree that your use of the Site (including, without limitation, provision of services in connection with the Site) shall be in compliance with all applicable laws, regulations and guidelines.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Compliance :</h3>
									<p>Bitcoin is an innovative payment method. Laws and regulations regarding Bitcoins and services in respect of Bitcoins may change without notice. BtcEX will comply with all applicable laws and regulations. You understand that any laws and regulations may require changes in the Services or these Terms and, notwithstanding anything to the contrary herein, BtcEX may modify the Services or Terms at any time with immediate effect as it believes in good faith is necessary to comply with applicable law or regulations. BtcEX may perform an orderly shutdown of the Site prior to new law or regulations going in effect. You agree to comply with all applicable laws and regulation including, without limitation, completing any required forms or providing any required information (including information required under any money laundering regulations and/or under any tax laws) as reasonably required by BtcEX.</p>
									<p>Failure to comply with applicable law or regulations, or the failure to provide required documentation or information may, notwithstanding anything to the contrary in these Terms, result in the termination of your Account and, to the extent required by law or as BtcEX believes is necessary to protect its own commercial and legal interests, in the forfeiture of your Bitcoins or the application of temporary restrictions thereto in the sole discretion of BtcEX.</p>
									<p>You expressly authorize BtcEX to make any inquiries necessary to verify your identity.</p>
								</div>

								<div className="terms_condition-text">
									<h3>Miscellaneous :</h3>
									<p>These Terms shall be governed by the laws of Hong Kong, exclusive of its choice of law rules, and without regard to the United Nations Convention on the International Sales of Goods. Your conduct may also be subject to other local, state, and national laws. Any dispute arising under these Terms or concerning the Service shall be finally settled on an individual basis before a single arbitrator administered by, and in accordance with the arbitration rules of, the International Chamber of Commerce. The arbitration shall take place in Hong Kong, and the language of the arbitration shall be English. You may not advance any class action claims against arbitration, and by using the Site or the Services you agree to waive your rights to advance any such class actions claims.</p>
									<p>Any cause of action against arbitration must be brought within one (1) year of the date such cause of action arose. In the event that any provision of these Terms is held to be unenforceable, such provision shall be replaced with an enforceable provision which most closely achieves the effect of the original provision, and the remaining terms of these Terms shall remain in full force and effect. Nothing in these Terms creates any agency, employment, joint venture, or partnership relationship between you and BtcEX or enables you to act on behalf of BtcEX. Except as may be expressly stated in these Terms, these Terms constitute the entire agreement between BtcEX and you pertaining to the subject matter hereof.</p>
									<p>Any notices that we may be required to provide to you, whether under law or according to these Terms, may be provided by BtcEX to any contact information you have provided in your account information, including through email. You expressly agree to the receipt of such communications and notices in such manner.</p>
									<p>We may at any time, without prior notice, assign any and all of our rights under these Terms to any other entity. You may not assign any rights hereunder without our prior written consent. Nothing contained in these terms shall be construed to limit the actions or remedies available to BtcEX with respect to any prohibited activity or conduct. Non-enforcement of any term of these Terms does not constitute consent or waiver, and BtcEX reserves the right to enforce such term at its sole discretion. No waiver of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Bottom />
			<Footer1 />
		</>
	)
}

export default TermsCondition;