var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-Realm',
    // realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAscM6/UdSDEfOOCxDozcEGj7OTN7sjfr/DffZFvhpimMmmNoc6u2JnlRLVXrmvQXPD8kvgp73uqEAvnY9dn/3F1iJspWKF9SddjgLuJhZfgFpu7Ry+mD4o6rtFz5npiG7+cCst1xHYLL8UliH+GIgicSwlT3Vcd7FHT/VppCcbCJZfx0f2s9M8CLDj7ZENunyQ1tbzV/zwndYJGIcV246mAcjtGd3dseKd4cXgdng0gN7HrdyI2znZVjpeYQ4/qLnMp0GXMmK47LvJG5X1o5Sg2MT1Acfk4ZD+8FBR08dvOoIens+X7mvuOsCDsTB6N74CtMdeuSK1U2UJsEfuLk3WQIDAQAB',
    credentials: {
        secret: '496af5d2-6b93-4a73-89c4-a58ae4907330'
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};