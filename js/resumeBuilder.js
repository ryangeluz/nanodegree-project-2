var bio = {
    "name": "Ryan",
    "role": "Front-End Ninja",
    "welcomeMessage": "Just your friendly neighbornhood ninja-assassin turned web developer. :)",
    "contacts": {
    	"mobile": "555-555-5555",
    	"email": "rgeluz@gmail.com",
    	"github": "github.com/ryangeluz",
    	"twitter": "@rgeluz",
    	"location": "Rancho Cucamonga, CA",
    	"blog": "ryangeluz.wordpress.com"
    },
    "pictureURL": "images/ninja_pic.jpg",
    "skills": ["ninja chop", "ninja spin kick", "ninja somersault", "ninja smoke grenade", "HTML", "CSS", "JavaScript", "jQuery"]
};

var education = {
	"schools": [
		{
			"name": "Ultimate Ninja Dojo — Chuck Norris Inc.",
			"location": "Tokyo, Japan",
			"degree": "Master of Roundhouse Kick",
			"major": "Advanced Ninjitsu",
			"dates": "2006-2014",
			"url": "http://www.ultimateninjadojo.edu"
		}],
	"onlineCourses": [
		{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "March 2015 to Present",
		"url": "www.udacity.com"
	    },
	    {
		"title": "Ninja Ethics 101: How not to cross the line in the professional assassin industry.",
		"school": "Secret Dojo",
		"dates": "2011-2014",
		"url": "www.youwishyouknewthesecretdojourl.com"
	    }
	]
};

var work = {
    "jobs": [
        {
            "employer": "Kage Ruins Rehabilitation Project",
            "title": "Junior Acrobatics Instructor",
            "location": "Kyoto, Japan",
            "dates": "2002-2005",
            "description": "I was the oldest of four children, so I was always expected to carry on the legacy of our ancestors. Blah blah, secret scroll this, blah blah, ancient prophecy that. So I spent ALL of my early years training to be a ninja assassin. My younger siblings got to pursue art, medicine, and American business. However, I did find that I developed advanced ninja acrobatics skills through my endless toiling, and swore to myself that I'd find a gig where I could teach young ninjas the art of flying through the air in combinations unheard of as more than a profession — as a philosophy of being. For four years, I was more than a ninja acrobatics instructor to these young, impressionable minds — I was a mentor."
        },
        {
            "employer": "Shinobi Academy",
            "title": "Professional Assassin Intern",
            "location": "Hidden Shinobi Mountains, Switzerland",
            "dates": "2001-2002",
            "description": "I went into the Shinobi Academy to impress my father. He was everyone's ideal career ninja assassin. He always talked about how the company paid amazing benefits, how it offered long-term job security (unless, of course, you were killed in one of your assassination missions), and how you could fulfill your purpose by making a meaningful contribution to society. I never heard the end of it growing up. I stuck it out two years for my father. But after he passed away mysteriously, I decided I'd pursue my passions elsewhere."
        }
    ]
};

var projects = {
	"projects": [
	{
		"title": "Hello World!",
		"dates": "March 2015",
		"description": "I learned how to say hello world! I'm a ninja, so I don't get to do that very often. Usually the ninjas that talk a lot are the ones that get cut down quickly by the ones who don't talk so much.",
		"images": "images/happy_ninja.jpg"
	},
	{
		"title": "Portfolio Front Page",
		"dates": "April 2015",
		"description": "In the ninja arts, we don't get to brag a lot. I guess it means something if we come home safely at night, but being a professional ninja assassin leaves us wanting in the 'recognition' department. Seriously, I was born to kick ass. And not just literally-stab-your-face-with-my-father's-ancient-sword kick ass, but in business too. As Kelly Price would say, 'It's my time to shine.'",
		"images": "images/office_ninja.jpg"
	}]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", "Ryan Geluz");
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", "Professional Ninja");
    $("#header").append(formattedRole);   
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(formattedEmail);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(formattedGitHub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#header").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedLocation);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#header").append(formattedBlog);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
    $("#header").append(formattedBioPic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
};

bio.display();

$("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i+=1){
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
}


work.display = function(){
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    };
};

work.display();


projects.display = function() {
    for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
	};
};

projects.display();	


education.schools.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
	};
};

education.schools.display();


education.onlineCourses.display = function() {
	$(".education-entry:first").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	};


};

education.onlineCourses.display();


$("mapDiv").append(googleMap);
