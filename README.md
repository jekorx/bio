# bio
[bio展示]https://jekorx.github.io/bio

### 使用
1、安装依赖（yarn 或 cnpm i 或 npm i ）  
2、完善信息src/data/info.json  
3、打包（yarn build 或 npm run build ）  
4、提交到github（git add . && git commit -m 'comment, you can write anything' && git push）  
5、推送到github展示（如下）  
```bash
# --prefix 为构建好的项目目录
git subtree push --prefix dist origin gh-pages
```
6、查看https://[你的github名].github.io/[该项目在github上的项目名，默认bio]
