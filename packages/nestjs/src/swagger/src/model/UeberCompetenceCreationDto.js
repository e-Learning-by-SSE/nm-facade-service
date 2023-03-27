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
 * The UeberCompetenceCreationDto model module.
 * @module model/UeberCompetenceCreationDto
 * @version 0.3.2
 */
export class UeberCompetenceCreationDto {
  /**
   * Constructs a new <code>UeberCompetenceCreationDto</code>.
   * @alias module:model/UeberCompetenceCreationDto
   * @class
   * @param name {String} 
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>UeberCompetenceCreationDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UeberCompetenceCreationDto} obj Optional instance to populate.
   * @return {module:model/UeberCompetenceCreationDto} The populated <code>UeberCompetenceCreationDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UeberCompetenceCreationDto();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('nestedCompetencies'))
        obj.nestedCompetencies = ApiClient.convertToType(data['nestedCompetencies'], ['String']);
      if (data.hasOwnProperty('nestedUeberCompetencies'))
        obj.nestedUeberCompetencies = ApiClient.convertToType(data['nestedUeberCompetencies'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
UeberCompetenceCreationDto.prototype.name = undefined;

/**
 * @member {String} description
 */
UeberCompetenceCreationDto.prototype.description = undefined;

/**
 * @member {Array.<String>} nestedCompetencies
 */
UeberCompetenceCreationDto.prototype.nestedCompetencies = undefined;

/**
 * @member {Array.<String>} nestedUeberCompetencies
 */
UeberCompetenceCreationDto.prototype.nestedUeberCompetencies = undefined;
