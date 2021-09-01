### 🖼️ Visual References

![Chart Challenge](src/assets/images/project.png)

### 🚀 Quickstart

#### Setup

    - clone the repo https://git.diggit.space/workable-welcome/diggit.content.frontend.chart.git
    - understand the codebase
    - check out the developer handoff design link

#### What To Do

    - Front-end: implement 2 charts that consume external data
    - Back-end: build .NET API to serve data for the charts (details below and in "spec" folder)

### 🎨 Adobe XD Design Handoff

    Design Handoff: https://xd.adobe.com/view/82ec3234-0ad0-4067-86f2-8d244dcd22c2-d7bf/specs/


### 📁 Folder Structure

Here’s an overview of the folder structure. Each element is briefly described.

    ├── public/    # contains the HTML file so you can tweak it, for example, to set the page title and other static files
    ├── spec/    # contains the OpenAPI spec file you can use to build API
    ├── src/               # the main container for your project
    │   │
    │   ├── assets/          # images, icons, colors
    │   ├── components/          # anything that could be a reusable piece of UI lands here
    │   ├── screens/       # each screen is build with multiple components and together they create a screen to display for a user such as Homepage, About, Catalog etc
    │   ├── utls/      # reusable JavaScript functions that support the project such as custom hooks

### 📖 Specification Overview:

- Target Screen: **1920x1080** (but should work for all common desktop sizes)
- Font: Montserrat (https://fonts.google.com/specimen/Montserrat)
- Asset folder: `./src/assets`
- Colors: check out `./src/assets`

### 🔑 Implementation Requirements

- **Charts**
  - decide on a library you want to use for your implementation
  - review the code base, find a suitable place for the charts
  - build 2 charts ( Individuals and Companies ) around the data provided by the Chart API
  - you are free to be creative with the implementation of the charts, as long as they follow the specifications and designs provided. 
  - remember to include a gradient on the charts, it's a final touch to the project
- **Chart API**
  - RESTful API built with ASP.NET framework
  - Fully complies with OpenAPI spec provided
  - You can add security features (like token auth) for bonus points (not included in OpenAPI spec)
  
### What will be evaluated
- **Design QA:** 
  - does your implementation match with the Design handoff, both in color and general aesthetics ? 
  - have you properly aligned your components following the grids and guidelines of the handoff ? 
- **Code QA:** 
  - are your component interfaces logical and well-named, and are they easy for others to build with ? 
  - is your code clean, following internally consistent rules w.r.t spacing, quote-marks etc ?
  - are you using up-to-date syntax, e.g. making use of React Hooks over class components + 
  - is your code consistent with the specifications provided ? (If unsure why; read up on Design-First ![swagger-blog on api-design](https://swagger.io/blog/api-design/design-first-or-code-first-api-development/)

### 🛣️ Roadmap ( clarify clickable elements ):

- **Top Navbar, Horizontal and vertical bars** - placeholders only.
- **Dropdowns** - feel free to add some bells and whistles, but it's not a requirement.
- **Charts** - charts don't include any clickable elements, but pop-up hover effects filled with data, improves readability.

### 🗁 Recommended Libraries

- **Charts** - Chart.js; that's what we consider the most convenient one, but feel free to work with any library that works for you!
- React modules are fine, but for any **CSS logic** - styled-components.
- Any **custom animation?** - gsap.

### 👴 Challenge Context

Innovation Norway is in charge of giving Norwegian ideas global opportunities. They offer critical help and support to startups. Each and every day, both companies and individuals book meetings with their advisors.

The first step towards better services is a clear overview of current affairs. Innovation Norway needs to see how many companies and individuals they are in contact with. In the future, this dashboard can also show valuable insights such as the overall satisfaction, newly identified opportunities as well as potential efficiency improvements in their processes.


<h1 id="fullstackin">Chart API Specification</h1>

This specification describes the API that is used to serve data for the front-end chart

Base URLs:

* <a href="http://localhost:3000">http://localhost:3000</a>

<h1 id="fullstackin-default">ENDPOINTS</h1>

## Get list of all companies

<a id="opIdget-companies"></a>

`GET /companies`

Retrieve a list of companies

> Example response

```json
[
  {
    "id": 1,
    "name": "Google",
    "advisor": "Adam Smith",
    "gender": "male",
    "meetingDate": "2021-10-31"
  },
  {
    "id": 2,
    "name": "Netflix",
    "advisor": "Simen Newton",
    "gender": "female",
    "meetingDate": "2021-04-11"
  }
]
```

<h3 id="get-list-of-all-companies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of companies|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Something went wrong|None|

<h3 id="get-list-of-all-companies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*ROOT*|[[Company](#schemacompany)]|true|none|[Model of company entry]|
|» Company|[Company](#schemacompany)|true|none|Model of company entry|
|»» id|integer|true|none|Unique identifier for the given company.|
|»» name|string|true|none|Name of the company|
|»» advisor|string|true|none|Full name of company's advisor|
|»» gender|string|true|none|male/female|
|»» meetingDate|string(date)|true|none|Date|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|male|
|gender|female|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of all individuals

<a id="opIdget-individuals"></a>

`GET /individuals`

Retrieve a list of individuals

> Example response

```json
[
  {
    "id": 1,
    "name": "Ivan",
    "surname": "Malkov",
    "gender": "male",
    "meetingDate": "2019-08-24"
  }
]
```

<h3 id="get-list-of-all-individuals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of individuals|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Something went wrong|None|

<h3 id="get-list-of-all-individuals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*ROOT*|[[Individual](#schemaindividual)]|true|none|[Model of Individual entry]|
|» Individual|[Individual](#schemaindividual)|true|none|Model of Individual entry|
|»» id|integer|true|none|Unique id of a person|
|»» name|string|true|none|First name of a person|
|»» surname|string|true|none|Person's surname|
|»» gender|string|true|none|male/female|
|»» meetingDate|string(date)|true|none|Date|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|male|
|gender|female|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Company">Company</h2>
<!-- backwards compatibility -->
<a id="schemacompany"></a>
<a id="schema_Company"></a>
<a id="tocScompany"></a>
<a id="tocscompany"></a>

```json
{
  "id": 0,
  "name": "string",
  "advisor": "string",
  "gender": "male",
  "meetingDate": "2019-08-24"
}

```

Company

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Unique identifier for the given company.|
|name|string|true|none|Name of the company|
|advisor|string|true|none|Full name of company's advisor|
|gender|string|true|none|male/female|
|meetingDate|string(date)|true|none|Date|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|male|
|gender|female|

<h2 id="tocS_Individual">Individual</h2>
<!-- backwards compatibility -->
<a id="schemaindividual"></a>
<a id="schema_Individual"></a>
<a id="tocSindividual"></a>
<a id="tocsindividual"></a>

```json
{
  "id": 0,
  "name": "string",
  "surname": "string",
  "gender": "male",
  "meetingDate": "2019-08-24"
}

```

Individual

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Unique id of a person|
|name|string|true|none|First name of a person|
|surname|string|true|none|Person's surname|
|gender|string|true|none|male/female|
|meetingDate|string(date)|true|none|Date|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|male|
|gender|female|
