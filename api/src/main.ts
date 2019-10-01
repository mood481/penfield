import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entities/user.entity";
import {UserRole} from "./entities/user_role.entity";

function connectWithDB(){
	createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
		
		//new role
		const userRol = new UserRole();
		userRol.level=1;
		userRol.description="user";
		await connection.manager.save(userRol);
		console.log("Saved a new userRol with id: " + userRol.id);
		
		console.log("Loading userRol from the database...");
		const usersRol = await connection.manager.find(UserRole);
		console.log("Loaded usersRol: ", usersRol);
		
		//new user
        const user = new User();
		user.firstName = "Timber";
		user.lastName = "Saw";
		user.email="timber@gmail.com";
		user.password="timbersaw";
		user.role = userRol;
		await connection.manager.save(user);
		console.log("Saved a new user with id: " + user.id);

		//new user with 1st role
		/*let repository=connection.getRepository(UserRole);
		let roleE:UserRole=await repository.find({description="user"});
		const user = new User();
		user.firstName = "Alex";
		user.lastName = "Saw";
		user.email="alex@gmail.com";
		user.password="alexsaw";
		user.role = roleE;
		await connection.manager.save(user);
		console.log("Saved a new user with id: " + user.id);*/
		
		console.log("Loading users from the database...");
		const users = await connection.manager.find(User);
		console.log("Loaded users: ", users);

		console.log("Here you can setup and run express/koa/any other framework.");

    }).catch(error => console.log(error));
}

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
  
    connectWithDB();

  await app.listen(3000);
}

bootstrap();
