/*
 * Competence Repository
 * The API description of the Competence Repository.
 *
 * OpenAPI spec version: 0.3.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {AuthDto} from '../model/AuthDto';
import {LoginAckDto} from '../model/LoginAckDto';
import {LoginDto} from '../model/LoginDto';

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 0.3.2
*/
export class AuthenticationApi {

    /**
    * Constructs a new AuthenticationApi. 
    * @alias module:api/AuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the authControllerLogin operation.
     * @callback moduleapi/AuthenticationApi~authControllerLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoginAckDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/LoginDto} body 
     * @param {module:api/AuthenticationApi~authControllerLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    authControllerLogin(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling authControllerLogin");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LoginAckDto;

      return this.apiClient.callApi(
        '/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the authControllerRegister operation.
     * @callback moduleapi/AuthenticationApi~authControllerRegisterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoginAckDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/AuthDto} body 
     * @param {module:api/AuthenticationApi~authControllerRegisterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    authControllerRegister(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling authControllerRegister");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LoginAckDto;

      return this.apiClient.callApi(
        '/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}