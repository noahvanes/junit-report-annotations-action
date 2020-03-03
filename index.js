const core = require('@actions/core');
const github = require('@actions/github');
const glob = require('@actions/glob');
const parser = require('xml2json');
const octokit = require('@octokit/rest')
(async () => {
    try {
    const path = core.getInput('path');
    const includeSummary = core.getInput('includeSummary');
    const numFailures = core.getInput('numFailures');

    const globber = await glob.create(path, {followSymbolicLinks: false})

    for await (const file of globber.globGenerator()) {
        const data = await fs.readFile(file)
        var json = parser.toJson(data);
        console.log("to json ->", json);
    }
    } catch (error) {
    core.setFailed(error.message);
    }
})();