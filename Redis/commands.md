#### Run redis locally 
```javascript
docker run  -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack
```

#### Interact with redis-cli 
```javascript
docker exec -it redis-stack 
And then run redis-cli
```

ping ==PONG



## Strings 
- set name sachin 
- get name sachin 

Better way specifiy id 
- set bike:1 Deimos
- set bike:2 Duke 

- get bike:1

nx (if key doesnt exists then only set the value of key )
- set bike:3 KTM nx 
- set bike:3 ns nx // generated an error 

mset and mget 
- mset user:1 "sachin" user:2 "pratap" user:3 "kumar"
- mget user:1 user:2 user:3 

One useful case is string as counter (count no of user in cache)
- set total_user 0
- incr total_user  //increses by 1 
- incr total_user 10 // increases by 10 

## Lists 

Treat lists as queue Fist in First OUt 

- Lpush bikes:repaires bike:1
- Lpush bike:repaires bike :2
- rpop bikes:repairs 
- rpop bike:repairs 


Treat  lists as stack First in Lastout 
- lpush mammals human 
- lpush mammals dog
- lpop mammals 
- lpop mammals 

Check length of list 
llen mammals 

