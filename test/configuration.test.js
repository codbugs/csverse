// import test libraries
const { suite, test } = require('mocha');
const { assert } = require('chai');

// import object to test
const createConfiguration = require('../src/configuration.js');


suite('ma-csv', function() {

    suite('configuration', function() {

        suite('new()', function() {

            suite('columnSplitter parameter', function() {

                test('should throw error when is different from a string', function() {
                    assert.throw(() => new createConfiguration({
                        columnSplitter: null,
                        filePath: './file.csv'
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        columnSplitter: true,
                        filePath: './file.csv'
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        columnSplitter: false,
                        filePath: './file.csv'
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        columnSplitter: 1,
                        filePath: './file.csv'
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        columnSplitter: 0,
                        filePath: './file.csv'
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        columnSplitter: -1,
                        filePath: './file.csv'
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        columnSplitter: [],
                        filePath: './file.csv'
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        columnSplitter: {},
                        filePath: './file.csv'
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        columnSplitter: function() {},
                        filePath: './file.csv'
                    }), TypeError);
                });

                test('should return the value passed', function() {
                    const expected = ';;;';
                    const configuration = new createConfiguration({
                        columnSplitter: expected,
                        filePath: './file.csv'
                    });

                    assert.deepEqual(configuration.columnSplitter, expected);
                });
            });

            suite('filePath parameter', function() {

                test('should throw error when is different from a string', function() {
                    assert.throw(() => new createConfiguration({
                        filePath: null
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        filePath: true
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        filePath: false
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        filePath: 1
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        filePath: 0
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        filePath: -1
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        filePath: []
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        filePath: {}
                    }), TypeError);
                    assert.throw(() => new createConfiguration({
                        filePath: function() {}
                    }), TypeError);
                });

                
                test('should throw error when is an empty string', function() {
                    assert.throw(() => new createConfiguration({
                        filePath: ''
                    }), TypeError);
                });

                test('should return the value passed', function() {
                    const expected = './file.csv';
                    const configuration = new createConfiguration({
                        filePath: expected
                    });

                    assert.deepEqual(configuration.filePath, expected);
                });
            });

        });
    });
})