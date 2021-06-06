# 短網址產生器
運用Node.js + Express框架與MongoDB Atlas雲端資料庫並部署在Heroku的縮網址服務

# 產品功能
1. 使用者可以數入原網址，並將其轉換成短網址
2. 使用者若輸入重複的原網址，會提供已成立的網址
3. 使用者可以按複製紐，複製以創造的短網址
4. 若使用者未輸入任何網址，則會跳出提示請使用者輸入網址

# 安裝與執行步驟
1. 打開終端機將專案下載至本地執行
```
https://github.com/a1234567045/url-shortener.git
```
2. 進入專案資料夾
```
cd url-shortener
```
3. 安裝專案需求套件
```
npm install //安裝相關套件（express,nodemon,exeress-handlebars,mongoose )
```
4. 啟動伺服器，執行專案

```
npm run dev
```
終端機顯示 app is running on http://localhost:3000 即成功啟動，可至 http://localhost:3000 開始使用！

