### 🖼️ Visual References

![Chart Challenge](src/assets/images/project.png)

### Table of Content:
- [Intro](#-Intro)
  - [Setup](#-Setup)
  - [What to do](#-What-To-Do)
  - [Folder Structure](#-📁-Folder-Structure)
  - [Evaluation](#-What-will-be-evaluated)
  - [Recommended Libraries](#-🗁-Recommended-Libraries)
  
**Section Specs**
- [Front End](#-Front-End)
  - [Front End specs](#-🔑-Front-End-Requirements:)
  - [XD Handoff](#-🎨-Design-Handoff)
- [Chart API](#-Chart-API)
  - [Chart API requirements](#-🔑-Chart-API-Requirements)
  - [API Specifications](#-API-Specifications)
  - [Get list of companies](#-Get-list-of-all-companies)
  - [Get list of individuals](#-Get-list-of-all-individuals)
  - [Schemas](#-Schemas)


### 🚀 Quickstart

1. **Install the dependencies**

   ```shell
   npm install
   ```

2. **Run the project**

   ```shell
   npm start
   ```

<details>
  <summary>**Q/A** - Questions & Answers</summary>

  > common questions and answers for getting started quickly

  - Q: What should I do ? 
  >  - :A Hop down and read the "what to do" section, the specifications, then have a look at the designs and figure out how to best implement these designs into a working prototype of the chart.
  - Where do I find the files for X? 
  >  - Check the section on folder structure, if it is still unclear let us know in the discord.
  - How do I deliver ? 
  >  - To deliver your solution you'll have to commit and push the repo, and then go to the Diggit-dashboard for the challenge to submit for evaluation. 
  - How do I know if I'm ready to submit ? 
  >  - Check the [Evaluation](#-What-will-be-evaluated) criteria section, where it is outlined a few quick questions to answer. If you feel you can answer to the positive on all these then you're probably ready to submit your solution. However you're free to add whatever extra layers of QA on top of these to suit your professional standards. 
  - I'm Stuck, help!
  >  - oof... we don't really do debugging for active challenges, but what we can recommend is that you take the extra time you need. You may just need to take a break, go have a coffee and take a walk. We often find it helps to simply take your mind off the problem for a little while to reboot your angle of approach. Once you come back, check again your progress towards the goals you'll be evaluated on, and see if there is something you hadn't considered before. We wish you the best of luck!

</details>



### 🎯 What To Do

Most of the dashboard is ready. But one important section is missing. 

Your task is to implement the gradient area charts - the centerpiece of this design. To provide charts with data you will need to create an ASP.NET API server.

The openAPI spec has already been provided.

So, in summary:
- Front-end: implement 2 charts that consume external data
- Back-end: build .NET API to serve data for the charts (details below and in "spec" folder)

<details>
  <summary>**Context** - the story leading up to your challenge</summary>

  > the story leading up to your challenge

  Innovation Norway is in charge of giving Norwegian ideas global opportunities. They offer critical help and support to startups. Each and every day, both companies and individuals book meetings with their advisors.

  The first step towards better services is a clear overview of current affairs. Innovation Norway needs to see how many companies and individuals they are in contact with. In the future, this dashboard can also show valuable insights such as the overall satisfaction, newly identified opportunities as well as potential efficiency improvements in their processes.

</details>



# Intro
[to table of contents](#-Table-of-Content:)

This first section should provide you with the overview to get started, and serve as a quick reference for what to do next. 

### Setup

    - clone the repo https://git.diggit.space/workable-welcome/diggit.content.frontend.chart.git
    - read, and understand the codebase
    - check out the developer handoff design link
    
### What To Do

    - Front-end: implement 2 charts that consume external data
    - Back-end: build .NET API to serve data for the charts (details below and in "spec" folder)


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

### What will be evaluated
Your performance will be evaluated on primarily these two fronts; design and code. 
The weights of these is roughly 40% on design and 60% on the code, and the questions are asked in order of importance within their respective subfields.
- **Design QA:** 
  - does your implementation match with the Design handoff, both in color and general aesthetics ? 
  - have you properly aligned your components following the grids and guidelines of the handoff ? 
- **Code QA:**
  - are your component interfaces logical and well-named, and are they easy for others to build with ? 
  - is your code consistent with the specifications provided ? (If unsure why; read up on Design-First ![swagger-blog on api-design](https://swagger.io/blog/api-design/design-first-or-code-first-api-development/) )
  - is your code clean, following internally consistent rules w.r.t spacing, quote-marks etc ?
  - are you using modern syntax, e.g. making use of React Hooks over class components ?


--- 
# Front End :
[to table of contents](#-Table-of-Content:)
This section contains the information regarding the front-end implementation expected from you. 
While 


### 🔑 Front End Requirements: 

- **Visual aspects**
  - Target Screen: **1920x1080** (but should work for all common desktop sizes)
  - Font: Montserrat (https://fonts.google.com/specimen/Montserrat)
  - Asset folder: `./src/assets`
  - Colors: check out `./src/assets`
- **Charts**
  - decide on a library you want to use for your implementation
  - review the code base, find a suitable place for the charts
  - build 2 charts ( Individuals and Companies ) around the data provided by the Chart API
  - you are free to be creative with the implementation of the charts, as long as they follow the specifications and designs provided. 
  - remember to include a gradient on the charts, it's a final touch to the project

### 🎨 Design Handoff

    Design Handoff: https://xd.adobe.com/view/82ec3234-0ad0-4067-86f2-8d244dcd22c2-d7bf/specs/

### 🗁 Recommended Libraries

- **Charts** - Chart.js; that's what we consider the most convenient one, but feel free to work with any library that works for you!
- React modules are fine, but for any **CSS logic** - styled-components.
- Any **custom animation?** - gsap.


### 🛣️ Roadmap ( clarify clickable elements ):

- **Top Navbar, Horizontal and vertical bars** - placeholders only.
- **Dropdowns** - feel free to add some bells and whistles, but it's not a requirement.
- **Charts** - charts don't include any clickable elements, but pop-up hover effects filled with data, improves readability.



---

# Chart API:
[to table of contents](#-Table-of-Content:)


### 🔑 Chart API Requirements

- **Chart API**
  - RESTful API built with ASP.NET framework
  - Fully complies with OpenAPI spec provided
  - You can add security features (like token auth) for bonus points (not included in OpenAPI spec)


### API Specifications 

This specification describes the API that is used to serve data for the front-end chart

Base URLs:

* <a href="http://localhost:3000">http://localhost:3000</a>

<h2 id="fullstackin-default">ENDPOINTS</h1>


### Get list of all companies

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

<h4 id="get-list-of-all-companies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of companies|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Something went wrong|None|

<h4 id="get-list-of-all-companies-responseschema">Response Schema</h3>

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

### Enumerated Values

|Property|Value|
|---|---|
|gender|male|
|gender|female|

<aside class="success">
This operation does not require authentication
</aside>

### Get list of all individuals

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



## Schemas

<h3 id="tocS_Company">Company</h2>
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



[to table of contents](#-Table-of-Content:)
