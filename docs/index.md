# Manual de usuario del Back Office de FiuFit

## Introducción

Bienvenido al Manual de Usuario del Back Office de FiuFit. Este manual proporciona información detallada sobre cómo utilizar las diferentes características y funcionalidades del Back Office.

## Requisitos previos

Antes de comenzar a utilizar el Back Office, asegúrese de cumplir los siguientes requisitos:

- Cuenta de administrador: Si no dispone de una cuenta de administrador, contacte a un administrador para ser dado de alta en el sistema.

## Acceso al Back Office

Para acceder al Back Office, siga estos pasos:

1. Abra su navegador web.
2. Ingrese al sitio web del [Back Office](https://back-office-mu.vercel.app/login).
3. Inicie sesión con su cuenta de usuario y contraseña.

## Funcionalidades principales

### Gestión de usuarios

La gestión de usuarios le permite administrar los usuarios del sistema. Para acceder a ella, debe abrir la barra de navegacion lateral, presionando el boton superior izquierdo. Una vez abierta, debe hacer click en el boton de "Usuarios".

#### Listar informacion de un usuario

Para listar la informacion detallada un usuario, siga estos pasos:

1. Vaya a la sección "Usuarios".
2. Haga click en el botón "Detalles" del usuario cuya informacion quiere desplegar.

En la pantalla se puede ver una tabla con las rutinas que dicho usuario marco como favoritas. Además, el cuadro de la derecha contiene informacion personal del usuario tal como el correo, nombre, apellido, rol, etc.

En caso de que dicho usuario sea un entrenador, en la parte inferior se podra ver una tabla con los entrenamientos que dicho usuario haya creado.

#### Bloquear/Desbloquear un usuario

Para bloquear o desbloquear a un usuario, siga estos pasos:

1. Vaya a la sección "Usuarios".
2. Haga click en el botón "Detalles" del usuario al cual quiere bloquear/desbloquear.
3. En la esquina superior derecha hay un boton que permite bloquear/desbloquear a un usuario segun el estado del mismo.
   - Si el usuario esta bloqueado, entonces al clickear dicho boton (que deberia decir "Desbloquear"), este sera desbloqueado.
   - Si el usuario no esta bloqueado, entonces al clickear dicho boton (que deberia decir "Bloquear"), este sera bloqueado.
4. Compruebe el nuevo estado de bloqueo del usuario, el cual se muestra al lado del nombre del mismo en la parte superior de la pantalla.

#### Agregar un nuevo administrador

Para agregar un nuevo usuario, siga estos pasos:

1. Vaya a la sección "Usuarios".
2. Haga click en el botón "Registrar administrador".
3. Complete el formulario con la información del nuevo administrador (nombre, apellido, correo electrónico, etc.).
4. Haga click en el botón "Registrar" para agregar al administrador.

### Gestión de rutinas

La gestión de rutinas le permite administrar las rutinas del sistema. Para acceder a ella, debe abrir la barra de navegacion lateral, presionando el boton superior izquierdo. Una vez abierta, debe hacer click en el boton de "Rutinas".

#### Listar informacion de una rutina

Para listar la informacion detallada una rutina, siga estos pasos:

1. Vaya a la sección "Rutinas".
2. Haga click en el botón "Detalles" de la rutina cuya informacion quiere desplegar.

En la pantalla se puede ver una tabla con los ejercicios que componen dicha rutina. Asimismo, en la seccion de la derecha se detallan datos relevantes de la rutina como el nombre, la descripcion, duracion, categoria, etc.

En la parte inferior de la pantalla, hay una tabla que lista a todos los usuarios que marcaron dicha rutina como favorita. Abajo de dicha tabla, se listan las reseñas de esta rutina.

#### Bloquear/Desbloquear una rutina

Para bloquear o desbloquear a una rutina, siga estos pasos:

1. Vaya a la sección "Rutinas".
2. Haga click en el botón "Detalles" de la rutina a la cual quiere bloquear/desbloquear.
3. En la esquina superior derecha hay un boton que permite bloquear/desbloquear a una rutina segun el estado de la misma.
   - Si la rutina esta bloqueada, entonces al clickear dicho boton (que deberia decir "Desbloquear"), esta sera desbloqueada.
   - Si la rutina esta desbloqueada, entonces al clickear dicho boton (que deberia decir "Bloquear"), esta sera bloqueada.
4. Compruebe el nuevo estado de bloqueo de la rutina, el cual se muestra al lado del nombre de la misma en la parte superior de la pantalla.

#### Eliminar una reseña

ADVERTENCIA: Eliminar una reseña es una accion permanente. Una vez eliminada, esta no se puede recuperar.

Para eliminar una reseña, siga estos pasos:

1. Vaya a la sección "Rutinas".
2. Haga click en el botón "Detalles" de la rutina a la cual pertenece la reseña que quiere eliminar.
3. Busque la reseña a eliminar en la tabla de reseñas de dicha rutina.
4. Haga click en el boton de detalles de la reseña. Esto lo redirigira a la pantalla del detalle de la reseña.
5. Haga click en el boton "Eliminar" en la esquina superior derecha de la pantalla.

### Gestión de servicios

La gestión de servicios le permite administrar los servicios que conforman al sistema. Para acceder a ella, debe abrir la barra de navegacion lateral, presionando el boton superior izquierdo. Una vez abierta, debe hacer click en el boton de "Servicios".

#### Listar informacion de un servicio

Para listar la informacion detallada un servicio, siga estos pasos:

1. Vaya a la sección "Servicios".
2. Haga click en el botón "Detalles" del servicio cuya informacion quiere desplegar.

En la pantalla aparecerá una seccion en la que se detallan datos relevantes del servicio como el nombre, la descripcion y la API key.

#### Bloquear/Desbloquear un servicio

ADVERTENCIA: Tenga cuidado extremo al bloquear un servicio ya que dependiendo de que servicio se bloquee, puede perder acceso temporalmente al Back-Office. Tenga especial cuidado al bloquear el **users-service** (servicio de usuarios).

Para bloquear o desbloquear a un servicio, siga estos pasos:

1. Vaya a la sección "Servicios".
2. Haga click en el botón "Detalles" del servicio a la cual quiere bloquear/desbloquear.
3. En la esquina superior derecha hay un boton que permite bloquear/desbloquear a un servicio segun el estado de la misma.
   - Si el servicio esta bloqueado, entonces al clickear dicho boton (que deberia decir "Desbloquear"), este sera desbloqueado.
   - Si el servicio esta desbloqueado, entonces al clickear dicho boton (que deberia decir "Bloquear"), este sera bloqueado.
4. Compruebe el nuevo estado de bloqueo del servicio, el cual se muestra al lado del nombre del mismo en la parte superior de la pantalla.

#### Agregar un servicio

Para agregar un servicio nuevo y obtener una `API-key`, siga estos pasos:

1. Vaya a la sección "Servicios".
2. Haga click en el botón "Agregar servicio" en la esquina superior derecha.
3. Complete el formulario con los datos correspondientes (nombre del servicio y descripcion).
4. Haga click en el boton "Agregar servicio" para agregar el nuevo servicio.
5. Deberá aparecer un mensaje que indique no hubo errores y que el servicio fue agregado correctamente. A su vez, este mensaje le proporcionará la `API-key` del servicio recien creado.

### Gestión de solicitudes de verificación

#### Listar informacion de una solicitud de verificación

Para listar la informacion detallada una solicitud de verificación, siga estos pasos:

1. Vaya a la sección "Solicitudes de verificación".
2. Haga click en el botón "Detalles" de la solicitud cuya informacion quiere desplegar.

En la pantalla aparecerá una seccion con informacion de la solicitud. En la parte inferior de esta seccion, hay un boton llamado "Abrir recurso" que permite abrir el recurso asociado a la solicitud.

#### Aceptar/Rechazar una solicitud

Para aceptar/rechazar una solicitud, siga estos pasos:

1. Vaya a la sección "Solicitudes de verificación".
2. Haga click en el botón "Detalles" de la solicitud cuya informacion quiere desplegar.
3. En la esquina superior derecha hay controles que permiten aceptar o rechazar la solicitud. Si el boton que esta buscando no esta disponible, puede ser porque:
   + Si la solicitud ya fue aceptada, entonces el boton de aceptar no estara disponible.
   + Si la solicitud ya fue rechazada, entonces el boton de rechazar no estara disponible.
4. Haga click en el boton de aceptar o rechazar segun corresponda.
5. Verifique que la solicitud haya sido aceptada/rechazada correctamente.

### Metricas de usuarios

La sección de metricas de usuarios proporciona informes detallados sobre diferentes aspectos relacionados a los usuarios. Esta compuesta por 8 paneles, que se detallan a continuacion:
+ **Inicio de sesion**: Muestra la cantidad de usuarios que iniciaron sesion en el sistema por mes, durante el ultimo año. Dispone de un filtro que permite especificar el año a visualizar.
+ **Registros**: Muestra la cantidad de usuarios que se registraron en el sistema por mes, durante el ultimo año. Dispone de un filtro que permite especificar el año a visualizar.
+ **Inicio de sesion separados por identidad federada**: Muestra la cantidad de usuarios que iniciaron sesion en el sistema por mes, separando entre los que usaron identidad federada y los que no, durante el ultimo año. Dispone de un filtro que permite especificar el año a visualizar.
+ **Registros separados por identidad federada**: Muestra la cantidad de usuarios que se registraron en el sistema por mes, separando entre los que usaron identidad federada y los que no, durante el ultimo año. Dispone de un filtro que permite especificar el año a visualizar.
+ **Reestablecimientos de contraseña**: Muestra la cantidad de veces que los usuarios reestablecieron su contraseña por mes, durante el ultimo año. Dispone de un filtro que permite especificar el año a visualizar.
+ **Usuarios bloqueados**: Muestra la cantidad de usuarios que fueron bloqueados por mes, durante el ultimo año. Dispone de un filtro que permite especificar el año a visualizar.
+ **Usuarios por rol**: Muestra la cantidad de usuarios que hay en el sistema, separando por rol. Dispone de un filtro que permite visualizar segun el estado de bloqueo de los usuarios, o segun si usaron identidad federada o no.
+ **Entrenadores por estado de verificacion**: Muestra la cantidad de entrenadores que hay en el sistema, separando por estado de verificacion (verificado o no verificado). Dispone de un filtro que permite visualizar segun el estado de bloqueo de los usuarios, o segun si usaron identidad federada o no.

## Preguntas frecuentes

1. **¿Cómo cierro sesion de mi cuenta?**
   Haga click en el boton en la parte superior derecha de la pantalla (que tiene 3 puntos) y luego haga click en el boton "Cerrar sesion".

2. **¿Cómo puedo restablecer mi contraseña si la olvido?**
   Puede restablecer su contraseña utilizando la opción "¿Olvidó su contraseña?" en la página de inicio de sesión.

