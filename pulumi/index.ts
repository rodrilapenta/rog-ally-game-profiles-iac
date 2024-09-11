
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const project = new gcp.organizations.Project("rog-ally-game-profiles", {
    name: "ROG Ally Game Profiles",
    projectId: "rog-ally-game-profiles",
    orgId: "ar.com.rodrilapenta",
});

const services = ["firestore.googleapis.com", "cloudfunctions.googleapis.com", "identitytoolkit.googleapis.com"];
const enabledServices = services.map(service => 
    new gcp.projects.Service(service.replace(".", "-"), {
        project: project.projectId,
        service,
    })
);

const firestoreDatabase = new gcp.firestore.Database("firestoreDatabase", {
    project: project.projectId,
    locationId: "us-central",
});

const rogAllyCollection = new gcp.firestore.Collection("rogAlly", {
    database: firestoreDatabase.name,
    collectionId: "rog-ally",
});

const rogAllyXCollection = new gcp.firestore.Collection("rogAllyX", {
    database: firestoreDatabase.name,
    collectionId: "rog-ally-x",
});
