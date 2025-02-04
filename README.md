# Starter Template

## Clone the Repository

```sh
git clone <your-repository-url>
cd <your-project-folder>
```

## Create a `.env` File (Frontend)

Create a `.env` file in the root of your project and add the following variables:

```sh
# API Base URL (Change this based on your backend)
VITE_API_BASE_URL=

# Authentication
VITE_JWT_SECRET=

# Google OAuth Client ID (If Using Google Auth)
VITE_GOOGLE_CLIENT_ID=

# Firebase Configuration (If Using Firebase)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Stripe Payment (If Using Stripe)
VITE_STRIPE_PUBLIC_KEY=

# Node Environment
VITE_NODE_ENV=development
```
