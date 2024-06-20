REGISTER USER

POST http://51.195.202.219:8010/api/public/users
solicitud post para registrar al usuario

{
  "username": "pruebas",
  "password": "Colericos2323",
  "email": "pruebas@gmail.com", 
  "wallet": "0x0799D4b7d04Ff2C1363c4141982b4969f1DB9c25", 
  "telegram": "30323213",
  "twitter": "@twitter"
}

LOGIN 
solicitud post para generar un token de autenticacion

POST http://51.195.202.219:8010/api/private/auth/login

{
    "username": "admin",
    "password": "JEFEJEFE**"
}