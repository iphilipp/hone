var orgList = [
	{"id": 0, "shortName": "chio", "fullName": "Chi Omega", "category": "Greek Life: Sorority", "coverPhoto": "CHIOCover.jpg", "tags": ["greek", "sorority", "social", "women"], "description": "Chi Omega is a Panhellenic sorority forever committed to its founding purposes of friendship, personal integrity, service to others, academic excellence and intellectual pursuits, community and campus involvement, and personal and career development." },
	{"id": 1, "shortName": "sigep", "fullName": "Sigma Phi Epsilon", "category": "Greek Life: Fraternity", "coverPhoto": "SIGEPCover.jpg", "tags": ["greek", "fraternity", "social", "men"], "description": "Sigma Phi Epsilon, or SigEp, was founded on the three cardinal principles of Virtue, Diligence, and Brotherly Love. The men of SigEp strive to stay proactive and self-sustaining while working with their brothers to build a constantly evolving fraternity."},
	{"id": 2, "shortName": "phide", "fullName": "Phi Delta Epsilon", "category": "Pre-Professional: Medical", "coverPhoto": "PHIDECover.jpg", "tags": ["pre-professional", "service", "medical"], "description": "To prepare our members for a career in medicine and to promote fraternity amongst our members."},
	{"id": 3, "shortName": "apo", "fullName": "Alpha Phi Omega", "category": "Service", "coverPhoto": "APOCover.jpg", "tags": ["greek", "service", "men", "women"], "description": ""},
	{"id": 4, "shortName": "cd", "fullName": "College Democrats", "category": "Political", "coverPhoto": "CDCover.jpg", "tags": ["political", "pre-professional", "medical"], "description": "The purpose of the College Democrats, a non-profit organization, is to educate students about the philosophy of the Democratic Party, promote campus discussion of issues of concern to students and the nation at large, foster involvement in political movements and affect political change on a local, state and national level."},
	{"id": 5, "shortName": "snap", "fullName": "Student Network for Analog Photography", "category": "Art", "coverPhoto": "SNAPCover.jpg", "tags": ["photography", "cultural"], "description": "We want to bring together students in an effort to revive the \"dying\" art that is analog photography. This organization aims to create an open platform for students to develop and build upon skills in film photography. Students will be encouraged to join, regardless of level of experience, in hopes that a network can be created for members to organize photoshoots, share work and learn about early analog technologies in photo development and camera mechanism."},
	{"id": 6, "shortName": "ucs", "fullName": "Undergraduate Communication Society", "category": "Pre-Professional: Communication", "coverPhoto": "UCSCover.jpg", "tags": ["pre-professional", "communication"], "description": "The Undergraduate Communication Society (UCS) is an organization run by and for students interested in communication. The UCS conducts career panels, field trips (in which we are not responsible for member's transportation and utilize public transportation throughout San Diego) and social events for members, often including alumni and guest speakers from the communication field."},
	{"id": 7, "shortName": "vsa", "fullName": "Vietnamese Student Association", "category": "Cultural", "coverPhoto": "VSACover.jpg", "tags": ["cultural", "social", "women", "men"], "description": "To promote and preserve the Vietnamese culture and awareness among the UCSD students through various cultural, social, community, and educational events."},
	{"id": 8, "shortName": "aopi", "fullName": "Alpha Omicron Pi", "category": "Greek Life: Sorority", "coverPhoto": "AOPICover.jpg", "tags": ["greek", "sorority", "women"], "description": "The object of Alpha Omicron Pi Women’s Fraternity shall be to encourage a spirit of Fraternity and love among its members; to stand at all times for character, dignity, scholarship, and college loyalty; to strive for and support the best interest of the colleges and universities in which chapters are installed, and in no way to disregard, injure, or sacrifice those interests for the sake of prestige or advancement of the Fraternity or any of its chapters."},
	{"id": 9, "shortName": "aslc", "fullName": "American Sign Language Club", "category": "Cultural", "coverPhoto": "ASLCCover.jpg", "tags": ["social", "cultural"], "description": "The ASL Club strives to promote the use of American Sign Language while spreading awareness of the culture, history, and perspectives of the Deaf and Hard-of-Hearing community. We seek to enhance the education of UCSD students as well as the surrounding community by conducting meetings and events that bring this community together in an open and safe environment that stimulates learning."},
	{"id": 10, "shortName": "bsu", "fullName": "Black Student Union", "category": "Cultural", "coverPhoto": "BSUCover.jpg", "tags": ["cultural", "social", "political"], "description": "Conceived in 1967, the Black Student Union at UC San Diego is charged with four fundamental responsibilities: 1. Access, retention, and yield programming to inspire, enlighten, to build unity, to challenge, and to perpetuate the ideologies of the Black Student Union at UCSD 2. To support the efforts of those organizations which perpetuate the ideologies of the Black Student Union 3. To assist in providing an environment that is conducive to academic excellence amongst the Black student population 4. To be accountable through representation. "},
	{"id": 11, "shortName": "ck", "fullName": "Camp Kesem", "category": "Service", "coverPhoto": "CKCover.jpg", "tags": ["social", "community", "fundraiser", "service"], "description": "Camp Kesem at UCSD provides a free summer camp to children ages 6-18 in the San Diego community who have/had a parent with cancer. "},
	{"id": 12, "shortName": "cki", "fullName": "Circle K. International", "category": "Service", "coverPhoto": "CKICover.jpg", "tags": ["cultural"], "description": "Circle K International is comprised of university students who are responsible citizens and leaders with a lifelong commitment to community service worldwide. Through the three tenets of Service, Leadership, and Fellowship, Circle K inspires people to better our world, following the motto of Live to Serve, Love to Serve. Circle K provides constructive opportunities for students to become involved on their campuses and communities through service work to others in need."},
	{"id": 13, "shortName": "dau", "fullName": "Design at UCSD", "category": "Pre-Professional: Design", "coverPhoto": "DAUCover.jpg", "tags": ["pre-professional", "design"], "description": "To create and foster an interdisciplinary community of human-centered design-minded students, including those interested in Cognitive Science, User Experience, Interaction Design, Human Computer Interaction, Ubiquitous Computing, and Design Thinking in general. To provide workshops, lectures, a design space, support for design competition entries, and networking opportunities for those interested in the aforementioned fields; to be a vehicle to propel students in the direction of their respective goals, whether they be to enter industry, pursue academia, or to just learn more about design; and to forge/maintain connections with alumni, local communities, and companies. "},
	{"id": 14, "shortName": "ggg", "fullName": "Greeks Gone Green", "category": "Service", "coverPhoto": "GGGCOver.jpg", "tags": ["greek", "fraternity", "sorority", "funraiser", "community", "service"], "description": "Greeks Gone Green is a nonprofit organization dedicated to the three G’s: Greek unity through community involvement; Global, regional and local environmental awareness; and Gateways to sustainability within UCSD. Greeks Gone Green promotes “green” thinking and solutions to not only Greek organizations but also to the greater UCSD community. Greeks Gone Green is a student-run organization comprised of Greek affiliated students dedicated to enhancing environmental awareness within the Greek community and helping this community to operate in ways that are environmentally responsible. "},
	{"id": 15, "shortName": "kp", "fullName": "Kaibigang Pilipin@", "category": "Cultural", "coverPhoto": "KPCover.jpg", "tags": ["cultural", "service"], "description": "To provide a space in which people can learn, share, educate, and appreciate Pilipino/a culture. "},
	{"id": 16, "shortName": "nsu", "fullName": "Nikkei Student Union", "category": "Cultural", "coverPhoto": "NSUCover.jpg", "tags": ["cultural", "service"], "description": "To allow Japanese American, Japanese and any other interested student to interact in a socially conductive environment. To promote awareness of Japanese American and Japanese culture, history and issues on the UCSD campus. To provide a link between the Japanese American community on the UCSD campus and the Japanese American community in the areas surrounding UCSD."},
	{"id": 17, "shortName": "piab", "fullName": "Project in a Box", "category": "Pre-Professional: Engineering", "coverPhoto": "PIABCover.jpg", "tags": ["pre-professional", "engineering"], "description": "Project in a Box's is a student-run engineering organization. We foster a community of makers and engineers in order to empower engineering innovation, ignite passion, and kick start students’ engineering careers. We embody this vision through our development of hands-on projects, making them accessible to students, incorporating hands-on into engineering education, and providing students with an opportunity to bring theory to practice. We believe that if you can dream it, you can build it. "},
	{"id": 18, "shortName": "tt", "fullName": "Theta Tau", "category": "Pre-Professional: Engineering", "coverPhoto": "TTCover.jpg", "tags": ["pre-professional", "engineering"], "description": "The purpose of Theta Tau is to build a strong fraternal bond and maintain high standards of professionalism among fellow members. Theta Tau aims to provide its members the social and professional development necessary to succeed during and after their college years. "},
	{"id": 19, "shortName": "treo", "fullName": "Triton Real Estate Organization", "category": "Pre-Professional: Real Estate", "coverPhoto": "TREOCover.jpg", "tags": ["pre-professional", "real-estate"], "description": "The purpose of this organization is to promote students' understanding and knowledge in the field of Real Estate. This includes many facets of Real Estate such as property management, investment and development. It also serves to establish and strengthen the network between students and business professionals within our community."},
	{"id": 21, "shortName": "wib", "fullName": "Women in Business", "category": "Pre-Professional: Business", "coverPhoto": "WIBCover.jpg", "tags": ["pre-professional", "business", "women"], "description": "UCSD Women In Business aims to empower women of all backgrounds to become leaders in today's ever-changing world. Through business education, networking, mentorship, leadership development workshops, and social events, members will have the chance to join a community dedicated to helping one another succeed. By encouraging both professional and personal growth, UCSD WIB will give women pursuing business the chance to affect change not only within themselves and the university, but in the world they seek beyond. "},
	/*{"id": 22, "shortName": "", "fullName": "", "category": "", "coverPhoto": "", "tags": ["", ""], "description": ""},*/
];
