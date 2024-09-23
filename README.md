# やられサイトの起動方法
## .envファイルを作成する
.envファイルを作成し、以下のコードを貼り付け、mysqlのユーザ情報やexpress-sessionのsecretのコードを記入してください。
```
MYSQL_USER=""
MYSQL_PASSWORD=""
MYSQL_DB=""
MYSQL_HOST="localhost"
SESSION_SECRET=""
```
## mysqlにログイン後、DBとテーブル情報を作成する
mysqlにログイン後、以下のコードを順に実行してDB,userテーブル,blogテーブルを作成してください。
```
CREATE DATABASE MYSQL_DBに入力した値;
USE MYSQL_DBに入力した値;
Create table user(id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, username TEXT NOT NULL, title TEXT NOT NULL, password TEXT NOT NULL);
Create table blog(id INT(11) NOT NULL AUTO INCREMENT PRIMARY KEY, userId INT(11) NOT NULL, title TEXT NOT NULL, content TEXT NOT NULL,eyecatch TEXT NOT NULL,createdAt DATETIME);
```
## 必要なパッケージをインストールする。
下記のコードを実行してください。
```
npm install
```
上記のコマンドを実行後続けて以下のコマンドを実行してください。
```
npm run start
```
