let NodeGit = require(`nodegit`);
let shell = require(`shelljs`);
let pathToRepo = require(`path`).resolve(`.`);

let getStatus = (repo) => repo.getStatus();

let runDeploy = () => {
  if(process.env.TRAVIS_PULL_REQUEST) {
    shell.echo(`Skipping deployment for pull request!`);
    return;
  }

  shell.echo(`Running deployment now...`);

  shell.exec(`git stash`);
  shell.exec(`git checkout gh-pages`);
  shell.exec(`git pull origin master`);

  shell.exec(`npm run build`);

  shell.echo(`${new Date}\n\n\n`).to(`last-built.txt`);
  shell.exec(`git log -n 1 >> last-built.txt`);

  shell.mv(`dest/*`, `./`);

  shell.exec(`git reset`);
  shell.exec(`git add .`);
  shell.exec(`git add -f css`);
  shell.exec(`git add -f images`);
  shell.exec(`git add -f index.html`);
  shell.exec(`git add -f last-built.txt`);
  shell.exec(`git commit -m 'deploy.js-ified'`);
  shell.exec(`git push https://${process.env.GH_TOKEN}@github.com/mozilla/womenandweb.git gh-pages:gh-pages`);

  shell.echo(`Finished deploying!`);
};

// Check that local repo is clean before deploying

NodeGit.Repository.open(pathToRepo)
  .then(getStatus)
  .then(status => {
    if (status.length) {
      shell.echo(`Repo is dirty. Aborting deploy!`);
      shell.exit(1);
    } else {
      runDeploy();
    }
  });
