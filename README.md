# WeatherApp

Tiene como finalidad poder consultar el clima actual de la ciudad requerida. 

* [Evidencia interfaz grafica](src/assets/evidencia/)

## Ejecución local

Correr `ng serve`. Navegar a la ruta  `http://localhost:4200/` esto cargará la pantalla inicial.
 

Url disponibles: 
* `http://localhost:4200/`
* `http://localhost:4200/signup`
* `http://localhost:4200/weather`


## Organización carpetas

* **Core**: contiene los modelos(interfaces), services, y el guardian
* **Componentes**: piezas de codigo reutilizable que serán utilizadas por otros componentes para complementar la interfaz 
* **Pages**: todos aquellos componentes que estan ligados a una URl, y son los encargados  de renderear las pienzas principales y otros componentes. 

## Integraciones y Servicios

### .Net: API de auth

Mediante un api creada en .NET, se realiza el servicio de autenticación y registro de usuario, además de guardar en base de datos el historial de consultas realizadas. 

Las 3 url disponibles de la API:
* `http://localhost:44366/api/login`
* `http://localhost:44366/api/registerclimate`
* `http://localhost:44366/api/user`

### OpenWeather: API del clima 

Se utilizó el servicio gratuito de [OpenWeather](https://openweathermap.org/current) que permite consultar el clima actual de alguna de las ciudades de los 84 paises registrados en la platafotma

Para usar el servicio es necesario contar con: 
* URL de consulta  
* Un api keY


### Geolocalización 

Se implementó un servicio  de geolocalización que le solicita al usuario acceso a este, para realizar una busqueda inicial del clima teniendo en cuenta la ciudad donde se cuentra el usuario. 


## Observación

Se implemento un servicio de guardian, pero dado que el backend no estará desplegado, 
no esta activo en la url de `weather`, para que en caso de ejecutar este codigo, se puede navegar a ella y evidenciar el uso de la sistema de consulta del clima. 

