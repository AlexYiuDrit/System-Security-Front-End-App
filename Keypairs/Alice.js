const publicKey = 
`MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJjQ4hjcfkaNY+oUYVoRKnNbIcOpbxvkQSBcLLB/U0wf1F2//3+1zwtqdrbOemRZt5ipg9TNnh+J9vJ6LnmBPY8CAwEAAQ==`;

const privateKey = 
`MIIBUwIBADANBgkqhkiG9w0BAQEFAASCAT0wggE5AgEAAkEAmNDiGNx+Ro1j6hRhWhEqc1shw6lvG+RBIFwssH9TTB/UXb//f7XPC2p2ts56ZFm3mKmD1M2eH4n28noueYE9jwIDAQABAkArv5Ea4PTdqdiyyMbeDBAFGk/ePgFrELt8UicRGEJ2hizqo+7ytegGFc69gIf7qll7/hXg3OaJp/NCjtK4iObRAiEAzM59LHKm9Hia344435lOxq6Dx9ExYxzMhXFS9g9lCmMCIQC/A4dabIgCAal0yJdGvV3GgKc5NDqgDhXuBKiitvYx5QIgcZYX0B3qQG3fHxtmqYQCL6i8B4cax+hB+cRHCZayKBcCIHnfr4HjU5gsJUnNHrBU7LtVpNyb1Xf/5MAcGtjO8iB9AiAWEf9MNFfo/znHRFo/6hxVVg1bOdf/OnetoppSHFcUVw==`


const updateSymmetricKeys = (newSymmetricKeys) => {
    symmetricKeys = newSymmetricKeys;
};

let symmetricKeys = [{
    groupId: "815aaf9a-cf9a-4eae-ac45-c3d8505132b2",
    key: "asodhalsdhja;lskdjsa;dlwasd",
}];

module.exports = { privateKey, publicKey, symmetricKeys, updateSymmetricKeys };