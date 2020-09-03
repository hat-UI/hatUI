# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
npm run build:doc

# 进入打包好的文件夹
cd sites/doc/.vuepress/dist

# 创建git的本地仓库，提交修改
git init
git add -A
git commit -m 'update article'

# 覆盖式地将本地仓库发布至github，因为发布不需要保留历史记录
# 格式为：git push -f git@github.com:'用户名'/'仓库名'.git master
git push -f git@github.com:hat-UI/hat-UI.githib.io.git function_comp_dev

# 打包生成静态文件
npm run prod:demo

# 进入打包好的文件夹
cd ../../../demo

# 创建git的本地仓库，提交修改
git init
git add -A
git commit -m 'update demo'

# 覆盖式地将本地仓库发布至github，因为发布不需要保留历史记录
# 格式为：git push -f git@github.com:'用户名'/'仓库名'.git master
git push -f https://gitee.com/Harhao/hat-ui.git master

cd -