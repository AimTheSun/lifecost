# LifeCost - Medical Exam Price Estimator

LifeCost is a web application that provides estimated prices and wait times for medical exams in hospitals and clinics. The goal is to bring transparency to healthcare costs, making it easier for users to plan their medical expenses.

---

## Overview

LifeCost is built with the following technologies:
- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: Not required (uses OpenAI API for estimation)
- **Authentication**: JWT
- **Deployment**: AWS Lambda (backend) and AWS Amplify (frontend)

### Features
- Get estimated prices for medical exams.
- View estimated wait times for specific hospitals and clinics.
- User-friendly interface with a focus on simplicity and efficiency.
- Secure API integration with OpenAI for price estimation.

---
## Challenges Faced

### API Key Security
Initially, the API key for OpenAI was mistakenly pushed to the repository. To fix this, the key was removed, and best practices were implemented:
- Added `config.env` to `.gitignore` to prevent secrets from being tracked.
- Used environment variables for sensitive information.
- Cleared the repository history to remove any exposed keys.

### Deployment Strategy
Finding a cost-effective and scalable deployment method was a challenge. AWS Lambda was chosen for the backend to reduce costs, while the frontend is deployed via AWS Amplify for a seamless experience.

---

