import { writeFile } from "fs";
import { config } from "dotenv";

config();

const targetPath = "./src/environments/environment.development.ts";

const envConfigFile = `export const environment = {
  clientId: '${process.env["CLIENT_ID"]}',
  clientSecret: '${process.env["CLIENT_SECRET"]}',
  redirectUri: '${process.env["REDIRECT_URI"]}',
};
`;

writeFile(targetPath, envConfigFile, (error) => {
  if (error) {
    throw error;
  }
});
