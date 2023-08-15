cd docs
npm run build
cd ".svelte-kit/output/prerendered/pages"
git init
git add -A
git commit -m 'deploy'
# push to gh-pages branch of https://github.com/c0bra/svelma.git
git push -f https://github.com/c0bra/svelma.git master/gh-pages