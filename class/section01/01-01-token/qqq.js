console.log("안녕하세요!!");

function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
}

getToken();

/*
kokyungtaek@192 codecamp-backend-class % pwd
/Users/kokyungtaek/Desktop/codecamp-backend-class

kokyungtaek@192 codecamp-backend-class % mkdir class2

kokyungtaek@192 codecamp-backend-class % ls
class   class2

kokyungtaek@192 codecamp-backend-class % ls -al
total 0
drwxr-xr-x   4 kokyungtaek  staff  128  3  8 22:55 .
drwx------+ 13 kokyungtaek  staff  416  3  8 22:36 ..
drwxr-xr-x   3 kokyungtaek  staff   96  3  8 22:37 class
drwxr-xr-x   2 kokyungtaek  staff   64  3  8 22:55 class2

kokyungtaek@192 codecamp-backend-class % cp -R class class3

kokyungtaek@192 codecamp-backend-class % rm class2
rm: class2: is a directory

kokyungtaek@192 codecamp-backend-class % rm -rf class2
kokyungtaek@192 codecamp-backend-class % rm -rf class3

kokyungtaek@192 codecamp-backend-class % node --version
v20.11.1

kokyungtaek@192 codecamp-backend-class % pwd
/Users/kokyungtaek/Desktop/codecamp-backend-class

kokyungtaek@192 codecamp-backend-class % ls
class

kokyungtaek@192 codecamp-backend-class % cd class 

kokyungtaek@192 class % pwd
/Users/kokyungtaek/Desktop/codecamp-backend-class/class

kokyungtaek@192 class % ls
section01

kokyungtaek@192 class % cd section01 

kokyungtaek@192 section01 % ls
01-01-token

kokyungtaek@192 section01 % cd 01-01-token 

kokyungtaek@192 01-01-token % ls
qqq.js

kokyungtaek@192 01-01-token % pwd
/Users/kokyungtaek/Desktop/codecamp-backend-class/class/section01/01-01-token

kokyungtaek@192 01-01-token % cd ../

kokyungtaek@192 section01 % pwd
/Users/kokyungtaek/Desktop/codecamp-backend-class/class/section01

kokyungtaek@192 section01 % cd 01-01-token 
kokyungtaek@192 01-01-token % ls
qqq.js

kokyungtaek@192 01-01-token % node qqq.js
안녕하세요!!

kokyungtaek@192 01-01-token % node qqq.js
안녕하세요!!
792461
*/
