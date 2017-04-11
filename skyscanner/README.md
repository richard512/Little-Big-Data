use object value as array index
```
for (i in obj){
xx[obj[i].id] = xx[i]
delete obj[i]
}
```
