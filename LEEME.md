# Informes de Seguridad e Higiene (versión instalable)

Es la misma app, pero alojada en tu propia dirección web. Eso permite:
- **Instalarla en el celular** (ícono en la pantalla de inicio).
- **Abrirla sin señal**, sin tenerla en segundo plano.
- **Conectarse a tu Dropbox directamente**, sin depender de Claude, y cambiar de cuenta desde la propia app.

Todo lo demás funciona igual: informes, fotos con ubicación, rúbrica, riesgos, gráficos, evolución, importar PDF, guardado sin conexión y subida automática al volver la señal.

---

## Paso 1: Subir los archivos a GitHub

1. Entrá a github.com e iniciá sesión (o creá una cuenta gratis).
2. Tocá **New repository**. Nombre sugerido: `informes-sst`. Dejalo **Public** (para usar GitHub Pages gratis) y creá el repositorio.
3. Descomprimí este zip en tu computadora. En el repositorio tocá **Add file → Upload files** y arrastrá **todo el contenido** de la carpeta (`index.html`, `sw.js`, `manifest.webmanifest`, los íconos, el archivo `.nojekyll` y la carpeta `vendor`). Tocá **Commit changes**.
   - Si el archivo `.nojekyll` no se ve en tu carpeta, no pasa nada: es opcional.

> Los informes **no** se guardan en GitHub. Ahí solo está el programa. Tus informes van a tu Dropbox.

## Paso 2: Publicarlo (elegí una opción)

**Opción A, GitHub Pages (la más simple)**
1. En el repositorio: **Settings → Pages**.
2. En *Build and deployment*: Source = **Deploy from a branch**, Branch = **main** y carpeta **/ (root)**. Guardá.
3. En uno o dos minutos aparece la dirección, con esta forma: `https://TU-USUARIO.github.io/informes-sst/`

**Opción B, Render**
1. En render.com: **New → Static Site** y conectá tu repositorio de GitHub.
2. *Build Command*: dejalo vacío. *Publish Directory*: `.`
3. Al terminar te da una dirección como `https://informes-sst.onrender.com/`

Anotá la dirección exacta (con la barra final): la vas a usar en el Paso 3.

## Paso 3: Crear la app de Dropbox (una sola vez)

1. Entrá a **dropbox.com/developers/apps** con tu cuenta y tocá **Create app**.
2. Elegí **Scoped access**. Tipo de acceso: **App folder** (recomendado: la app solo ve su propia carpeta).
   - Si preferís usar la carpeta `/Informes SST` que ya existe en tu Dropbox, elegí **Full Dropbox**.
3. Poné un nombre único (por ejemplo `InformesSST-tunombre`) y creá la app.
4. Pestaña **Permissions**: marcá `account_info.read`, `files.metadata.read`, `files.content.read` y `files.content.write`. Tocá **Submit**.
5. Pestaña **Settings**: en **Redirect URIs** agregá la dirección del Paso 2, **exactamente igual** (con la barra final), y tocá **Add**.
6. En la misma pestaña copiá la **App key**.

## Paso 4: Conectar la app con tu Dropbox

1. Abrí la dirección de tu app, entrá a la pestaña **☁️ Dropbox**.
2. Pegá la **App key** y tocá **Conectar con Dropbox**. Iniciá sesión y aceptá.
3. Al volver, la app sincroniza sola. Para usar otra cuenta de Dropbox más adelante: **🔁 Cambiar de cuenta**.

## Paso 5: Instalarla en el celular

Hacelo **con señal**, la primera vez:
- **Android (Chrome):** abrí la dirección, esperá unos segundos y en ☁️ Dropbox tocá **Instalar la app** (o menú ⋮ → Instalar aplicación).
- **iPhone (Safari):** abrí la dirección → **Compartir → Agregar a pantalla de inicio**.

En ☁️ Dropbox, la tarjeta "Instalar en el celular" tiene que decir **✅ Lista para abrir sin conexión**. Desde ese momento la app se abre desde el ícono aunque no haya señal.

---

## Cómo se comporta con y sin señal
- **Sin señal:** podés crear informes nuevos y editar los ya cargados. Si abrís la app sin señal, los informes ya subidos a Dropbox no aparecen hasta que vuelva la conexión.
- **Con señal:** lo nuevo y lo editado se sube a Dropbox y, si sale bien, se borra la copia local. Al abrir la app se traen los informes desde Dropbox.
- Cada edición crea una versión nueva en Dropbox; las anteriores quedan de historial.

## Si ya usabas la versión dentro de Claude
- Si elegiste **Full Dropbox** y la carpeta es `/Informes SST`, vas a ver los mismos informes, porque usan el mismo formato.
- Si elegiste **App folder**, mové los archivos de `/Informes SST` a `/Aplicaciones/<nombre de tu app>/Informes SST` desde Dropbox, o exportalos (Archivo → Exportar JSON) e importalos en la app nueva.

## Actualizaciones
Para cambiar la app, reemplazá `index.html` en GitHub. El celular la actualiza sola la próxima vez que abra con señal (se nota en la segunda apertura).

## Seguridad
- La *App key* no es un secreto. La sesión de Dropbox queda guardada en el navegador de cada dispositivo. Para cerrarla: **Desconectar**.
- Con **App folder**, la app no puede ver nada fuera de su carpeta.
- No compartas la dirección de redirección con nadie que no deba usar tu Dropbox: cada persona necesita su propia sesión.

## Limitaciones conocidas
- La transcripción asistida de PDF con Claude no está en esta versión: al importar un PDF se leen los datos del encabezado, acciones, observaciones, recomendaciones y fotos, pero las cuadrillas se completan a mano.
- En iPhone, Safari puede borrar los datos de sitios que no se usan por muchos días. Instalala en la pantalla de inicio y sincronizá seguido.
- Probalo con un informe de prueba antes de usarlo en el campo.
