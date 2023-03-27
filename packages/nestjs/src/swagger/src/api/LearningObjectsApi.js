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
import {LearningObjectCreationDto} from '../model/LearningObjectCreationDto';
import {LearningObjectDto} from '../model/LearningObjectDto';
import {LearningObjectGroupCreationDto} from '../model/LearningObjectGroupCreationDto';
import {LearningObjectGroupDto} from '../model/LearningObjectGroupDto';
import {LearningObjectModificationDto} from '../model/LearningObjectModificationDto';
import {LoGoalCreationDto} from '../model/LoGoalCreationDto';
import {LoGoalDto} from '../model/LoGoalDto';
import {LoRepositoryCreationDto} from '../model/LoRepositoryCreationDto';
import {LoRepositoryDto} from '../model/LoRepositoryDto';
import {LoRepositoryListDto} from '../model/LoRepositoryListDto';
import {LoRepositoryModifyDto} from '../model/LoRepositoryModifyDto';
import {ShallowLoRepositoryDto} from '../model/ShallowLoRepositoryDto';

/**
* LearningObjects service.
* @module api/LearningObjectsApi
* @version 0.3.2
*/
export class LearningObjectsApi {

    /**
    * Constructs a new LearningObjectsApi. 
    * @alias module:api/LearningObjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the loRepositoryControllerAddGoal operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerAddGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoGoalDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/LoGoalCreationDto} body 
     * @param {String} repositoryId 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerAddGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerAddGoal(body, repositoryId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling loRepositoryControllerAddGoal");
      }
      // verify the required parameter 'repositoryId' is set
      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling loRepositoryControllerAddGoal");
      }

      let pathParams = {
        'repositoryId': repositoryId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LoGoalDto;

      return this.apiClient.callApi(
        '/lo_repository/{repositoryId}/add_goal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerAddLoGroup operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerAddLoGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LearningObjectGroupDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/LearningObjectGroupCreationDto} body 
     * @param {String} repositoryId 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerAddLoGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerAddLoGroup(body, repositoryId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling loRepositoryControllerAddLoGroup");
      }
      // verify the required parameter 'repositoryId' is set
      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling loRepositoryControllerAddLoGroup");
      }

      let pathParams = {
        'repositoryId': repositoryId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LearningObjectGroupDto;

      return this.apiClient.callApi(
        '/lo_repository/{repositoryId}/add_learning_object_group', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerCreateLearningObject operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerCreateLearningObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LearningObjectDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/LearningObjectCreationDto} body 
     * @param {String} repositoryId 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerCreateLearningObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerCreateLearningObject(body, repositoryId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling loRepositoryControllerCreateLearningObject");
      }
      // verify the required parameter 'repositoryId' is set
      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling loRepositoryControllerCreateLearningObject");
      }

      let pathParams = {
        'repositoryId': repositoryId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LearningObjectDto;

      return this.apiClient.callApi(
        '/lo_repository/{repositoryId}/add_learning_object', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerCreateRepository operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerCreateRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShallowLoRepositoryDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/LoRepositoryCreationDto} body 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerCreateRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerCreateRepository(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling loRepositoryControllerCreateRepository");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ShallowLoRepositoryDto;

      return this.apiClient.callApi(
        '/lo_repository/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerGetLoGroup operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerGetLoGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LearningObjectGroupDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} groupId 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerGetLoGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerGetLoGroup(groupId, callback) {
      
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling loRepositoryControllerGetLoGroup");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LearningObjectGroupDto;

      return this.apiClient.callApi(
        '/lo_repository/learning_object_groups/{groupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerListRepositories operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerListRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoRepositoryListDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/LearningObjectsApi~loRepositoryControllerListRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerListRepositories(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LoRepositoryListDto;

      return this.apiClient.callApi(
        '/lo_repository', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerLoadLearningObject operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerLoadLearningObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LearningObjectDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} learningObjectId 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerLoadLearningObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerLoadLearningObject(learningObjectId, callback) {
      
      let postBody = null;
      // verify the required parameter 'learningObjectId' is set
      if (learningObjectId === undefined || learningObjectId === null) {
        throw new Error("Missing the required parameter 'learningObjectId' when calling loRepositoryControllerLoadLearningObject");
      }

      let pathParams = {
        'learningObjectId': learningObjectId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LearningObjectDto;

      return this.apiClient.callApi(
        '/lo_repository/learning_objects/{learningObjectId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerLoadRepository operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerLoadRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoRepositoryDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} repositoryId 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerLoadRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerLoadRepository(repositoryId, callback) {
      
      let postBody = null;
      // verify the required parameter 'repositoryId' is set
      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling loRepositoryControllerLoadRepository");
      }

      let pathParams = {
        'repositoryId': repositoryId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LoRepositoryDto;

      return this.apiClient.callApi(
        '/lo_repository/{repositoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerModifyLearningObject operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerModifyLearningObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LearningObjectDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/LearningObjectModificationDto} body 
     * @param {String} repositoryId 
     * @param {String} learningObjectId 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerModifyLearningObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerModifyLearningObject(body, repositoryId, learningObjectId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling loRepositoryControllerModifyLearningObject");
      }
      // verify the required parameter 'repositoryId' is set
      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling loRepositoryControllerModifyLearningObject");
      }
      // verify the required parameter 'learningObjectId' is set
      if (learningObjectId === undefined || learningObjectId === null) {
        throw new Error("Missing the required parameter 'learningObjectId' when calling loRepositoryControllerModifyLearningObject");
      }

      let pathParams = {
        'repositoryId': repositoryId,'learningObjectId': learningObjectId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LearningObjectDto;

      return this.apiClient.callApi(
        '/lo_repository/{repositoryId}/{learningObjectId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerModifyRepository operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerModifyRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoRepositoryDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/LoRepositoryModifyDto} body 
     * @param {String} repositoryId 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerModifyRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerModifyRepository(body, repositoryId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling loRepositoryControllerModifyRepository");
      }
      // verify the required parameter 'repositoryId' is set
      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling loRepositoryControllerModifyRepository");
      }

      let pathParams = {
        'repositoryId': repositoryId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LoRepositoryDto;

      return this.apiClient.callApi(
        '/lo_repository/{repositoryId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the loRepositoryControllerShowGoal operation.
     * @callback moduleapi/LearningObjectsApi~loRepositoryControllerShowGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoGoalDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} goalId 
     * @param {module:api/LearningObjectsApi~loRepositoryControllerShowGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    loRepositoryControllerShowGoal(goalId, callback) {
      
      let postBody = null;
      // verify the required parameter 'goalId' is set
      if (goalId === undefined || goalId === null) {
        throw new Error("Missing the required parameter 'goalId' when calling loRepositoryControllerShowGoal");
      }

      let pathParams = {
        'goalId': goalId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LoGoalDto;

      return this.apiClient.callApi(
        '/lo_repository/goals/{goalId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}