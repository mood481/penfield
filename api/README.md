<h1>Penfield API development documentation</h1>

<p>Penfield is a fast and simple (meta)engine to manage, generate and deploy web services and distributed contents. This is a guide to create an API using nestjs, typescript and sqlite3. User module is created with Angular. Remember to use a version control to avoid problems.</p>

<h3>Ubuntu</h3>
<ul>
	<li>Create a new nestjs project: "nest new api"</li>
	<li>Upload the new project to your git</li>
	<li>Use ts-node to start the service</li>
		<ul>
			<li>At package.json, change the start script value from "node start" to "ts-node -r tsconfig-paths/register src/main.ts"</li>
		</ul>
	<li>Use nodemon to start the service while develop it, so changes will be applies automatically 
		<a href="https://www.npmjs.com/package/nodemon" title="Nodemon website">Nodemon website</a></li>
		<ul>
			<li>Install nodemon dependences "node install --save-dev nodemon"</li>
			<li>Create and config nodemon.json to keep monitoring directory src</li>
			<li>Change the start:dev script value for "nodemon",</li>
			<li>As developer, start the service with "npm run start:dev"</li>
</ul>
	<li>Use typeorm to support the latest JavaScript features 
		<a href="https://typeorm.io/#/" title="Typeorm website">Typeorm website</a></li>
		<ul>
			<li>Install all the dependences as specify on typeorm docs "node install --save typeorm", etc</li>
			<li>Save your progress at the control version, you will need for next step</li>
			<li>Install typeorm files with "typeorm init"</li>
			<li>Some files have been changed, check them out with your saved ones to solve some problems</li>
				<ul>
					<li>package.json -> start script changed</li>
					<li>.gitignore -> some ignores disappeard</li>
					<li>tsconfig.json -> lots of changes, from new version keep "lib: [...]" and "target:es6"</li>
				</ul>
			<li>Copy the code inside "src/index.ts" to "src/main.ts"</li>
			<li>If you change names from archives or directories created by typeorm, remember to update main.ts, ormconfig.json</li>
			<li></li>
		</ul>
</ul>
