# 環境構築
1. このリポジトリをnodecgの`bundles`以下にcloneしてくる
```
git clone https://github.com/lemolatoon/nodecg-lt.git
```
1. node v18.14.0がinstallされていることを確認
```
$ node -v
v18.14.0
```
2. 依存関係のinstall
```
yarn
```
もし`yarn`が入っていなければ
```
npm install -g yarn
```
3. nodecgに読み込ませるためのファイルの生成
```
yarn build
```

4. 変更しながら自動でbuildしてほしいときは、
```
yarn watch
```
でできる。