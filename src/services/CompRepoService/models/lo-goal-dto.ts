/* tslint:disable */
/* eslint-disable */
/**
 * Competence Repository
 * The API description of the Competence Repository.
 *
 * OpenAPI spec version: 0.3.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface LoGoalDto
 */
export interface LoGoalDto {
    /**
     * 
     * @type {string}
     * @memberof LoGoalDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof LoGoalDto
     */
    repositoryId: string;
    /**
     * 
     * @type {string}
     * @memberof LoGoalDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LoGoalDto
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof LoGoalDto
     */
    competencies: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LoGoalDto
     */
    uberCompetencies: Array<string>;
}
