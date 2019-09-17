//import CryptoJS from 'crypto-js'
import CryptoJS from 'crypto-js/crypto-js';
/**
 * aes加密
 * 加密模式 ECB+pkcs7
 * @param {string} text - JSON序列化后的字符串（包含 姓名、手机号、身份证号）
 * @param {string} keyStr - apiKey
 */
export function aesEncript(text, keyStr) {
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const encryptResult = CryptoJS.AES.encrypt(text, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString()
    return encryptResult
}