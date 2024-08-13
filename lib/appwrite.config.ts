import * as sdk from "node-appwrite";
export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();
client.setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("66b70ceb00044f2cf5b7")
        .setKey("26b9dbc79dd2727730d299cd2d7785ebe5441d20e6fcb02662ca1272df0aac6cfa06ac820a89f78629652e877d767d734df77e8b529161827dc20586d030de383f2719a120e961f7c40d48cb1d0107b866599e2ccfa3cb4ed08c5540e28ff5b808c499b85c7af654e8ae9bc1afab62c5a2f602e9a6d37c35478e1e9023620957");

export const databases = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const messaging = new sdk.Messaging(client)
export const users = new sdk.Users(client)



