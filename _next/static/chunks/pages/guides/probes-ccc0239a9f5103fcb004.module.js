(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{LSgu:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),o=n.n(i),l=n("7ljp"),s=n("er9C"),b=(o.a.createElement,{}),c={meta:b},m=e=>{var{children:t}=e,n=Object(r.a)(e,["children"]);return Object(l.b)(s.a,Object(a.a)({meta:b},n),t)};function p(e){var{components:t}=e,n=Object(r.a)(e,["components"]);return Object(l.b)(m,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"probes"},"Probes",Object(l.b)("a",{parentName:"h1",href:"#probes",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Probes are the heart of the monitoring requests. Probes are arrays of request objects defined in the config file ",Object(l.b)("inlineCode",{parentName:"p"},"config.json")," like so."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "Name of the probe",\n      "description": "Probe to check GET time",\n      "interval": 10,\n      "request": { },\n      "alerts": []\n    },\n    {\n      "id": "2",\n      "name": "Name of the probe 2",\n      "description": "Probe to check GET health",\n      "interval": 10,\n      "request": { },\n      "alerts": []\n    }\n  ]\n')),Object(l.b)("p",null,"Monika goes through each probe object, sends it out, and determines whether an alert or notification need to be sent out."),Object(l.b)("h2",{id:"request-anatomy"},"Request Anatomy",Object(l.b)("a",{parentName:"h2",href:"#request-anatomy",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"An actual probe request may be something like below."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "Example: get Time",\n      "description": "Probe",\n      "interval": 10,\n      "request": {\n        "method": "POST",\n        "url": "https://mybackend.org/user/login",\n        "timeout": 7000,\n        "headers": {\n          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhlbGxvIGZyb20gSHlwZXJqdW1wIiwiaWF0IjoxNTE2MjM5MDIyfQ.T2SbP1G39CMD4MMfkOZYGFgNIQgNkyi0sPdiFi_DfVA"\n        },\n        "body": {\n          "username": "someusername",\n          "password": "somepassword"\n        }\n      },\n      "incidentThreshold": 3,\n      "recoveryThreshold": 3,\n      "alerts": ["status-not-2xx", "response-time-greater-than-200-ms"]\n    },\n  ]\n')),Object(l.b)("p",null,"Details of the field are give in the table below."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Topic"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"method"),Object(l.b)("td",{parentName:"tr",align:null},"Http method such as GET, POST, PUT, DELETE")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"url"),Object(l.b)("td",{parentName:"tr",align:null},"This is the url endpoint to dispatch the request to")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"timeout"),Object(l.b)("td",{parentName:"tr",align:null},"Request timeout, after which time, ",Object(l.b)("inlineCode",{parentName:"td"},"Monika"),"will assume timeout")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"headers"),Object(l.b)("td",{parentName:"tr",align:null},"Your http header")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"body"),Object(l.b)("td",{parentName:"tr",align:null},"Any http body if your method requires it")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"interval (optional)"),Object(l.b)("td",{parentName:"tr",align:null},"Number of probe's interval (in seconds). Default value is 10 seconds.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"incidentThreshold (optional)"),Object(l.b)("td",{parentName:"tr",align:null},"Number of times an alert should return true before Monika sends notifications. For example, when incidentThreshold is 3, Monika will only send notifications when the probed URL returns non-2xx status 3 times in a row. After sending the notifications, Monika will not send notifications anymore until the alert status changes. Default value is 5.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"recoveryThreshold (optional)"),Object(l.b)("td",{parentName:"tr",align:null},"Number of times an alert should return false before Monika sends notifications. For example, when recoveryThreshold is 3, Monika will only send notifications when the probed URL returns status 2xx 3 times in a row. After sending the notifications, Monika will not send notifications anymore until the alert status changes. Default value is 5.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"alerts"),Object(l.b)("td",{parentName:"tr",align:null},"The condition which will trigger an alert, and the subsequent notification method to send out the alert. See below for further details on alerts and notifications.")))),Object(l.b)("h3",{id:"html-form-submission-example"},"HTML-form-submission Example",Object(l.b)("a",{parentName:"h3",href:"#html-form-submission-example",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Here is probes example with POST request to simulate HTML form submission"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "HTML form submission",\n      "description": "simulate html form submission",\n      "interval": 10,\n      "request": {\n        "method": "POST",\n        "url": "http://www.foo.com/login.php",\n        "timeout": 7000,\n        "headers": {\n          "Content-Type": "application/x-www-form-urlencoded"\n        },\n        "body": {\n          "username": "someusername",\n          "password": "somepassword"\n        }\n      },\n      "incidentThreshold": 3,\n      "recoveryThreshold": 3,\n      "alerts": ["status-not-2xx", "response-time-greater-than-200-ms"]\n    },\n  ]\n')),Object(l.b)("h2",{id:"execution-order"},"Execution order",Object(l.b)("a",{parentName:"h2",href:"#execution-order",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"In a configuration with multiple probes, ",Object(l.b)("inlineCode",{parentName:"p"},"Monika")," will perform the requests in sequence in the order that they are entered, one after another."),Object(l.b)("p",null,"On completion, ",Object(l.b)("inlineCode",{parentName:"p"},"Monika")," will sleep until the next interval to start again. At the top of the ",Object(l.b)("inlineCode",{parentName:"p"},"config.json")," file there is an ",Object(l.b)("inlineCode",{parentName:"p"},"interval")," setting. The execution will be restarted after every ",Object(l.b)("inlineCode",{parentName:"p"},"interval"),". If interval is shorter than the amount of time to dispatch all the requests, then ",Object(l.b)("inlineCode",{parentName:"p"},"Monika")," will immediately repeat after the last probe response and any notification alerts sent."),Object(l.b)("h2",{id:"further-reading"},"Further reading",Object(l.b)("a",{parentName:"h2",href:"#further-reading",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"./alerts"},"Alerts")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"./notifications"},"Notifications"))))}p.isMDXComponent=!0},nDaH:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/probes",function(){return n("LSgu")}])}},[["nDaH",0,2,4,1,3,5]]]);