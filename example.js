// https://dmitripavlutin.com/parse-url-javascript/

// const url = new URL(relativeOrAbsolute [, absoluteBase])

/* relativeOrAbsolute argument can be either an absolute or relative URL.
If the first argument is relative, then the second argument "absolutebase" is obligatory and must be an abosulte URL being the base for the first argument. Makes sense. */

let url = new URL('http://example.com/path/index.html')
console.log("url.href", url.href)
// This returns the entire url path provided.
// 'http://example.com/path/index.html'

let url2 = new URL('/path/index.html', 'http://example.com')
console.log("url2.href", url2.href)
//Returns the same result as above but shows how to use a relative URL

// After creating an URL() instance, you can access any URL component
// For reference, here's the URL() instance interface
/*
interface URL {
  href: USVString
  protocol: USVString
  username: USVString
  password: USVString
  host: USVString
  hostname: USVString
  port: USVString
  pathname: USVString
  search: USVString
  hash: USVString

  readonly origin: USVString
  readonly searchParams: URLSearchParams

  toJSON(): USVString
}
*/

// USVString type maps to a string when returned in JavaScript

// url.search property accesses the query string of the URL prefixed with ?

// If the query string is missing, url.search evaluates to an empty string '':

// url = new URL('http://example.com/path/index.html')
url2 = new URL('http://example.com/path/index.html?')
let url3 = new URL('http://example.com/path/index.html?q=val#hash')

// url1.search; // => ''
// url2.search; // => ''
// url3.search; // => '?q=val'
console.log("url3.search", url3.search)

//3.1 parsing the query string

//More handy than accessing the raw query string is to access the query parameters.

//An easy way to pick query parameters gives url.searchParams property. This property holds an instance of URLSearchParams.

//URLSearchParams object provides lots of methods (like get(param), has(param)) to access the query string parameters.

url3 = new URL('http://example.com/path/index.html?message=hello&who=world')

url3.searchParams.get('message') // => 'hello'
url3.searchParams.get('missing') // => null
url3.searchParams.has('message') // => true
url3.searchParams.has('missing') // => false

// console.log(url3.searchParams.has('message')) 
// console.log(url3.searchParams.has('missing')) 




