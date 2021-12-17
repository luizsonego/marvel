
import MD5 from "crypto-js/md5";
import { timeStamp } from "./formatTime";

export function hashApiMArvel() {
  return MD5(`${timeStamp()}${process.env.REACT_APP_PRIVATEKEY}${process.env.REACT_APP_PUBLICKEY}`).toString()
}