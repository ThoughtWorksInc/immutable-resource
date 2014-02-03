describe("Immutable Storage", function() {

    var storageFactory = require('../js/immutable-storage.js');

    it("should fail to create repository over unknown storage ", function() {
        var repository = storageFactory.createRepository('patient', {"type": "someUnknownStorage", "url": "http://localhost:9200", "indexName": "immutable-resource"});
        expect(repository).toBeNull();
    });
});