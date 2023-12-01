
export const getEnvVariables = () => {
    return {
        FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        FIREBASE_STORA_BUCKET: import.meta.env.VITE_FIREBASE_STORA_BUCKET,
        FIREBASE_MESSAGIN_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGIN_SENDER_ID,
        FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
        CLOUDINARY_CLIENT_URL: import.meta.env.VITE_CLOUDINARY_CLIENT_URL,
    }
}