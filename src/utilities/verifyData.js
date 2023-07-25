// File used for frontend verification of the data

/* 
NOTE: While this is not currently necessary as the data is all static, I'm starting
this file as good practice in case in the future I add a backend of some sort
*/

// Verify the correct format and types of the experiences data
const verifyExperiences = (experiences) => {
  for (let experience of experiences) {
    if (!experience.title || typeof experience.title != "string") {
      throw new Error("Experiences data is invalid. Invalid title.");
    }

    if (!experience.company || typeof experience.company != "string") {
      throw new Error("Experiences data is invalid. Invalid company.");
    }

    if (!experience.location || typeof experience.location != "string") {
      throw new Error("Experiences data is invalid. Invalid location.");
    }

    if (!experience.startDate || typeof experience.startDate != "string") {
      throw new Error("Experiences data is invalid. Invalid startDate.");
    }

    if (!experience.endDate || typeof experience.endDate != "string") {
      throw new Error("Experiences data is invalid. Invalid endDate.");
    }

    if (!experience.description || !Array.isArray(experience.description)) {
      throw new Error("Experiences data is invalid. Invalid description.");
    }

    if (!experience.skills || !Array.isArray(experience.skills)) {
      throw new Error("Experiences data is invalid. Invalid skills.");
    }
  }

  return;
};

// Verify the correct format and types of the projects data
const verifyProjects = (projects) => {
  for (let project of projects) {
    if (!project.title || typeof project.title != "string") {
      throw new Error("Projects data is invalid. Invalid title.");
    }

    if (!project.startDate || typeof project.startDate != "string") {
      throw new Error("Projects data is invalid. Invalid startDate.");
    }

    if (!project.endDate || typeof project.endDate != "string") {
      throw new Error("Projects data is invalid. Invalid endDate.");
    }

    if (!project.description || !Array.isArray(project.description)) {
      throw new Error("Projects data is invalid. Invalid description.");
    }

    if (!project.links || typeof project.links != "object") {
      throw new Error("Projects data is invalid. Invalid links.");
    }
  }

  return;
};

module.exports = {
  verifyExperiences,
  verifyProjects,
};
