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
 * The LoGoalDto model module.
 * @module model/LoGoalDto
 * @version 0.3.2
 */
export class LoGoalDto {
  /**
   * Constructs a new <code>LoGoalDto</code>.
   * @alias module:model/LoGoalDto
   * @class
   * @param id {String} 
   * @param repositoryId {String} 
   * @param name {String} 
   * @param competencies {Array.<String>} 
   * @param uberCompetencies {Array.<String>} 
   */
  constructor(id, repositoryId, name, competencies, uberCompetencies) {
    this.id = id;
    this.repositoryId = repositoryId;
    this.name = name;
    this.competencies = competencies;
    this.uberCompetencies = uberCompetencies;
  }

  /**
   * Constructs a <code>LoGoalDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoGoalDto} obj Optional instance to populate.
   * @return {module:model/LoGoalDto} The populated <code>LoGoalDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LoGoalDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('repositoryId'))
        obj.repositoryId = ApiClient.convertToType(data['repositoryId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('competencies'))
        obj.competencies = ApiClient.convertToType(data['competencies'], ['String']);
      if (data.hasOwnProperty('uberCompetencies'))
        obj.uberCompetencies = ApiClient.convertToType(data['uberCompetencies'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
LoGoalDto.prototype.id = undefined;

/**
 * @member {String} repositoryId
 */
LoGoalDto.prototype.repositoryId = undefined;

/**
 * @member {String} name
 */
LoGoalDto.prototype.name = undefined;

/**
 * @member {String} description
 */
LoGoalDto.prototype.description = undefined;

/**
 * @member {Array.<String>} competencies
 */
LoGoalDto.prototype.competencies = undefined;

/**
 * @member {Array.<String>} uberCompetencies
 */
LoGoalDto.prototype.uberCompetencies = undefined;
