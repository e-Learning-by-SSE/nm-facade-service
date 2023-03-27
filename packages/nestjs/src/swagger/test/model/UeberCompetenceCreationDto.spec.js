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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CompetenceRepositoryApi);
  }
}(this, function(expect, CompetenceRepositoryApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('UeberCompetenceCreationDto', function() {
      beforeEach(function() {
        instance = new CompetenceRepositoryApi.UeberCompetenceCreationDto();
      });

      it('should create an instance of UeberCompetenceCreationDto', function() {
        // TODO: update the code to test UeberCompetenceCreationDto
        expect(instance).to.be.a(CompetenceRepositoryApi.UeberCompetenceCreationDto);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property nestedCompetencies (base name: "nestedCompetencies")', function() {
        // TODO: update the code to test the property nestedCompetencies
        expect(instance).to.have.property('nestedCompetencies');
        // expect(instance.nestedCompetencies).to.be(expectedValueLiteral);
      });

      it('should have the property nestedUeberCompetencies (base name: "nestedUeberCompetencies")', function() {
        // TODO: update the code to test the property nestedUeberCompetencies
        expect(instance).to.have.property('nestedUeberCompetencies');
        // expect(instance.nestedUeberCompetencies).to.be(expectedValueLiteral);
      });

    });
  });

}));
