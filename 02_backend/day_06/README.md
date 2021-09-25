# Day 6

## Implement CRUD while taking options from cli asynchronously

- Synopsis
```
    ./index.js [OPTION] [VALUES]...
```

<br>

### Making directories
- Usage
```bash
./index.js -d [dir_name]...
```
- Example
```bash
./index.js -d first_dir second_dir
```

<br>

### Deleting directories
- Usage
```bash
./index.js -dd [dir_name]...
```
- Example
```bash
./index.js -dd my_dir
```

<br>

### Renaming
- Usage
```bash
./index.js -r [old_name] [new_name]
```
- Example
```bash
./index.js -r old_dir new_dir
```

<br>

### Writing to files
- Usage
```bash
./index.js -w [file_name] [content]
```
- Example
```bash
./index.js -w my_dir/hello.txt Hello
```

<br>

### Appending to files
- Usage
```bash
./index.js -a [file_name] [content]
```
- Example
```bash
./index.js -a my_dir/hello.txt World
```