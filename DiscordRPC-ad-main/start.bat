:start
@echo off & cls
echo Thank you for supporting me please do not close this window unless you want to exit the program. :(
    echo To restart the program press CTRL + C and type "N" then hit enter.
    node index.js
    pause
    cls
    echo Restarting... Thank you for supporting :)
    timeout /t 3 nobreak>nul
    goto start
 
    