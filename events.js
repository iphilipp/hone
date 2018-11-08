var eventList = [
	{"id": 0, "name": "Make-A-Wish Meet-up", "hostOrg": "chio", "date": "2018-11-05T12:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 1, "name": "Chapter Meeting", "hostOrg": "chio", "date": "2018-11-11T18:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 2, "name": "Chi-Olympics", "hostOrg": "chio", "date": "2018-11-29T14:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 3, "name": "Rush Week", "hostOrg": "sigep", "date": "2018-10-01T12:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 4, "name": "Rush Week", "hostOrg": "chio", "date": "2018-10-01T12:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 5, "name": "GBM", "hostOrg": "apo", "date": "2018-12-05T18:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 6, "name": "Fundraiser", "hostOrg": "apo", "date": "2018-12-10T15:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 7, "name": "Laser Tagging", "hostOrg": "apo", "date": "2018-12-12T20:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 8, "name": "Meet and Greet", "hostOrg": "apo", "date": "2018-10-10T16:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 9, "name": "GBM", "hostOrg": "cd", "date": "2018-12-12T18:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 10, "name": "Guest Speaker", "hostOrg": "cd", "date": "2018-12-19T18:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 11, "name": "Meet and Greet the Exec Board", "hostOrg": "cd", "date": "2018-12-20T16:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 12, "name": "GBM", "hostOrg": "cd", "date": "2018-11-11T18:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 13, "name": "GBM", "hostOrg": "snap", "date": "2018-12-05T18:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 14, "name": "Hiking and Photograph", "hostOrg": "snap", "date": "2018-12-07T10:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 15, "name": "Meet the Executive Board", "hostOrg": "snap", "date": "2018-12-14T15:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 16, "name": "Fundraiser", "hostOrg": "snap", "date": "2018-10-01T11:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 17, "name": "GBM", "hostOrg": "ucs", "date": "2018-12-01T19:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 18, "name": "Meet the Professionals", "hostOrg": "ucs", "date": "2018-12-03T11:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 19, "name": "Making Cookies and Friends", "hostOrg": "ucs", "date": "2018-12-12T17:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 20, "name": "Meet and Greet", "hostOrg": "ucs", "date": "2018-10-10T20:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 21, "name": "GBM", "hostOrg": "vsa", "date": "2018-12-11T19:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 22, "name": "Social", "hostOrg": "vsa", "date": "2018-12-13T19:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 23, "name": "Bowling with your Family", "hostOrg": "vsa", "date": "2018-12-15T18:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 24, "name": "GBM", "hostOrg": "vsa", "date": "2018-11-11T17:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 25, "name": "GBM", "hostOrg": "aopi", "date": "2018-11-20T19:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 26, "name": "Meeting the Alumni", "hostOrg": "aopi", "date": "2018-12-05T20:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 27, "name": "Fundraiser", "hostOrg": "aopi", "date": "2018-12-21T14:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 28, "name": "GBM", "hostOrg": "aslc", "date": "2018-11-10T16:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 29, "name": "Bowling", "hostOrg": "aslc", "date": "2018-11-18T15:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": 30, "name": "Meeting the Professionals", "hostOrg": "aslc", "date": "2018-12-20T12:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	/*{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""},
	{"id": , "name": "", "hostOrg": "", "date": "2018-XX-XXTXX:00", "coverPhoto": "", "tags": ["", ""], "description": ""}, */
];
