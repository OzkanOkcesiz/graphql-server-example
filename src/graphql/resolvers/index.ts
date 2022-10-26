import path from "path";

import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const resolverArray = loadFilesSync(path.join(__dirname), {
  extensions: ["ts"],
  extractExports: (fileExport: (arg0: string) => any) => {
    if (typeof fileExport === "function") {
        return fileExport("query_root");
    }
    return fileExport;
  }
});

//  export const resolvers = mergeResolvers(resolverArray);


module.exports = mergeResolvers(resolverArray);