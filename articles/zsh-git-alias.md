### git alias

<pre>
<code>
g - git
gst - git status
gl - git pull
gup - git pull --rebase
gp - git push
gd - git diff
gdc - git diff --cached
gdv - git diff -w "$@" | view
gc - git commit -v
gc! - git commit -v --amend
gca - git commit -v -a
gca! - git commit -v -a --amend
gcmsg - git commit -m
gco - git checkout
gcm - git checkout master
gr - git remote
grv - git remote -v
grmv - git remote rename
grrm - git remote remove
gsetr - git remote set-url
grup - git remote update
grbi - git rebase -i
grbc - git rebase --continue
grba - git rebase --abort
gb - git branch
gba - git branch -a
gcount - git shortlog -sn
gcl - git config --list
gcp - git cherry-pick
glg - git log --stat --max-count=10
glgg - git log --graph --max-count=10
glgga - git log --graph --decorate --all
glo - git log --oneline --decorate --color
glog - git log --oneline --decorate --color --graph
gss - git status -s
ga - git add
gm - git merge
grh - git reset HEAD
grhh - git reset HEAD --hard
gclean - git reset --hard && git clean -dfx
gwc - git whatchanged -p --abbrev-commit --pretty=medium
gsts - git stash show --text
gsta - git stash
gstp - git stash pop
gstd - git stash drop
ggpull - git pull origin $(current_branch)
ggpur - git pull --rebase origin $(current_branch)
ggpush - git push origin $(current_branch)
ggpnp - git pull origin $(current_branch) && git push origin $(current_branch)
glp - _git_log_prettily
</code>
<pre>
