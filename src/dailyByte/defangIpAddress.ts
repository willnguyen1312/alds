/*
This question is asked by Amazon. Given a valid IP address, defang it.
Note: To defang an IP address, replace every ”.”, with ”[.]”. 

Ex: Given the following address…

address = "127.0.0.1", return "127[.]0[.]0[.]1"
*/

export function defangIpAddress(str: string): string {
  return str.replace(/\./g, "[.]")
}
