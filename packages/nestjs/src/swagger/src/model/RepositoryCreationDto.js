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
import {ApiClient} from '../ApiClient';

/**
 * The RepositoryCreationDto model module.
 * @module model/RepositoryCreationDto
 * @version 0.3.2
 */
export class RepositoryCreationDto {
  /**
   * Constructs a new <code>RepositoryCreationDto</code>.
   * @alias module:model/RepositoryCreationDto
   * @class
   * @param name {String} 
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>RepositoryCreationDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RepositoryCreationDto} obj Optional instance to populate.
   * @return {module:model/RepositoryCreationDto} The populated <code>RepositoryCreationDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RepositoryCreationDto();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('taxonomy'))
        obj.taxonomy = ApiClient.convertToType(data['taxonomy'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
RepositoryCreationDto.prototype.description = undefined;

/**
 * @member {String} taxonomy
 */
RepositoryCreationDto.prototype.taxonomy = undefined;

/**
 * @member {String} name
 */
RepositoryCreationDto.prototype.name = undefined;

/**
 * @member {String} version
 */
RepositoryCreationDto.prototype.version = undefined;

