import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const useRoutes = (app) => {
  fs.readdirSync(dirName).forEach( async(file) => {
    console.log(file);
    if (file === "index.js") return;
    const {default:router} = await import(`./${file}`);
    console.log(router);
    app.use(router.routes()).use(router.allowedMethods());
  });
};

export default useRoutes
