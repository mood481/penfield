import {ApiImplicitBody, ApiImplicitParam, ApiImplicitQuery, ApiResponse} from '@nestjs/swagger';
import {HttpStatus} from '@nestjs/common';

export namespace ApiData
{
    // Params

    export const TypeQuery = (isMandatory = false): MethodDecorator => ApiImplicitQuery({
        name: 'type',
        required: isMandatory,
        description: Msgs.PARAM_TYPE,
        type: 'number',
    });

    export const SinceQuery = (isMandatory = false): MethodDecorator => ApiImplicitQuery({
        name: 'since',
        required: isMandatory,
        description: Msgs.PARAM_SINCE,
        type: 'string',
    });

    export const Body = (typeData: any,
                         name = 'body',
                         isMandatory = true,
                         desc = '' as string): MethodDecorator => ApiImplicitBody({
        name: name,
        required: isMandatory,
        description: desc,
        type: typeData
    });

    export const Param = (name: string,
                          typeData = 'number',
                          isMandatory = true,
                          desc = '' as string): MethodDecorator => ApiImplicitParam({
        name: name,
        required: isMandatory,
        description: desc,
        type: typeData,
    });

    export const IdParam = (): MethodDecorator => Param('id', 'number', true, Msgs.PARAM_ID);

    export const SearchParam = (): MethodDecorator => Param('search', 'string', true, Msgs.PARAM_SEARCH);

    export const TypeParam = (typeName = 'type', isMandatory = false): MethodDecorator =>
        Param(typeName, 'string', isMandatory, Msgs.PARAM_TYPE);


    // Responses

    export const ResponseOk = (type: any = null, isArray = false, desc?: string): MethodDecorator => ApiResponse({
        description: desc || (isArray) ? Msgs.GET_ALL : Msgs.GET_ONE,
        type: type,
        status: HttpStatus.OK,
        isArray: isArray
    });

    export const ResponseCreated = (type?: any, desc?: string): MethodDecorator => ApiResponse({
        description: desc || Msgs.POST,
        type: type,
        status: HttpStatus.CREATED
    });

    export const ResponseUpdated = (type?: any, desc?: string): MethodDecorator => ApiResponse({
        description: desc || Msgs.PUT,
        type: type,
        status: HttpStatus.OK
    });

    export const ResponseDeleted = (desc?: string): MethodDecorator => ApiResponse({
        description: desc,
        status: HttpStatus.NO_CONTENT
    });

    export const ResponseNone = (desc?: string): MethodDecorator => ApiResponse({
        description: desc,
        status: HttpStatus.NO_CONTENT
    });

    export const ResponseNotFound = (desc?: string): MethodDecorator => ApiResponse({
        description: desc || Msgs.DELETE,
        status: HttpStatus.NOT_FOUND,
        isArray: true
    });

    const Msgs = {
        GET_ALL: 'The resources have been successfully retrieved.',
        GET_ONE: 'The resource has been successfully retrieved.',
        POST: 'The resource have been successfully created.',
        PUT: 'The resource have been successfully saved.',
        DELETE: 'Resource not found',
        PARAM_ID: 'The id of resource',
        PARAM_SEARCH: 'Search pram to find the resource: can be an id or another one like an unique code',
        PARAM_SINCE: 'Date since resource(s) must be searched',
        PARAM_TYPE: `Numeric id of resource type. Default is none, that is any type`
    }
}
