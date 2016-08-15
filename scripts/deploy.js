let NodeGit = require(`nodegit`);
let shell = require(`shelljs`);
let pathToRepo = require(`path`).resolve(`.`);

let getStatus = (repo) => repo.getStatus();

let runDeploy = () => {
  shell.echo(`Running deployment now...`);

  shell.exec(`git checkout master`);
  shell.exec(`git pull origin master`);

  shell.rm(`-rf`,`node_modules`);

  shell.exec(`npm i`);
  shell.exec(`npm run build`);

  shell.echo(`${new Date}\n\n\n`).to(`last-built.txt`);
  shell.exec(`git log -n 1 >> last-built.txt`);

  shell.exec(`git branch -D gh-pages`);
  shell.exec(`git checkout --orphan gh-pages`);

  shell.rm(`.gitignore`);

  shell.echo(`/*\n`).toEnd(`.gitignore`);
  shell.echo(`!css\n`).toEnd(`.gitignore`);
  shell.echo(`!images\n`).toEnd(`.gitignore`);
  shell.echo(`!index.html\n`).toEnd(`.gitignore`);
  shell.echo(`!last-built.txt\n`).toEnd(`.gitignore`);

  shell.mv(`dest/*`, `./`);

  shell.exec(`git reset`);
  shell.exec(`git add .`);
  shell.exec(`git commit -m 'deploy.js-ified'`);
  shell.exec(`git push origin gh-pages -f`);

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
