//fake databases
var tagList = [
  {"id": 0, "tag": "asian"},
  {"id": 1, "tag": "business"},
  {"id": 2, "tag":"communication"},
  {"id": 3, "tag": "community"},
  {"id": 4, "tag": "cultural"},
  {"id": 5, "tag": "design"},
  {"id": 6, "tag": "engineering"},
  {"id": 7, "tag": "food"},
  {"id": 8, "tag": "fraternity"},
  {"id": 9, "tag": "fundraiser"},
  {"id": 10, "tag": "gbm"},
  {"id": 11, "tag": "greek"},
  {"id": 12, "tag": "medical"},
  {"id": 13, "tag": "men"},
  {"id": 14, "tag": "music"},
  {"id": 15, "tag": "photography"},
  {"id": 16, "tag": "political"},
  {"id": 17, "tag": "pre-professional"},
  {"id": 18, "tag": "real-estate"},
  {"id": 19, "tag": "service"},
  {"id": 20, "tag": "social"},
  {"id": 21, "tag": "sorority"},
  {"id": 22, "tag": "women"}
];

var eventList = [
  {"id": 0, "name": "Make-A-Wish Meet-up", "hostOrg": "Chi Omega", "date": "2018-11-05T12:00", "coverPhoto": "", "tags": ["sorority", "women", "fundraiser", "greek", "service", "social"], "description": "Meet up with your fellow Chi-Os in order to celebrate Make-A-Wish!"},
  {"id": 1, "name": "Chapter Meeting", "hostOrg": "Chi Omega", "date": "2018-11-11T18:00", "coverPhoto": "", "tags": ["greek", "gbm", "sorority", "women"], "description": "Monday Meeting for Chi-Os"},
  {"id": 2, "name": "Chi-Olympics", "hostOrg": "Chi Omega", "date": "2018-11-29T14:00", "coverPhoto": "", "tags": ["greek", "service", "sorority", "women", "fundraising"], "description": "Philanthropy event put on by Chi Omega. This event is open to everyone in Greek life and those no in Greek life"},
  {"id": 3, "name": "Rush Week", "hostOrg": "Sigma Phi Epsilon", "date": "2018-10-01T12:00", "coverPhoto": "", "tags": ["fraternity", "greek", "men"], "description": "Rush Week for new members of Sigma Phi Epsilon"},
  {"id": 4, "name": "Rush Week", "hostOrg": "Chi Omega", "date": "2018-10-01T12:00", "coverPhoto": "", "tags": ["sorority", "greek", "women"], "description": "Rush Week for new members of Chi Omega"},
  {"id": 5, "name": "GBM", "hostOrg": "Alpha Phi Omega", "date": "2018-12-05T18:00", "coverPhoto": "", "tags": ["gbm", "service"], "description": "GMB for Alpha Phi Omega Members"},
  {"id": 6, "name": "Fundraiser", "hostOrg": "Alpha Phi Omega", "date": "2018-12-10T15:00", "coverPhoto": "", "tags": ["fundraiser", "service"], "description": "Funraiser supporting Alpha Phi Omega. It is open to everyone and we encourage you to come!"},
  {"id": 7, "name": "Laser Tagging", "hostOrg": "Alpha Phi Omega", "date": "2018-12-12T20:00", "coverPhoto": "", "tags": ["social", "service"], "description": "Laser Tagging for all members of Alpha Phi Omega"},
  {"id": 8, "name": "Meet and Greet", "hostOrg": "Alpha Phi Omega", "date": "2018-10-10T16:00", "coverPhoto": "", "tags": ["social"], "description": "Meeting your fellow Alpha Phi Omegas and making new friends!"},
  {"id": 9, "name": "GBM", "hostOrg": "College Democrats", "date": "2018-12-12T18:00", "coverPhoto": "", "tags": ["gbm", "pre-professional", "service"], "description": "GBM for College Democrats club and its members"},
  {"id": 10, "name": "Guest Speaker", "hostOrg": "College Democrats", "date": "2018-12-19T18:00", "coverPhoto": "", "tags": ["pre-professional", "service"], "description": "Guest Speaker comming to a College Democrats speaking about how you can get involved with politics."},
  {"id": 11, "name": "Meet and Greet the Exec Board", "hostOrg": "College Democrats", "date": "2018-12-20T16:00", "coverPhoto": "", "tags": ["pre-professional", "social"], "description": "Meeting the Executive Board who runs College Democrats"},
  {"id": 12, "name": "GBM", "hostOrg": "College Democrats", "date": "2018-11-11T18:00", "coverPhoto": "", "tags": ["gbm", "pre-professional"], "description": "General Body Meeting for College Democrats"},
  {"id": 13, "name": "GBM", "hostOrg": "SNAP at UCSD", "date": "2018-12-05T18:00", "coverPhoto": "", "tags": ["gbm", "photography", "social"], "description": "General Body Meeting for SNAP at UCSD members and those intersted are more than welcome to come!"},
  {"id": 14, "name": "Hiking and Photograph", "hostOrg": "SNAP at UCSD", "date": "2018-12-07T10:00", "coverPhoto": "", "tags": ["social", "photography"], "description": "Social event for members and non members to come learn about photography while hiking and enjoying the view!"},
  {"id": 15, "name": "Meet the Executive Board", "hostOrg": "SNAP at UCSD", "date": "2018-12-14T15:00", "coverPhoto": "", "tags": ["photography"], "description": "Meeting the Executive Board of SNAP at UCSD"},
  {"id": 16, "name": "Fundraiser", "hostOrg": "SNAP at UCSD", "date": "2018-10-01T11:00", "coverPhoto": "", "tags": ["fundraiser", "photography"], "description": "Fundraiser selling Portos to support your local film photography club"},
  {"id": 17, "name": "GBM", "hostOrg": "Undergraduate Communications Society", "date": "2018-12-01T19:00", "coverPhoto": "", "tags": ["gbm", "pre-professional", "communication"], "description": "General Body Meeting for Undergraduate Communication Society members. Open to all, comm major or not, we welcome you!"},
  {"id": 18, "name": "Meet the Professionals", "hostOrg": "Undergraduat Communications Society", "date": "2018-12-03T11:00", "coverPhoto": "", "tags": ["pre-professional", "communication"], "description": "Meeting professions in your field!"},
  {"id": 19, "name": "Making Cookies and Friends", "hostOrg": "Undergraduate Communications Society", "date": "2018-12-12T17:00", "coverPhoto": "", "tags": ["social", "communication"], "description": "Come and socialize with members of UCS as you make new friends who may be in your communication class!"},
  {"id": 20, "name": "Meet and Greet", "hostOrg": "Undergraduate Communications Society", "date": "2018-10-10T20:00", "coverPhoto": "", "tags": ["social", "communication"], "description": "Meeting the newest members of UCS as well as introducing the Executive board to the new members!"},
  {"id": 21, "name": "GBM", "hostOrg": "Vietnamese Student Association", "date": "2018-12-11T19:00", "coverPhoto": "", "tags": ["gbm", "asian", "community", "cultural"], "description": "General Body Meeting for Vietnamese Student Association members"},
  {"id": 22, "name": "Social", "hostOrg": "Vietnamese Student Association", "date": "2018-12-13T19:00", "coverPhoto": "", "tags": ["asian", "social", "community", "cultural"], "description": "Meet other students in Vietnamese Student Association!"},
  {"id": 23, "name": "Bowling with your Family", "hostOrg": "Vietnamese Student Association", "date": "2018-12-15T18:00", "coverPhoto": "", "tags": ["asian", "community", "cultural", "social"], "description": "Bond with your big and little while having fun bowling!"},
  {"id": 24, "name": "GBM", "hostOrg": "Vietnamese Student Association", "date": "2018-11-11T17:00", "coverPhoto": "", "tags": ["asian", "cultural", "gbm", "social"], "description": "Learn more about Vietnamese Student Association and its goal at GBM."},
  {"id": 25, "name": "Monday Meeting", "hostOrg": "Alpha Omicron Pi", "date": "2018-11-20T19:00", "coverPhoto": "", "tags": ["greek", "sorority", "women"], "description": "Attend Chapter meeting to stay updated on upcoming events."},
  {"id": 26, "name": "Meeting the Alumni", "hostOrg": "Alpha Omicron Pi", "date": "2018-12-05T20:00", "coverPhoto": "", "tags": ["greek", "sorority", "social", "women"], "description": "Network with AOPi almunae."},
  {"id": 27, "name": "Fundraiser", "hostOrg": "Alpha Omicron Pi", "date": "2018-12-21T14:00", "coverPhoto": "", "tags": ["greek", "sorority", "social", "fundraiser", "women"], "description": "Support AOPi's philanthropic cause by coming out to the fundraiser."},
  {"id": 28, "name": "GBM", "hostOrg": "American Sign Language Club", "date": "2018-11-10T16:00", "coverPhoto": "", "tags": ["gbm", "cultural"], "description": "Come out and meet members of the American Sign Language Club at GBM."},
  {"id": 29, "name": "Bowling", "hostOrg": "American Sign Language Club", "date": "2018-11-18T15:00", "coverPhoto": "", "tags": ["cultural", "social"], "description": "Hang out with members of American Sign Language Club through a fun night of bowling."},
  {"id": 30, "name": "Meeting the Professionals", "hostOrg": "American Sign Language Club", "date": "2018-12-20T12:00", "coverPhoto": "", "tags": ["cultural", "social"], "description": "Network with professionals working with ASL in their respective fields."},
  {"id": 31, "name": "GBM", "hostOrg": "Black Student Union", "date": "2018-11-15T13:00", "coverPhoto": "", "tags": ["gbm", "community", "cultural", "political"], "description": "Learn more about Black Student Union and meet members at GBM."},
  {"id": 32, "name": "Meeting Alumni", "hostOrg": "Black Student Union", "date": "2018-11-20T14:00", "coverPhoto": "", "tags": ["community", "cultural", "political"], "description": "Network with Black Student Union Alumni."},
  {"id": 33, "name": "Social", "hostOrg": "Black Student Union", "date": "2018-12-5T16:00", "coverPhoto": "", "tags": ["social", "community", "cultural", "political"], "description": "Hang out with members of Black Student Union."},
  {"id": 34, "name": "Fundraiser", "hostOrg": "Circle K", "date": "2018-11-12T18:30", "coverPhoto": "", "tags": ["social", "community", "fundraiser", "service"], "description": "Support Circle K by coming out to the fundraiser."},
  {"id": 35, "name": "GBM", "hostOrg": "Circle K", "date": "2018-11-20T16:00", "coverPhoto": "", "tags": ["gbm", "social", "community", "service"], "description": "Meet members of Circle K and learn more about their goals as an org by attending GBM."},
  {"id": 36, "name": "Meeting the Children", "hostOrg": "Circle K", "date": "2018-12-3T12:00", "coverPhoto": "", "tags": ["service", "community"], "description": "Learn more about the community service Circle K does for the local community."},
  {"id": 37, "name": "Big/Little Reveal", "hostOrg": "Circle K", "date": "2018-11-20T14:00", "coverPhoto": "", "tags": ["community", "cultural", "service"], "description": "Find your big, piCircle K up your little on the best day of the year: Big/Little Reveal!"},
  {"id": 38, "name": "GBM", "hostOrg": "Circle K", "date": "2018-11-21T11:30", "coverPhoto": "", "tags": ["gbm", "community", "service"], "description": "Meet members of Circle K at GBM."},
  {"id": 39, "name": "Laser Tag & Churros", "hostOrg": "Circle K", "date": "2018-12-01T13:30", "coverPhoto": "", "tags": ["social", "community"], "description": "Join members of Circle K for a night of laser tag and churros."},
  {"id": 40, "name": "GBM", "hostOrg": "Design at UCSD", "date": "2018-11-20T12:00", "coverPhoto": "", "tags": ["pre-professional", "gbm", "design"], "description": "Meet the members of Design at UCSD and learn more about the organization's goals."},
  {"id": 41, "name": "Resume Workshop", "hostOrg": "Design at UCSD", "date": "2018-11-29T15:00", "coverPhoto": "", "tags": ["pre-professional", "design"], "description": "Bring your resume to receive help on furthering your career."},
  {"id": 42, "name": "Fundraiser", "hostOrg": "Design at UCSD", "date": "2018-12-11T09:00", "coverPhoto": "", "tags": ["fundraiser", "pre-professional", "design"], "description": "Support Design at UCSD by coming out for the fundraiser."},
  {"id": 43, "name": "Greek Meet Up", "hostOrg": "Greek Gone Green", "date": "2018-11-20T08:00", "coverPhoto": "", "tags": ["greek", "social", "service", "fraternity", "sorority"], "description": "Come out to meet other students in Greek Life passionate about sustainability."},
  {"id": 44, "name": "Fundraiser", "hostOrg": "Greeks Gone Green", "date": "2018-12-13T12:00", "coverPhoto": "", "tags": ["fundraiser", "greek", "social", "service", "fraternity", "sorority"], "description": "Support Greeks Gone Green by coming out to their upcoming fundraiser."},
  {"id": 45, "name": "Recycling Trip", "hostOrg": "Greeks Gone Green", "date": "2018-12-20T13:00", "coverPhoto": "", "tags": ["service", "community", "funraiser", "greek"], "description": "Help the environment by attending Greeks Gone Green's recycling trip event."},
  {"id": 46, "name": "Family Time", "hostOrg": "Kaibigang Pilipin@", "date": "2018-11-11T09:00", "coverPhoto": "", "tags": ["community", "asian", "cultural", "social"], "description": "Bond with your Kaibigang Pilipin@ family through multiple activities."},
  {"id": 47, "name": "GBM", "hostOrg": "Kaibigang Pilipin@", "date": "2018-11-12T07:00", "coverPhoto": "", "tags": ["gbm", "community", "asian", "cultural", "social"], "description": "Meet other members of Kaibigang Pilipin@ and learn about Kaibigang Pilipin@'s goals as an organization."},
  {"id": 48, "name": "Fundraiser on Library Walk", "hostOrg": "Kaibigang Pilipin@", "date": "2018-12-01T12:00", "coverPhoto": "", "tags": ["funraiser", "community", "asian", "cultural", "social"], "description": "Come out to the upcoming fundraiser to support Kaibigang Pilipin@."},
  {"id": 49, "name": "GBM", "hostOrg": "Nikkei Student Union", "date": "2018-11-20T14:00", "coverPhoto": "", "tags": ["gbm", "cultural", "asian"], "description": ""},
  {"id": 50, "name": "Library Walk", "hostOrg": "Nikkei Student Union", "date": "2018-12-05T09:00", "coverPhoto": "", "tags": ["cultural", "asian"], "description": "Meet other members of Nikkei Student Union and learn more about the organization."},
  {"id": 51, "name": "Flyering", "hostOrg": "Nikkei Student Union", "date": "2018-12-11T12:00", "coverPhoto": "", "tags": ["cultural", "social", "asian"], "description": "Help flyer for Nikkei Student Union on Library Walk to bring more campus awareness to the club."},
  {"id": 52, "name": "GBM", "hostOrg": "Project in a Box", "date": "2018-11-10T13:00", "coverPhoto": "", "tags": ["gbm", "pre-professional", "engineering"], "description": "Meet other members of Project in a Box and learn about how you can get involved with your own project."},
  {"id": 53, "name": "Meeting Professionals in your Major", "hostOrg": "Project in a Box", "date": "2018-12-01T12:00", "coverPhoto": "", "tags": ["engineering", "pre-professional"], "description": "Network with other students involved in other disciplines of engineering."},
  {"id": 54, "name": "Meeting Alumni", "hostOrg": "Project in a Box", "date": "2018-12-11T12:00", "coverPhoto": "", "tags": ["engineering", "pre-professional"], "description": "Network with UCSD alumni involved in engineering."},
  {"id": 55, "name": "Rush Week", "hostOrg": "Theta Tau", "date": "2018-11-20T12:00", "coverPhoto": "", "tags": ["greek", "pre-professional", "engineering"], "description": "Attend events all week to learn more about Theta Tau and how you can be involved."},
  {"id": 56, "name": "GBM", "hostOrg": "Theta Tau", "date": "2018-11-28T12:00", "coverPhoto": "", "tags": ["gbm", "engineering", "pre-professional", "men", "women"], "description": "Learn more about Theta Tau and upcoming events at GBM."},
  {"id": 57, "name": "Fundraiser: Yogurt Land", "hostOrg": "Theta Tau", "date": "2018-12-05T13:00", "coverPhoto": "", "tags": ["engineering", "fundraiser", "men", "women", "pre-professional"], "description": "Support Theta Tau and hang out with other members over yogurt."},
  {"id": 58, "name": "GBM", "hostOrg": "Tritons Real-Estate Organization", "date": "2018-11-11T11:00", "coverPhoto": "", "tags": ["gbm", "resl-estate", "pre-professional"], "description": "Learn how to become more invovled with Theta Tau."},
  {"id": 59, "name": "Meeting Professionals from LA", "hostOrg": "Tritons Real-Estate Organization", "date": "2018-12-01T14:00", "coverPhoto": "", "tags": ["real-estate", "pre-professional"], "description": "Network with Real Estate Agents from Los Angeles."},
  {"id": 60, "name": "Keynote Speaker", "hostOrg": "Tritons Real-Estate Organization", "date": "2018-12-05T15:00", "coverPhoto": "", "tags": ["real-estate", "pre-professional"], "description": "Receive real-world advice from a successful Real Estate Agent."},
  {"id": 61, "name": "Alumnae: Where They are the Now", "hostOrg": "Women in Business", "date": "2018-12-09T11:00", "coverPhoto": "", "tags": ["business", "pre-professional", "women"], "description": "Listen to a panel of alumnae from Women in Business to hear about what they've learned since working after college."},
  {"id": 62, "name": "Meeting Professionals: Engineering & Business", "hostOrg": "Women in Business", "date": "2018-12-012T12:00", "coverPhoto": "", "tags": ["business", "engineering", "pre-professional", "women"], "description": "Network and learn from professionals in engineering and business fields."},
  {"id": 63, "name": "Fundraiser: California Pizza Kitchen", "hostOrg": "Women in Business", "date": "2018-12-20T09:00", "coverPhoto": "", "tags": ["business", "fundraiser", "women"], "description": "Support Women in Business by coming out to California Pizza Kitchen with other members."},
  /*{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""}, */
];

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
  {"id": 14, "shortName": "ggg", "fullName": "Greeks Gone Green", "category": "Service", "coverPhoto": "GGGCover.jpg", "tags": ["greek", "fraternity", "sorority", "funraiser", "community", "service"], "description": "Greeks Gone Green is a nonprofit organization dedicated to the three G’s: Greek unity through community involvement; Global, regional and local environmental awareness; and Gateways to sustainability within UCSD. Greeks Gone Green promotes “green” thinking and solutions to not only Greek organizations but also to the greater UCSD community. Greeks Gone Green is a student-run organization comprised of Greek affiliated students dedicated to enhancing environmental awareness within the Greek community and helping this community to operate in ways that are environmentally responsible. "},
  {"id": 15, "shortName": "kp", "fullName": "Kaibigang Pilipin@", "category": "Cultural", "coverPhoto": "KPCover.jpg", "tags": ["cultural", "service"], "description": "To provide a space in which people can learn, share, educate, and appreciate Pilipino/a culture. "},
  {"id": 16, "shortName": "nsu", "fullName": "Nikkei Student Union", "category": "Cultural", "coverPhoto": "NSUCover.jpg", "tags": ["cultural", "service"], "description": "To allow Japanese American, Japanese and any other interested student to interact in a socially conductive environment. To promote awareness of Japanese American and Japanese culture, history and issues on the UCSD campus. To provide a link between the Japanese American community on the UCSD campus and the Japanese American community in the areas surrounding UCSD."},
  {"id": 17, "shortName": "piab", "fullName": "Project in a Box", "category": "Pre-Professional: Engineering", "coverPhoto": "PIABCover.jpg", "tags": ["pre-professional", "engineering"], "description": "Project in a Box's is a student-run engineering organization. We foster a community of makers and engineers in order to empower engineering innovation, ignite passion, and kick start students’ engineering careers. We embody this vision through our development of hands-on projects, making them accessible to students, incorporating hands-on into engineering education, and providing students with an opportunity to bring theory to practice. We believe that if you can dream it, you can build it. "},
  {"id": 18, "shortName": "tt", "fullName": "Theta Tau", "category": "Pre-Professional: Engineering", "coverPhoto": "TTCover.jpg", "tags": ["pre-professional", "engineering"], "description": "The purpose of Theta Tau is to build a strong fraternal bond and maintain high standards of professionalism among fellow members. Theta Tau aims to provide its members the social and professional development necessary to succeed during and after their college years. "},
  {"id": 19, "shortName": "treo", "fullName": "Triton Real Estate Organization", "category": "Pre-Professional: Real Estate", "coverPhoto": "TREOCover.jpg", "tags": ["pre-professional", "real-estate"], "description": "The purpose of this organization is to promote students' understanding and knowledge in the field of Real Estate. This includes many facets of Real Estate such as property management, investment and development. It also serves to establish and strengthen the network between students and business professionals within our community."},
  {"id": 21, "shortName": "wib", "fullName": "Women in Business", "category": "Pre-Professional: Business", "coverPhoto": "WIBCover.jpg", "tags": ["pre-professional", "business", "women"], "description": "UCSD Women In Business aims to empower women of all backgrounds to become leaders in today's ever-changing world. Through business education, networking, mentorship, leadership development workshops, and social events, members will have the chance to join a community dedicated to helping one another succeed. By encouraging both professional and personal growth, UCSD WIB will give women pursuing business the chance to affect change not only within themselves and the university, but in the world they seek beyond. "},
  /*{"id": 22, "shortName": "", "fullName": "", "category": "", "coverPhoto": "", "tags": ["", ""], "description": ""},*/
];

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');

  // THIS PART CHECKS LOGIN STATUS FOR EVERY PAGE
  var login_status = localStorage.getItem("loginStatus");
  if (!login_status) {
    localStorage.setItem("loginStatus", "false");
    login_status = "false";
  }
  else {
    if(login_status == "true") {
      localStorage.setItem("loginStatus", "true");
      login_status = "true";
    }
    else {
      localStorage.setItem("loginStatus", "false");
      login_status = "false";
    }
  }

  console.log("login status set");

  // THIS PART LOADS THE RIGHT LOGIN/OUT BUTTON TO THE TOOLBAR
  // IT ALSO LOADS THE CORRESPONDING PROFILE PAGE IF ON PROFILE.HTML

  var loginSource, profileSource;
  if (login_status == "true") {
    loginSource = $("#logged-in").html();
    profileSource = $("#logged-in-profile").html();
  }
  else {
    loginSource = $("#logged-out").html();
    profileSource = $("#logged-out-profile").html();
  }

  var template = Handlebars.compile(loginSource);
  var login_div = $("#log-button");
  var html = template();
  console.log("login template loaded " + login_status);
  login_div.append(html);


  if(profileSource){
    var template = Handlebars.compile(profileSource);
    var profile_div = $("#profile-div");
    var html = template();

    profile_div.append(html);

    console.log("profile template loaded");
  }

  // THIS PART POPULATES THE FRONT PAGE WITH EVENTS AND ORGS BASED ON SELECTED TAGS

  var filtered_orgs, filtered_events;
  var my_tags = JSON.parse(localStorage.getItem("myTags"));
  var my_events = JSON.parse(localStorage.getItem("myEvents"));
  if(!my_events) {
    my_events = "["
    for(var i = 0; i < eventList.length; i++) {
      my_events += "{\"saved\":false},";
    }
    my_events = my_events.substring(0, my_events.length-1) + "]";
    my_events = JSON.parse(my_events);
  }
  
  var matchTags = function(oe) {  //oe = org | event
    var oe_tag_list = oe.tags;
    //console.log(oe_tag_list);
    for(var i = 0; i < oe_tag_list.length; i++) {
      for(var j = 0; j < my_tags.length; j++) {
        if(oe_tag_list[i] == my_tags[j].tag) {
          return true;
        }
      }
    }
    return false;
  };

  if ((login_status == "true") && my_tags) {
    filtered_orgs = orgList.filter(matchTags);
    filtered_events = eventList.filter(matchTags);
  }
  else {
    filtered_orgs = orgList;
    filtered_events = eventList;
  }

  var orgSource = $("#org-card-template").html();
  if(orgSource) {
    var template = Handlebars.compile(orgSource);
    var org_div = $("#org-rec-deck");
    for(var i = 0; i < filtered_orgs.length; i++){
      var html = template(filtered_orgs[i]);
      org_div.append(html);
    }
  }

  var eventSource = $("#event-card-template").html();
  if(eventSource) {
    var template = Handlebars.compile(eventSource);
    var event_div = $("#event-rec-deck");
    for(var i = 0; i < filtered_events.length; i++){
      var html = template(filtered_events[i]);
      event_div.append(html);
    }
    var your_events_div = $("#your-events-div");
    for(var i = 0; i < eventList.length; i++) {
      if(my_events[i].saved) {
        var html = template(eventList[i]);
        your_events_div.append(html);
      }
    }
  }


  // THIS PART FILLS ALL OF THE EVENTS INTO THE EVENTS PAGE

  var allEventSource = $("#all-event-card-template").html();
  var allEventPastSource = $("#all-event-past-card-template").html();
  var chrono_events = eventList.sort(function(a, b){
      if(a.date < b.date) {return -1;}
      else {return 1;}
    });

  if(allEventSource && allEventPastSource) {
    var template = Handlebars.compile(allEventSource);
    var templatePast = Handlebars.compile(allEventPastSource);

    var event_div = $("#event-deck");
    var past_event_div = $("#past-event-deck");
    var d = new Date();
    for(var i = 0; i < chrono_events.length; i++){
      if(chrono_events[i].date > (d.toJSON()).substring(0,16)) {
        var html = template(chrono_events[i]);
        event_div.append(html);
      }
      else {
        var html = templatePast(chrono_events[i]);
        past_event_div.append(html);
      }
    }
  }

  // THIS PART SHOWS YOUR TAGS ON YOUR PROFILE

  var profileTagDiv = $("#profile-tags-div");
  var profileTagSource = $("#profile-tag-template").html();
  if(profileTagSource) {
    var tagTemplate = Handlebars.compile(profileTagSource);
    for(var i = 0; i < my_tags.length; i++) {
      var html = tagTemplate(my_tags[i]);
      profileTagDiv.append(html);
    }
  }

  // THIS PART ALLOWS YOU TO SELECT WHICH TAGS YOU WANT TO SORT WITH IN YOUR PROFILE

  $("#saved-msg").hide();

  if(my_tags){  //if any preferences selscted
    var btn0Source = $("#tag-unsel-template").html();
    var btn1Source = $("#tag-presel-template").html();
    if(btn0Source && btn1Source){
      var template0 = Handlebars.compile(btn0Source);
      var template1 = Handlebars.compile(btn1Source)
      var tags_div = $("#tags-div");
      for(var i = 0; i < tagList.length; i++){
        for(var j = 0; j < my_tags.length; j++) {
          if(tagList[i].tag == my_tags[j].tag) {
            var html = template1(tagList[i]);
            tags_div.append(html);
            break;
          }
          if(j == my_tags.length-1) {
            var html = template0(tagList[i]);
            tags_div.append(html);
          }
        }
      }
    }
  }
  else {  //if no tags selected yet
    var btnSource = $("#tag-unsel-template").html();
    if(btnSource) {
      var template = Handlebars.compile(btnSource);
      var tags_div = $("#tags-div");
      for(var i = 0; i < tagList.length; i++){
        var html = template(tagList[i]);
        tags_div.append(html);
      }
    }
  }

  // THIS PART POPULATES THE MYEVENTS PAGE

  var myEventSource = $("#my-event-template").html();
  if(myEventSource) {
    var template = Handlebars.compile(myEventSource);
    var my_events_div = $("#my-events-div");
    for(var i = 0; i < eventList.length; i++) {
      if(my_events[i].saved) {
        var html = template(eventList[i]);
        my_events_div.append(html);
      }
    }
  }

  // THIS PART MAKES LOGIN/OUT AND SEARCH AREAS WORK

  // use localStorage to toggle login status
  $("#login-btn").click(function() {
      localStorage.setItem("loginStatus", "true");
      login_status = "true";
  });

  $("#logout-btn").click(function() {
      //console.log("Logout clicked");
      localStorage.setItem("loginStatus", "false");
      login_status = "false";
  });
  //$("search-field").val()
  $("#search-btn").click(function() {
    var query = $("#search-field").val();
    console.log(query);
    window.location="./search.html?tags="+query;
  });

  $('#search-field').keypress(function(e){
    if(e.which == 13) {
      e.preventDefault();
      $(this).parent().find('button').click();
    }
  });


  // THIS PART MAKES TAG SELECTION AND SAVING WORK

  $("#tag-save-btn").click(function(){
    var new_tags = "[";
    for(var i = 0; i < tagList.length; i++) {
      var elnam = "#" + tagList[i].tag;
      var $elem_name = $(elnam);
      console.log($elem_name);
      if( $elem_name.hasClass("active")) {
        new_tags += "{\"tag\": \"" + tagList[i].tag + "\"}, ";
        console.log("pushed " + tagList[i].tag);
      }
    }
    new_tags = new_tags.substring(0, new_tags.length - 2) + "]";
    console.log(new_tags);
    my_tags = JSON.parse(new_tags);
    console.log(my_tags);
    localStorage.setItem("myTags", JSON.stringify(my_tags));
    console.log(localStorage.getItem("myTags"));

    $("#saved-msg").fadeIn("fast");
    $("#saved-msg").fadeOut("slow");
  });

  // FILL GENERIC ORG TEMPLATE PAGE WITH RELAVENT DATA

  var queryParams = new URLSearchParams(window.location.search);
  var orgID = queryParams.get('oid');
  var orgData = orgList[orgID];

  var orgInfoSource = $("#org-info-template").html();
  var orgTagSource = $("#org-tag-template").html();
  var orgEventSource = $("#org-event-card-template").html();
  var orgEventPastSource = $("#org-event-past-card-template").html();
  var orgPicSource = $("#org-pic-template").html();

  var orgInfoDiv = $("#org-info-div");
  var orgTagDiv = $("#org-tag-div");
  var orgEventDiv = $("#org-event-deck");
  var orgEventPastDiv = $("#org-event-past-deck");
  var orgPicDiv = $("#org-pic-div");

  if(orgInfoSource && orgTagSource && orgEventSource && orgEventPastSource && orgPicSource) {
    var t1 = Handlebars.compile(orgInfoSource);
    var t2 = Handlebars.compile(orgTagSource);
    var t3 = Handlebars.compile(orgEventSource);
    var t4 = Handlebars.compile(orgEventPastSource);
    var t5 = Handlebars.compile(orgPicSource);

    orgInfoDiv.append(t1(orgData));
    orgTagDiv.append(t2(orgData));
    var d = new Date();
    for(var i = 0; i < chrono_events.length; i++) {
      if(chrono_events[i].hostOrg == orgData.fullName) {
        if(chrono_events[i].date > (d.toJSON()).substring(0,16)) {
          orgEventDiv.append(t3(chrono_events[i]));
        }
        else {
         orgEventPastDiv.append(t4(chrono_events[i]));
        }
      }
    }
    
    orgPicDiv.append(t5(orgData));
  }



  // FILL GENERIC EVENT TEMPLATE PAGE WITH RELAVENT DATA

  var queryParams = new URLSearchParams(window.location.search);
  var eventID = queryParams.get('id');
  var eventData; //= eventList[eventID];
  for(var i = 0; i < eventList.length; i++) {
    if(eventList[i].id == eventID) {
      eventData = eventList[i];
      break;
    }
  }

  var eventPageSource = $("#event-page-template").html();
  var eventPageDNESource = $("#event-dne-page-template").html();
  var eventPageDiv = $("#event-page-div");
  if(eventPageSource && eventData) {
    var eventTemplate = Handlebars.compile(eventPageSource);
    var html = eventTemplate(eventData);
    eventPageDiv.append(html);
  }
  else if(eventPageDNESource) {
    var eventTemplate = Handlebars.compile(eventPageDNESource);
    var html = eventTemplate(eventData);
    eventPageDiv.append(html);
  }
  var pgTagDiv = $("#event-tag-div");
  var eventTagSource = $("#event-tag-template").html();
  if(eventTagSource) {
    var tagTemplate = Handlebars.compile(eventTagSource);
    var html = tagTemplate(eventData);
    pgTagDiv.append(html);
  }

  //injects rsvp or unrsvp button
  var rsvpBtnDiv = $("#rsvp-btn-div");
  var rsvpBtnSource = $("#rsvp-btn-template").html();
  var unRsvpBtnSource = $("#unrsvp-btn-template").html();
  if(rsvpBtnSource && unRsvpBtnSource) {
    if(my_events[eventID].saved) {
      rsvpBtnDiv.append(unRsvpBtnSource);
    }
    else {
      rsvpBtnDiv.append(rsvpBtnSource);
    }
  }

  $("#rsvp-btn").click(function(){
    my_events[eventID].saved = true;
    localStorage.setItem("myEvents", JSON.stringify(my_events));
    window.location.reload();
    });
  $("#unrsvp-btn").click(function(){
    my_events[eventID].saved = false;
    localStorage.setItem("myEvents", JSON.stringify(my_events));
    window.location.reload();
    });

  // SEARCH FUNCTIONALITY (PLEASE USE THE BUTTON)

  var searchQuery = new URLSearchParams(window.location.search);
  var searchString = searchQuery.get('tags');
  var searchTags;
  if(searchString && searchString.indexOf(" ") == -1) {
    searchTags = (searchString).split(" ");
  }
  else {
    searchTags = [searchString];
  }

  var eventSearchSource = $("#event-card-template").html();
  var orgSearchSource = $("#org-card-template").html();
  var eventSearchDiv = $("#event-search-deck");
  var orgSearchDiv = $("#org-search-deck");
  if(eventSearchSource && orgSearchSource) {
    var eventTemplate = Handlebars.compile(eventSearchSource);
    var orgTemplate = Handlebars.compile(orgSearchSource);
    for(var i = 0; i < orgList.length; i++) {
      for(var j = 0; j < (orgList[i].tags).length; j++) {
        for(var k = 0; k < searchTags.length; k++) {
          if((orgList[i].tags[j]) == searchTags[k]) {
            var html = orgTemplate(orgList[i]);
            orgSearchDiv.append(html);
            break;
          }
        }
      }
    }
    for(var i = 0; i < eventList.length; i++) {
      for(var j = 0; j < (eventList[i].tags).length; j++) {
        for(var k = 0; k < searchTags.length; k++) {
          if((eventList[i].tags[j]) == searchTags[k]) {
            var html = eventTemplate(eventList[i]);
            eventSearchDiv.append(html);
            break;
          }
        }
      }
    }
  }

});
