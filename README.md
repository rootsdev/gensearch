# gen-search

Generate genealogy search links for a ton of websites.

### __[Try the Demo](http://genealogysystems.github.io/gen-search/)__

* [Usage](#usage)
* [Installation Instructions](#install)
* [Person Data Schema](#schema)
* [Supported Sites](#sites)

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
genesearch.config({
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
var url = gensearch('ancestry', data);
```

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

| option | default |
|--------|---------|
| `birthRange` | 2 |
| `deathRange` | 2 |
| `marriageRange` | 2 |

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
