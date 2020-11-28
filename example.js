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

// 4 Hostname - url.hostname property holds the hostname of the URL

console.log("url3.hostname", url3.hostname) // => "example.com"

//5 Pathname - url.pathname property accesses the pathname of the URL

console.log("url3.pathname", url3.pathname) // => "/path/index.html"

//If the URL does not have a path. the url.pathname property returns a slash "/"

const url4 = new URL("http://example.com")

console.log("url4.pathname", url4.pathname)

//6 Hash - the hash can be accessed using url.hash property:

const url5 = new URL('http://example.com/path/index.html#bottom')
url5.hash // => '#bottom'

// When the hash in the URL is missing, url.hash evaluates to an empty string ''

// 7 URL Validation

// When new URL() constructor creates an instance, as a side effect, it also validates the URL for correctness. If the URL value is invalid, a TypeError is thrown.

// For example, http ://example.com is an invalid URL because of the space character after http.

// Let’s use this invalid URL to initialize the parser:

try {
  const url6 = new URL('http ://example.com')
} catch (error) {
  error // => TypeError, "Failed to construct URL: Invalid URL"
}

// 8 - URL Manipulation

// Aside from accessing URL components, the properties like search, hostname, pathname, hash are writeable — thus you can manipulate the URL.

// For example, let’s modify the hostname of an existing URL from red.com to blue.io:

const url7 = new URL('http://red.com/path/index.html')

url7.href // => 'http://red.com/path/index.html'

url7.hostname = 'blue.io'

url7.href // => 'http://blue.io/path/index.html'

//Note that only origin and searchParams properties of the URL() instance are readonly. All the other one are writable and modify the URL when you change them.