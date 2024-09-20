import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.expo.aora",
  projectId: "66ed2a58002eb68282db",
  userCollectionId: "66ed2c5300235703d174",
  videoCollectionId: "66ed2cac0033e7c23b22",
  databaseId: "66ed2c450037975fa126",
  storageId: "66ed2fd1000b46665f95",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);
export async function createUser(email, password, username) {
  try {
    const newUser = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newUser) throw Error;

    const avatarUrl = await avatar.getInitials(username);
    await signIn(email, password);
    const storeDB = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newUser.$id,
        email,
        username,
        AvatarUrl: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log("ERROR while signIn ,", error);
    throw new Error(error);
  }
};
