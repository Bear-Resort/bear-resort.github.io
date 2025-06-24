const publicKey = forge.pki.publicKeyFromPem(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzKnJjljrMV6Lqm6fd69E
RIidSJikz/2ird11cSttk1DwgzhnEwCIA0AtXHtQrGPsxU/FGvvXAtgThm7ojlVG
FkMYALDfOjDwFaCIpZvedVxul3qw6flx5458mGMTPKPI0j56gjcQAzLKglvftuq0
CuVhxqyt9UPs+ioCLKDlEy/TOsr+BAxqzAV8sAnezPSpKb2z5dt9CC0t0sunhGBx
dn2CS/Gh876AtETwhqPNHkOuRSdObjXXha1UtA1ZZiWMxPPSqzOlwn7ZHOvHnbq+
AhZyE+cx8PDqjzqaqlUdlbpiaBi/WxNsLh+xQsjdNHtLC2g1vYkp9KIT4+bYyCyG
2QIDAQAB
-----END PUBLIC KEY-----`);

function encodeRSA(myStr) {
    // Save original random function
    const originalRandomBytes = forge.random.getBytes;

    // Patch randomness with fixed bytes
    forge.random.getBytes = function (count) {
    return '\x00'.repeat(count);  // or use any fixed value
    };

    const message = myStr;

    // Encrypt deterministically
    const encrypted = publicKey.encrypt(message, 'RSAES-PKCS1-V1_5');

    // Restore original randomness
    forge.random.getBytes = originalRandomBytes;
    
    return forge.util.encode64(encrypted);
}