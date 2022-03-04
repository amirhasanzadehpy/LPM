import yargs from "yargs";
import pm from ".";

// @ts-ignore
// @ts-ignore
yargs.usage('lpm <command> [args]')
    .version()
    .alias('v', "version")
    .help()
    .alias('h', 'help')
    .command(
    "install", "install dependencies.", argv => {
        argv.option("production", { type: "boolean", description: "Install production dependencies only."})

        argv.boolean("save-dev");
        argv.boolean("dev");
        argv.alias("D", "dev");

        return argv
    }, pm )
    .command(
    "*","command not found",
    argv => argv.option("production", { type: "boolean", description: "Install the dependencies only"}),pm
)
.parse()
