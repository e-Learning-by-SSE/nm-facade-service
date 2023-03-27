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
 * The ShallowLoRepositoryDto model module.
 * @module model/ShallowLoRepositoryDto
 * @version 0.3.2
 */
export class ShallowLoRepositoryDto {
  /**
   * Constructs a new <code>ShallowLoRepositoryDto</code>.
   * @alias module:model/ShallowLoRepositoryDto
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param owner {String} 
   */
  constructor(id, name, owner) {
    this.id = id;
    this.name = name;
    this.owner = owner;
  }

  /**
   * Constructs a <code>ShallowLoRepositoryDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShallowLoRepositoryDto} obj Optional instance to populate.
   * @return {module:model/ShallowLoRepositoryDto} The populated <code>ShallowLoRepositoryDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ShallowLoRepositoryDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
ShallowLoRepositoryDto.prototype.id = undefined;

/**
 * @member {String} name
 */
ShallowLoRepositoryDto.prototype.name = undefined;

/**
 * @member {String} owner
 */
ShallowLoRepositoryDto.prototype.owner = undefined;

/**
 * @member {String} description
 */
ShallowLoRepositoryDto.prototype.description = undefined;
