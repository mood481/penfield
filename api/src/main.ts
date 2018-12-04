import {INestApplication} from "@nestjs/common";
import {NestFactory} from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import {AppModule} from './app.module';
import {API_VERSION, PORT, ROUTE_PREFIX} from "./app.constants";

const fs = require('fs');

// HMR
// declare const module: any;

function buildSwaggerDoc(app: INestApplication) {
    // SWAGGER LIVE DOCUMENTATION
    if (process.env.NODE_ENV !== 'production') {
        const options = new DocumentBuilder()
            .setTitle('Penfield API')
            .setDescription('Penfield API specification')
            .setBasePath(ROUTE_PREFIX)
            .setVersion(API_VERSION)
            .setSchemes('https')
            .addBearerAuth('Authorization', 'header')
            .build();
        const document = SwaggerModule.createDocument(app, options);
        // Save a json file with the specification that can be imported
        // in the Swagger editor
        fs.writeFileSync(`./swagger-spec_v${API_VERSION}.json`, JSON.stringify(document));
        // Publish the API under /docs
        SwaggerModule.setup(`${ROUTE_PREFIX}/docs`, app, document);
    }
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    buildSwaggerDoc(app);

    process.on('unhandledRejection', (reason, p) => {
        console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
        process.exit(1);
    });

    app.setGlobalPrefix(ROUTE_PREFIX);
    await app.listen(PORT);

    // HMR
    /*
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }*/
}

bootstrap();
