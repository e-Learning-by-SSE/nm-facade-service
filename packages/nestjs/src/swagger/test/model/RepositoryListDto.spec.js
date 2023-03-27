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
    describe('RepositoryListDto', function() {
      beforeEach(function() {
        instance = new CompetenceRepositoryApi.RepositoryListDto();
      });

      it('should create an instance of RepositoryListDto', function() {
        // TODO: update the code to test RepositoryListDto
        expect(instance).to.be.a(CompetenceRepositoryApi.RepositoryListDto);
      });

      it('should have the property repositories (base name: "repositories")', function() {
        // TODO: update the code to test the property repositories
        expect(instance).to.have.property('repositories');
        // expect(instance.repositories).to.be(expectedValueLiteral);
      });

    });
  });

}));