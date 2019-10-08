import { Injectable } from '@nestjs/common';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world!';
  }
  setUser():string{
    createConnection().then(async connection => {
      const user = new User();
		  user.firstName = "Timber2";
		  user.lastName = "Saw2";
		  user.email="timber2@gmail.com";
		  user.password="timbersaw2";
		  await connection.manager.save(user);
    }).catch(error => console.log(error));
    return 'user added';
  }
  
  viewUser():Promise<string>{
	  return new Promise((resolve,reject)=>{
		createConnection().then(async connection => {
			const users = await connection.manager.find(User);
			resolve( users[1].firstName);
		}).catch(error => reject("error"));
	  });
  }
}

/*function connectWithDB(){
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
		let repository=connection.getRepository(UserRole);
		let roleE:UserRole=await repository.find({description="user"});
		const user = new User();
		user.firstName = "Alex";
		user.lastName = "Saw";
		user.email="alex@gmail.com";
		user.password="alexsaw";
		user.role = roleE;
		await connection.manager.save(user);
		console.log("Saved a new user with id: " + user.id);
		//
		
		console.log("Loading users from the database...");
		const users = await connection.manager.find(User);
		console.log("Loaded users: ", users);

		console.log("Here you can setup and run express/koa/any other framework.");

    }).catch(error => console.log(error));
}*/