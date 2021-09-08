# Day 1
## Setup Redis and PostgreSQL in your local

### 1. Redis
#### Installation
- on Arch
```bash
yay -S redis
```
- on Ubuntu
```bash
sudo apt install redis-server
```

#### Start service
```bash
sudo service redis-server start
redis-cli
```

<h1></h1>

### 2. PostgreSQL
#### Installation
- on Arch
```bash
yay -S postgresql
sudo su - postgres
initdb --locale en_US.UTF-8 -D /var/lib/postgres/data
exit
```
- on Ubuntu
```bash
sudo apt install postgresql postgresql-contrib
```
#### Start postgreSQL
```bash
sudo systemctl start postgresql
sudo -iu postgres
psql
```

