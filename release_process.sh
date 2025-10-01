############ If Something Goes Wrong
# Emergency rollback to previous version
git checkout main
git reset --hard HEAD~1  # Goes back one commit
git push origin main --force  # Forces the rollback live

######################
## hot fixes - applying fixes to main
pwd # check current folder
git branch # check branch
git status # check if wd is clean
git checkout main
git pull origin main
git merge dev # merge dev locally into main
git push origin main  # push merge
git tag -l # to check previous versins and decide new version name
git tag -a v1.0.x -m "Hero section responsive" # sample. CHANGE VERSION PROPERLY 
git push origin v1.0.x # push tag

rm -rf .vercel # if switching between branches
vercel --prod
# SELECT right options

# back to dev wd
git checkout dev


## production deployment (after tagging main)

# if fresh folder
git clone --depth 1 --branch vx.0.x https://github.com/rootdisha/maa-kauvery.git new-deploy-code-folder
cd new-deploy-code-folder
vercel --prod # carefully follow instructions

# existing deploy folder : maa-kauvery-LIVE-deployment
cd existing-deploy-folder
git fetch --depth 1 origin tag v1.0.7
git checkout v1.0.7
#?? rm -rf .vercel # use this folder for same deployment project don't rm
vercel --prod # carefully follow instructions