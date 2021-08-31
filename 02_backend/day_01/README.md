# THA 1
## Setup Redis and PostgreSQL in your local

### 1. Redis
#### Installation
- on Arch
```bash
> yay -S redis
```
- on Ubuntu
```bash
> sudo apt install redis-server
```

#### Start service
```bash
> sudo service redis-server start
> redis-cli
```

<!-- #### Basic redis commands
- SET key value
- GET key
- ttl key
- KEYS *
- DEL key
- FLUSHALL
- EXISTS key
- expire key time
- setex key time value

##### For Arrays

- LPUSH array value
- RPUSH array value
- LRANGE array start stop
- LPOP array
- RPOP array


##### For Sets

- SADD myset value
- SMEMBERS myset


##### For Object/Hash

- HSET key field value 
- HGET key field
- HGETALL key
- HDEL key field
- HEXISTS key field -->
<h1></h1>

### 2. PostgreSQL
#### Installation
- on Arch
```bash
> yay -S postgresql
```
- on Ubuntu
```bash
> sudo apt install postgresql postgresql-contrib
```
#### Start postgreSQL
```bash
> sudo -iu postgres
> psql
```

