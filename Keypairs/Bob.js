const publicKey = 
`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCpu2TooWqyt6LiWTzwrdyih3Ypzl7h+VRpxgUbfKaysyLwd+kqz/O3r14uw75QhOyA7bkn8OwmmrWwk9J0YZE22CYYEnoghMqoRAQVD5C08272xJ1Ny0pG2JDZ4EJfzb717OKyUFT9aFVQZY/GLij7dnelErLFOPeyDs7M4njQmQIDAQAB`;

const privateKey = 
`MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAKm7ZOiharK3ouJZPPCt3KKHdinOXuH5VGnGBRt8prKzIvB36SrP87evXi7DvlCE7IDtuSfw7CaatbCT0nRhkTbYJhgSeiCEyqhEBBUPkLTzbvbEnU3LSkbYkNngQl/NvvXs4rJQVP1oVVBlj8YuKPt2d6USssU497IOzszieNCZAgMBAAECgYA9sMrAcsrhIjWlp2Gq6MZknG+qSkPaRlEUENESaH/+O3XbiPnKgcLHZIoK3UJy6Z08TysZBUwPy/N1toSroDqy6KNJ9MKmXrfloJapdMHVTe8Zzflafbkpy9xc3LQLmH8QK+AKQn2xFnIS3nlLPsG183F59dWfdhFg6uOqQ2TeAQJBANw4XsoWaFGk1ApKG2XV8jb6Pzqd16kfDrq3lu1Kxs88K5JFyJDJiwiMQa7afW4h4TqRQntLRIWl9BEhO35nu9ECQQDFTxDv3lVwbQPlKfCZOrePvjAnpd4BSTARDsZw9Vvmn5YBMYDe4mAPMJqjJXebkA7fWcCzshMq5+n3RDB16qJJAkEAoeLqg6KfQ01o9rttkpoJObMSohOAgvmqyUXGtF+g8Jzp5thXzV/rTfhVHKXPSROsz3ITLjGxiJHrbmBArPay0QJACGot070MscXEc8KNI0vQxk2bKiW1ySJA7YlOx0R/jd9ie1yMHXVUGXG+NpUDe9vx9m6SfFds39iSLtx2oKDIGQJAH7toWYooI4RvOvYBa6vHXJfAZApxrMvf0Gwh3g+RC2QElOdB7/QU0MIlTWsRJ54oFCuoMPuo04Qyq6BBMVQzWQ==`

const updateSymmetricKeys = (newSymmetricKeys) => {
    symmetricKeys.push(newSymmetricKeys);
};

let symmetricKeys = [
    {
        groupId: "815aaf9a-cf9a-4eae-ac45-c3d8505132b2",
        key: "asodhalsdhja;lskdjsa;dlwasd",
    }
];

module.exports = { privateKey, publicKey, symmetricKeys, updateSymmetricKeys };