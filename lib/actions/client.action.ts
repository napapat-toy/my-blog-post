import { Client, Account } from "appwrite";
import { APPWRITE_ENDPOINT, PROJECT_ID } from "../appwrite.config";

export const client = new Client();

client.setEndpoint(APPWRITE_ENDPOINT!).setProject(PROJECT_ID!);

export const account = new Account(client);
export { ID } from "appwrite";
