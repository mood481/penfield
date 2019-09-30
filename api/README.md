<h1>Ubuntu</h1>
<ul>
	<li>creacion de la api limpia con nest</li>
	<li>subir version limpia al git</li>
	<li>la api inicia con ts-node</li>
		<ul>
			<li>cambiar el script start de "node start" a "ts-node -r tsconfig-paths/register src/main.ts"</li>
		</ul>
	<li>la api inicia con nodemon https://www.npmjs.com/package/nodemon</li>
		<ul>
			<li>instalar nodemon en las dependencias de desarrollo "node install --save-dev nodemon"</li>
			<li>configurar nodemon.json para que vigile la carpeta src</li>
			<li>cambiar el script "start:dev": "nodemon",</li>
		</ul>
</ul>

