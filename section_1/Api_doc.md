# Test_ZettaByte API

## API References

### ARTICLE

#### Create article

```http
  POST /articles
```

| Body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | **Required**. Your title   |
| `content` | `string` | **Required**. Your content |

_Response (201 - Created)_

```
{
  {
    "statusCode": 201,
    "statusResponse": "success",
    "body": {
        "article": {
            "title": <string>,
            "content": <string>,
            "_id": <object bson>,
            "createdAt": <date>,
            "updatedAt": <date>,
        }
    }
}
```

_Response (400 - Validate Error)_

```
{
    "statusDesc": "error",
    "statusCode": 400,
    "data": {
        "message": <string>
    }
}
```

#### update article

```http
  PUT /articles/:id
```

```
select one
```

| Body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | **optional**. Your title   |
| `content` | `string` | **optional**. Your content |

```
req.params needed
```

| params | Type          | Description                  |
| :----- | :------------ | :--------------------------- |
| `id`   | `object bson` | **Required**. Your articleId |

_Response (200 - Ok)_

```
{
    "statusCode": 200,
    "statusResponse": "success",
    "body": {
        "article": {
            "_id": <object bson>,
            "title": <string>,
            "content": <string>,
            "createdAt": <date>,
            "updatedAt": <date>,
        }
    }
}

```

_Response (404 - ID not found)_

```
{
    "statusDesc": "error",
    "statusCode": 404,
    "data": {
        "message": <string>
    }
}
```

#### Delete article

```http
  DELETE /articles/:id
```

```
req.params needed
```

| params | Type          | Description                  |
| :----- | :------------ | :--------------------------- |
| `id`   | `object bson` | **Required**. Your articleId |

_Response (200 - Ok)_

```
{
    "statusCode": 200,
    "statusResponse": "success",
    "body": {
        "message": <string>
    }
}
```

_Response (404 - Not Found)_

```
{
    "statusDesc": "error",
    "statusCode": 404,
    "data": {
        "message": <string>
    }
}
```

### COMMENT

#### Create comment

```http
  POST /comments/:articleId
```

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `fullname` | `string` | **Required**. Your fullname |
| `comment`  | `string` | **Required**. Your comment  |

| params      | Type          | Description                  |
| :---------- | :------------ | :--------------------------- |
| `articleId` | `object bson` | **Required**. Your articleId |

_Response (201 - Created)_

```
{
    "statusCode": 201,
    "statusResponse": "success",
    "body": {
        "article": {
            "fullName": <string>,
            "articleId": <object bson>,
            "comment": <string>,
            "status": <string>,
            "_id": <object bson>,
            "createdAt": <date>,
            "updatedAt": <date>
        }
    }
}
```

_Response (400 - Validate Error)_

```
{
    "statusDesc": "error",
    "statusCode": 400,
    "data": {
        "message": <string>
    }
}
```

#### Get Comment

```http
  GET /comment
```

| params     | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `fullname` | `string` | **optional**. Your fullname |
| `limit`    | `number` | **optional**. Your limit    |
| `page`     | `number` | **optional**. Your page     |

_Response (201 - Created)_

```
{
    "statusCode": 200,
    "statusResponse": "success",
    "body": {
        "articles": {
            "total": <number>,
            "currentPage": <number>,
            "totalPage": <number>,
            "pageSize": <number>,
            "articles": [
                {
                    "_id": <object bson>",
                    "fullName": <string>,
                    "articleId": {
                        "title": <string>,
                        "content": <string>
                    },
                    "content": <string>,
                    "status": <string>,
                    "createdAt": <date>,
                    "updatedAt": <date>,
                }
            ]
        }
    }
}
```

#### Update Comment

```http
  Put /comment/:commentId
```

| Body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `comment` | `string` | **required**. Your comment |

| params      | Type          | Description                 |
| :---------- | :------------ | :-------------------------- |
| `commentId` | `object bson` | **Required**. Your fullname |

_Response (201 - Created)_

```
{
    "statusCode": 200,
    "statusResponse": "success",
    "body": {
        "article": {
            "_id": <object bson>,
            "fullName": <string>,
            "articleId"<string>
            "content": <string>,
            "status": <string>,
            "createdAt": <date>,
            "updatedAt": <date>
            "comment": <string>
        }
    }
}

```

_Response (404 - Not Found)_

```
{
    "statusDesc": "error",
    "statusCode": 404,
    "data": {
        "message": <string>
    }
}
```

#### Delete comment

```http
  DELETE /comments/:commentsId
```

```
req.params: needed
```

| params       | Type          | Description                  |
| :----------- | :------------ | :--------------------------- |
| `commentsId` | `object bson` | **Required**. Your articleId |

_Response (200 - Ok)_

```
{
    "statusCode": 200,
    "statusResponse": "success",
    "body": {
        "message": <string>
    }
}
```

_Response (404 - Not Found)_

```
{
    "statusDesc": "error",
    "statusCode": 404,
    "data": {
        "message": <string>
    }
}
```
