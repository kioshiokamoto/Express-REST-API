# REST API - NODEJS  Y EXPRESS

Para instalar aplicacion ejecutar:

```
npm install
```

Para iniciar aplicacion ejecutar

```
npm start
```

Para insertar usuario (POST)

```
http://localhost:5000/users/
Body:
{
    "firstName":"Jhon",
    "lastName":"Doe",
    "age":30
}


```

Para obtener todos los usuarios (GET)

```
http://localhost:5000/users/
```

Para obtener usuario por id (GET)

```
http://localhost:5000/users/id
```

Para actualizar usuario por id (PATCH)

```
http://localhost:5000/users/id
Body:
{
    "firstName":"Jhon",
    "lastName":"Doe",
    "age":30
}
```

Para eliminar usuario por id (DELETE)

```
http://localhost:5000/users/id
```

------

Referencia de proyecto:

[Javascript Mastery]([(4) JavaScript Mastery - YouTube](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A))