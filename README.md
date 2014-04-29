# gen-search

Generate genealogy search links for a ton of websites.

### __[Try the Demo](http://genealogysystems.github.io/gen-search/)__

* [Usage](#usage)
* [Installation Instructions](#install)
* [Person Data Schema](#schema)
* [Supported Sites](#sites)
* [Contributor's Guide](#contribute)

## Usage

```
// Generate a search link for FamilySearch
var url = gensearch('familysearch', {
  givenName: "Joe William",
  familyName: "Clark"
});

// Some options can be changed. Here we modify the birth year range
var url = gensearch('familysearch', data, {
  birthRange: 5
});

// Or we can set the configuration option once and have it apply to all future searches.
gensearch.config('familysearch', {
  birthRange: 5
});

// We can also set options for multiple sites at once
gensearch.config({
  familysearch: {
    birthRange: 5
  },
  archives: {
    deathRange: 10
  }
});
```

## Install

#### Web

Download the `gensearch.js` file and include on your page.

````
<script src="gensearch.js"></script>
````

#### Node

````
npm install gen-search
````

````
var genSearch = require('gen-search');
````

## Schema

* `givenName`
* `familyName`
* `birthPlace`
* `birthDate`
* `deathPlace`
* `deathDate`
* `marriagePlace`
* `marriageDate`
* `fatherGivenName`
* `fatherFamilyName`
* `motherGivenName`
* `motherFamilyName`
* `spouseGivenName`
* `spouseFamilyName`

## Sites

* [ancestry](#ancestry)
* [archives](#archives) 
* [billiongraves](#billiongraves) 
* [familysearch](#familysearch)
* [findagrave](#findagrave) 
* [findmypast](#findmypast) 
* [fold3](#fold3) 
* [genealogybank](#genealogybank) 
* [geni](#geni)
* [newspapers](#newspapers) 
* [werelate](#werelate)
* [worldvitalrecords](#worldvitalrecords) 

### ancestry

http://ancestry.com

```
var url = gensearch('ancestry', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `db` | | Search within a specific database. This value equates to the 'db' parameter value used by Ancestry. |

### archives

http://archives.com

```
var url = gensearch('archives', data);
```

| option | default |
|--------|---------|
| `birthRange` | 2 |
| `deathRange` | 2 |

### billiongraves

http://billiongraves.com/

```
var url = gensearch('billiongraves', data, [options]);
```

| option | default |
|--------|---------|
| `yearRange` | 2 |

### familysearch

https://familysearch.org

```
var url = gensearch('familysearch', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `birthRange` | 2 |
| `deathRange` | 2 |
| `marriageRange` | 2 |
| `collectionId` | | Only search within a specific collection. |

### findagrave

http://findagrave.com

```
var url = gensearch('findagrave', data);
```

### findmypast

http://findmypast.co.uk

```
var url = gensearch('findmypast', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `event` | | Type of event to search for. Valid values are `birth`, `death`, and `other`. The `otherDate` and `otherPlace` options are used when `event` is `other`.
| `birthRange` | 2 |
| `deathRange` | 2 |
| `otherRange` | 2 |
| `otherDate` | | Only used when `event` is `other`. |
| `otherPlace` | | Only used when `event` is `other`. |

### fold3

http://fold3.com

```
var url = gensearch('fold3', data);
```

Only `givenName` and `familyName` are used for Fold3 searches.

### genealogybank

http://genealogybank.com

```
var url = gensearch('genealogybank', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `lifespan` | 90 | If either a `birthDate` or `deathDate` exists, but not both, then this value is used to approximate the missing year. For example, if the `birthDate` is `2 Feb 1856` and no `deathDate` was given then we would subtract `lifespan` from the birth year to get an approximate death year of `1766`.|
| `datePadding` | 5 | This value is substracted from the calculated birth year and added to the calculated death year. |

### geni

http://geni.com

```
var url = gensearch('geni', data);
```

Only `givenName` and `familyName` are used for Geni searches.

### newspapers

http://www.newspapers.com/

```
var url = gensearch('newspapers', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `lifespan` | 90 | If either a `birthDate` or `deathDate` exists, but not both, then this value is used to approximate the missing year. For example, if the `birthDate` is `2 Feb 1856` and no `deathDate` was given then we would subtract `lifespan` from the birth year to get an approximate death year of `1766`.|
| `datePadding` | 5 | This value is substracted from the calculated birth year and added to the calculated death year. |

### werelate

http://werelate.org

```
var url = gensearch('werelate', data, [options]);
```

| option | default |
|--------|---------|
| `birthRange` | 2 |
| `deathRange` | 2 |

### worldvitalrecords

http://worldvitalrecords.com

```
var url = gensearch('worldvitalrecords', data, [options]);
```

| option | default |
|--------|---------|
| `dateRange` | 2 |


## Contribute

#### Setup

```
git clone https://github.com/genealogysystems/gen-search.git
cd gen-search
npm install
```

#### Add a site

1. Create the site file in the [src/sites](https://github.com/genealogysystems/gen-search/tree/master/src/sites) directory. Look at [archives.js](https://github.com/genealogysystems/gen-search/blob/master/src/sites/archives.js) for a simple example or [familysearch.js](https://github.com/genealogysystems/gen-search/blob/master/src/sites/familysearch.js) for a more complex example.
2. Add the new site to the [src/search.js] site list, in alphabetical order please.
3. Add a test file in the [test/sites](https://github.com/genealogysystems/gen-search/tree/master/test/sites) directory. Look at any of the other site test files for an example.
4. Run tests with `npm test`. The `gensearch.js` file will be automatically built with [browserify](https://github.com/substack/node-browserify) before the tests are run.
5. Document the new site in the README file, in alphabetical order please. Be sure to add a link in the site list just before the site specific docs.
6. Commit and submit a pull request.
