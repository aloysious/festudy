重启apache `sudo service httpd restart`

查看cpu和内存占用 `top`

查看磁盘占用 `df -lh`

查看http进程数 `ps -aux | grep httpd | wc -l`

查看文件和目录大小 `du -sh *`

查看网络链接数 `netstat -ant | grep $ip:80 | wc -l`

查看目前已建立的网络链接数 `netstat -ant | grep $ip:80 | grep EST | wc -l`


