import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

// Configuración del proyecto GCP
const project = new gcp.organizations.Project("rog-ally-game-profiles", {
    name: "ROG Ally Game Profiles",
    projectId: "rog-ally-game-profiles",
    orgId: "123456789012", // Reemplaza con el ID correcto de tu organización
});

// Habilitar servicios necesarios para la aplicación
const services = [
    "firestore.googleapis.com",
    "cloudfunctions.googleapis.com",
    "identitytoolkit.googleapis.com"
];

const enabledServices = services.map(service => 
    new gcp.projects.Service(service.replace(/\./g, "-"), {
        project: project.projectId,
        service: service,
    })
);

// Crear la base de datos de Firestore en modo Nativo
const firestoreDatabase = new gcp.firestore.Database("firestoreDatabase", {
    project: project.projectId,
    locationId: "us-central",  // Ubicación del Firestore
    type: "NATIVE",            // Modo nativo para Firestore
});

// Nota: La gestión de colecciones y documentos se hace en la aplicación que usa Firestore,
// no a través de Pulumi, ya que no existe un recurso 'Collection' en la API de Pulumi.