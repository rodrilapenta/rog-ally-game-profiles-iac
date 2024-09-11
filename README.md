# ROG Ally Game Profiles Infrastructure

This repository contains the Infrastructure as Code (IaC) configuration for the ROG Ally Game Profiles project using Pulumi. The setup includes resources on Google Cloud Platform (GCP) such as Firestore, Firebase Functions, and Firebase Authentication to support user registration, profile management, and other backend functionalities.

## Project Overview

The goal of this project is to provide a robust and scalable infrastructure for managing game profiles for ROG Ally devices. It allows users to register via Google or use the application as guests, with limitations on guest capabilities.

## Infrastructure Components

- **Pulumi:** Used for defining and deploying cloud resources.
- **Google Cloud Platform (GCP):** Hosts the infrastructure including Firestore, Firebase Functions, and Authentication services.
- **Firestore:** A NoSQL database for storing game profiles and user data.
- **Firebase Functions:** Manages backend logic, including authentication and profile management.
- **Firebase Authentication:** Handles user registration with Google and guest access.

## Prerequisites

- [Pulumi](https://www.pulumi.com/docs/get-started/install/) installed and configured.
- Node.js installed for running Pulumi and managing dependencies.
- A Google Cloud account with appropriate permissions.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/rog-ally-game-profiles-infrastructure.git
   cd rog-ally-game-profiles-infrastructure/pulumi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Login to Pulumi:**
   ```bash
   pulumi login
   ```

4. **Initialize the Pulumi stack:**
   ```bash
   pulumi stack init rodrilapenta/rog-ally-game-profiles/dev
   ```

5. **Deploy the infrastructure:**
   ```bash
   pulumi up
   ```
   Confirm the deployment by typing "yes" when prompted.

## Testing and Verification

- **Authentication:** Verify that Google sign-in and guest access work as expected via Firebase Authentication.
- **Functions:** Test the endpoints of Firebase Functions using tools like Postman or directly through the emulator.
- **Firestore:** Check the Firestore database for correct data operations and security rules enforcement.

## CI/CD Pipeline

The project includes a CI/CD setup using GitHub Actions, which automates the deployment of infrastructure changes. Ensure your repository is connected to GitHub Actions with the appropriate secrets for Pulumi.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or additions.

## License

This project is licensed under the MIT License.
