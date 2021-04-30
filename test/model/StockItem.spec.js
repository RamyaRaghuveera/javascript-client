/*
 * template-spring-boot
 * Description
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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
    factory(root.expect, root.TemplateSpringBoot);
  }
}(this, function(expect, TemplateSpringBoot) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('StockItem', function() {
      beforeEach(function() {
        instance = new TemplateSpringBoot.StockItem();
      });

      it('should create an instance of StockItem', function() {
        // TODO: update the code to test StockItem
        expect(instance).to.be.a(TemplateSpringBoot.StockItem);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturer (base name: "manufacturer")', function() {
        // TODO: update the code to test the property manufacturer
        expect(instance).to.have.property('manufacturer');
        // expect(instance.manufacturer).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property stock (base name: "stock")', function() {
        // TODO: update the code to test the property stock
        expect(instance).to.have.property('stock');
        // expect(instance.stock).to.be(expectedValueLiteral);
      });

    });
  });

}));
