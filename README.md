# gen-search

Generate genealogy search links for a ton of websites.

````
var fsLink = gensearch('familysearch', {
  givenName: "Joe William",
  familyName: "Clark"
});
````

### __[Try the Demo](http://genealogysystems.github.io/gen-search/)__

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

## Sites

| Site Name | Site Key |
| ------------- | ------------- |
| [Ancestry.com](http://ancestry.com) | `ancestry` |
| [Archives](http://archives.com) | `archives` |
| [Billion Graves](http://billiongraves.com/) | `billiongraves` |
| [FamilySearch.org](http://familysearch.org)  | `familysearch`  |
| [Find-A-Grave](http://findagrave.com) | `findagrave` |
| [findmypast](http://findmypast.co.uk) | `findmypast` |
| [Fold3](http://fold3.com) | `fold3` |
| [Genealogy Bank](http://genealogybank.com) | `genealogybank` |
| [Geni](http://geni.com) | `geni` |
| [Newspapers.com](http://newspapers.com) | `newspapers` |
| [WeRelate.org](http://werelate.org) | `werelate` |
| [WorldVitalRecords](http://worldvitalrecords.com) | `worldvitalrecords` |

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
