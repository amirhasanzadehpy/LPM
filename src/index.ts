import yargs from 'yargs';
import findUp from "find-up";
import * as fs from "fs-extra";

export default  async function (args: yargs.Arguments) {
    console.log(args)
    const jsonPath = (await findUp("package.json"))!

    const root = await fs.readJSON(jsonPath);
    console.log(root)
    const additionalPackages = args._.slice(1);

    console.log(additionalPackages)

}