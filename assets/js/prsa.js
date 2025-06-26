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
    const message = myStr;
    const encrypted = publicKey.encrypt(message, "RSA-OAEP");
    return forge.util.encode64(encrypted);
}

function hashDeterministically(str) {
  const md = forge.md.sha256.create();
  md.update(str);
  return md.digest().toHex();
}

function stringToHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return -Math.abs(hash << 2);
}
