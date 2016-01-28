[![Build Status](https://travis-ci.org/rootsdev/gensearch.svg)](https://travis-ci.org/rootsdev/gensearch)
[![Coverage Status](https://coveralls.io/repos/rootsdev/gensearch/badge.svg)](https://coveralls.io/r/rootsdev/gensearch)

# gensearch

Generate search links for a many genealogy websites.

### __[Try the Demo](http://rootsdev.github.io/gensearch/)__

* [Usage](#usage)
* [Installation Instructions](#install)
* [Person Data Schema](#schema)
* [Supported Sites](#sites)
* [Contributor's Guide](#contribute)

## Usage

```javascript
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

```html
<script src="gensearch.js"></script>
```

#### Node

```shell
npm install gen-search
```

```javascript
var genSearch = require('gen-search');
```

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

* [americanancestors](#americanancestors)
* [ancestry](#ancestry)
* [archives](#archives)
* [billiongraves](#billiongraves)
* [chroniclingamerica](#chroniclingamerica)
* [familysearch](#familysearch)
* [findagrave](#findagrave)
* [findmypast.co.uk](#findmypastcouk)
* [findmypast.com](#findmypastcom)
* [fold3](#fold3)
* [genealogieonline](#genealogieonline)
* [genealogybank](#genealogybank)
* [geneanet.en](#geneaneten)
* [gengophers](#gengophers)
* [geni](#geni)
* [google](#google)
* [mocavo](#mocavo)
* [myheritage](#myheritage)
* [nla trove](#nla-trove)
* [newspapers](#newspapers) 
* [openarchives](#openarchives) 
* [usgenweb](#usgenweb)
* [werelate](#werelate)
* [wikitree](#wikitree)
* [worldvitalrecords](#worldvitalrecords) 

### americanancestors

http://www.americanancestors.org/

```javascript
var url = gensearch('americanancestors', data);
```

### ancestry

http://ancestry.com

```javascript
var url = gensearch('ancestry', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `db` | | Search within a specific database. This value equates to the 'db' parameter value used by Ancestry. |

### archives

http://archives.com

```javascript
var url = gensearch('archives', data);
```

| option | default |
|--------|---------|
| `birthRange` | 2 |
| `deathRange` | 2 |

### billiongraves

http://billiongraves.com/

```javascript
var url = gensearch('billiongraves', data, [options]);
```

| option | default |
|--------|---------|
| `yearRange` | 2 |

### chroniclingamerica

http://chroniclingamerica.loc.gov/

```javascript
var url = gensearch('chroniclingamerica', data);
```

### familysearch

https://familysearch.org

```javascript
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

```javascript
var url = gensearch('findagrave', data);
```

### findmypast.co.uk

http://findmypast.co.uk

```javascript
var url = gensearch('findmypast.co.uk', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `event` | | Type of event to search for. Valid values are `birth`, `death`, and `other`. The `otherDate` and `otherPlace` options are used when `event` is `other`.
| `birthRange` | 2 |
| `deathRange` | 2 |
| `otherRange` | 2 |
| `otherDate` | | Only used when `event` is `other`. |
| `otherPlace` | | Only used when `event` is `other`. |

### findmypast.com

http://findmypast.com

```javascript
var url = gensearch('findmypast.com', data, [options]);
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

```javascript
var url = gensearch('fold3', data);
```

Only `givenName` and `familyName` are used for Fold3 searches.

### genealogieonline

http://genealogieonline.nl/en/

```javascript
var url = gensearch('genealogieonline', data, [options]);
```

| option | default |
|--------|---------|
| `birthRange` | 5 | 
| `deathRange` | 5 |

### genealogybank

http://genealogybank.com

```javascript
var url = gensearch('genealogybank', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `lifespan` | 90 | If either a `birthDate` or `deathDate` exists, but not both, then this value is used to approximate the missing year. For example, if the `birthDate` is `2 Feb 1766` and no `deathDate` is given then we would add `lifespan` to the birth year to get an approximate death year of `1856`. |
| `datePadding` | 5 | This value is substracted from the calculated birth year and added to the calculated death year. |

### geneanet.en

http://en.geneanet.org/

```javascript
var url = gensearch('geneanet.en', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `place` | `birth` | Determines whether the birth or death place is used for searching. Values: `birth` or `death`. |

### gengophers

https://www.gengophers.com

```javascript
var url = gensearch('gengophers', data);
```

### geni

http://geni.com

```javascript
var url = gensearch('geni', data);
```

Only `givenName` and `familyName` are used for Geni searches.

### google

https://www.google.com

```javascript
var url = gensearch('google', data);
```

### mocavo

http://www.mocavo.com/

```javascript
var url = gensearch('mocavo', data);
```

### myheritage

http://www.myheritage.com

```javascript
var url = gensearch('myheritage', data);
```

### newspapers

http://www.newspapers.com/

```javascript
var url = gensearch('newspapers', data, [options]);
```

| option | default | notes |
|--------|---------|-------|
| `lifespan` | 90 | If either a `birthDate` or `deathDate` exists, but not both, then this value is used to approximate the missing year. For example, if the `birthDate` is `2 Feb 1766` and no `deathDate` is given then we would add `lifespan` to the birth year to get an approximate death year of `1856`. |
| `datePadding` | 5 | This value is substracted from the calculated birth year and added to the calculated death year. |

### nla trove

http://trove.nla.gov.au/

```javascript
var url = gensearch('nlatrove', data);
```

### openarchives

http://openarch.nl

```javascript
var url = gensearch('openarchives', data);
```

Only `givenName` and `familyName` are used for Open Archive searches.

### usgenweb

http://www.usgwarchives.net/

```javascript
var url = gensearch('usgenweb', data);
```

### werelate

http://werelate.org

```javascript
var url = gensearch('werelate', data, [options]);
```

| option | default |
|--------|---------|
| `birthRange` | 2 |
| `deathRange` | 2 |

### wikitree

http://www.wikitree.com/

```javascript
var url = gensearch('wikitree', data);
```

### worldvitalrecords

http://worldvitalrecords.com

```javascript
var url = gensearch('worldvitalrecords', data, [options]);
```

| option | default |
|--------|---------|
| `dateRange` | 2 |


## Contribute

#### Setup

```shell
git clone https://github.com/rootsdev/gen-search.git
cd gen-search
npm install
```

#### Add a site

1. Create the site file in the [src/sites](https://github.com/rootsdev/gen-search/tree/master/src/sites) directory. Look at [archives.js](https://github.com/rootsdev/gen-search/blob/master/src/sites/archives.js) for a simple example or [familysearch.js](https://github.com/rootsdev/gen-search/blob/master/src/sites/familysearch.js) for a more complex example.
2. Add the new site to the [src/search.js](https://github.com/rootsdev/gen-search/blob/master/src/search.js) site list, in alphabetical order please.
3. Add a test file in the [test/sites](https://github.com/rootsdev/gen-search/tree/master/test/sites) directory. Look at any of the other site test files for an example.
4. Run tests with `npm test`. The `gensearch.js` file will be automatically built with [browserify](https://github.com/substack/node-browserify) before the tests are run.
5. Document the new site in the README file, in alphabetical order please. Be sure to add a link in the site list just before the site specific docs.
6. Commit and submit a pull request.
