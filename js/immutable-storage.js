exports.createRepository = function (repositoryType, storageParams) {

    var Repository = require('./repository.js');

    if (storageParams.type === 'es') {
        var EsStorage = require('./storage/es');
        var elasticSearch = new EsStorage(storageParams.url, storageParams.indexName);
        return new Repository(elasticSearch, repositoryType);
    }
    else if (storageParams.type === 'local') {
        var HtmlLocalStorage = require('./storage/html-local-storage');
        var ManualSnapshotStrategy = require('../js/storage/snapshot/manual-snapshot-strategy');
        var htmlLocalStorage = new HtmlLocalStorage(ManualSnapshotStrategy);
        return new Repository(htmlLocalStorage, repositoryType);
    }
    else if (storageParams.type === 'memory') {
        var memoryStorage = require('../js/storage/memory');
        return new Repository(memoryStorage, repositoryType);
    }
    else {
        return null;
    }
};