import yargs from 'yargs';
import findUp from "find-up";
import * as fs from "fs-extra";

export default  async function (args: yargs.Arguments) {
    const jsonPath = (await findUp("package.json"))!

    const root = await fs.readJSON(jsonPath);
    const additionalPackages = args._.slice(1);

    if(additionalPackages.length) {
     if (args['save-dev'] || args.dev) {
        console.log(root);
        
        root.devDependencies = root.devDependencies || {};
        
        console.log(root);
        console.log(additionalPackages);
        
      
        additionalPackages.forEach(pkg => (root.devDependencies[pkg] = ""))
        console.log(root);
        
      } else {
        root.dependencies = root..dependencies || {};

        additionalPackages.forEach(pkg => (root.dependencies[pkg] = ""))
      } 
    }  


  if (args.production) {
    delete root.devDependencies
  }




}
