// window -> it is global object(created by browser) ; it is a top level entity;
// DOM, BOM and JS CORE are the part of window object;
// DOC- DOCUMENT OBJECT MODEL ->
// JITNA V html code ko js object m convert kar diya -> iss object ko document bolte hai
//  iss poore model ko document object model kehte hai

// Browser Object  Model

// /BOM -> page k content ko chor kr communicate krne k liye jiski jarurat padti hai usse BOM use krte  hai , example -> location,


//  Method -> 
// getElementById-


// The getElementsByClassName method of Document interface returns an array-like object of
//  all child elements which have all of the given class name(s).

// $0-> represent the most recently selected DOM element in the element panel
//  if you insect an element in the element tab, then switch to console and type $0 , it refer to that element
//  $1,$2,$3 and $4 represent previously selected element (with $1 being the second most recentand so on up to 4);

// document.querySelector(); for single output(dot for CLASS and # form ID)
// Document.querySelectorAll(); for multiple output(dot for CLASS and # form ID)


// let ans=document.querySelector('.page-layout__main');
// undefined
// ans
// <div class=​"page-layout__main">​<div class=​"layout__2-sidebars-inline reference-layout">​<main id=​"content" class=​"layout__content">​…​</main>​<aside class=​"layout__left-sidebar" id=​"main-sidebar">​…​</aside>​</div>​</div>​
// ans.innerHTML
// `\n      <div class="layout__2-sidebars-inline reference-layout">\n        <main id="content" class="layout__content">\n          <div class="layout__header reference-layout__header">\n            \n            \n            <mdn-survey></mdn-survey>\n            <h1>Document: getElementsByClassName() method</h1>\n            <details class="baseline-indicator high" data-glean-toggle-open="baseline_toggle_open">\n      <summary>\n        <span class="indicator" role="img" aria-label="Baseline Check"></span>\n        <div class="status-title">\n          Baseline\n        </div>\n        <div class="pill">Widely available</div>\n        \n        <div class="browsers">\n                <span class="engine" title="Supported in Chrome and Edge">\n                      <span class="browser chrome supported" role="img" aria-label="Chrome check"></span><span class="browser edge supported" role="img" aria-label="Edge check"></span>\n                    </span><span class="engine" title="Supported in Firefox">\n                      <span class="browser firefox supported" role="img" aria-label="Firefox check"></span>\n                    </span><span class="engine" title="Supported in Safari">\n                      <span class="browser safari supported" role="img" aria-label="Safari check"></span>\n                    </span>\n              </div>\n        <span class="icon icon-chevron"></span>\n      </summary>\n      <div class="extra">\n        <p>This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.</p>\n        \n        <ul>\n          <li>\n            <a href="#browser_compatibility" data-glean-id="baseline_link_bcd_table">\n              See full compatibility\n            </a>\n          </li>\n          <li>\n            <a href="/en-US/docs/Glossary/Baseline/Compatibility" data-glean-id="baseline_link_learn_more" target="_blank">\n              Learn more\n            </a>\n          </li>\n        </ul>\n      </div>\n    </details>\x3Cscript>if (localStorage.getItem("baseline-indicator") === "open") {\n  const indicator = document.querySelector(".baseline-indicator");\n  if (indicator instanceof HTMLDetailsElement) {\n    indicator.open = true;\n  }\n}\n\x3C/script>\x3C!--?--> <section class="content-section">\n    \n    <p>The <strong><code>getElementsByClassName</code></strong> method of\n<a href="/en-US/docs/Web/API/Document"><code>Document</code></a> interface returns an array-like object\nof all child elements which have all of the given class name(s).</p>\n<p>When called on\nthe <a href="/en-US/docs/Web/API/Document"><code>document</code></a> object, the complete document is searched, including the\nroot node. You may also call <a href="/en-US/docs/Web/API/Element/getElementsByClassName" title="getElementsByClassName()"><code>getElementsByClassName()</code></a> on any element; it will return only elements which are descendants of the specified root element with the given class name(s).</p>\n<div class="notecard warning">\n<p><strong>Warning:</strong>\nThis is a live <a href="/en-US/docs/Web/API/HTMLCollection"><code>HTMLCollection</code></a>. Changes in the DOM will\nreflect in the array as the changes occur. If an element selected by this array no\nlonger qualifies for the selector, it will automatically be removed. Be aware of this\nfor iteration purposes.</p>\n</div>\n  </section>\n          </div>\n          <aside class="layout__right-sidebar reference-layout__toc">\n            <nav class="reference-toc">\n      <h2>In this article</h2>\n      <ul>\n        <li>\n              <a href="#syntax" data-glean-id="toc_click: #syntax">Syntax</a>\n            </li><li>\n              <a href="#examples" data-glean-id="toc_click: #examples">Examples</a>\n            </li><li>\n              <a href="#specifications" data-glean-id="toc_click: #specifications">Specifications</a>\n            </li><li>\n              <a href="#browser_compatibility" data-glean-id="toc_click: #browser_compatibility">Browser compatibility</a>\n            </li>\n      </ul>\n    </nav>\n            <mdn-placement-sidebar></mdn-placement-sidebar>\n          </aside>\n          <div class="layout__body reference-layout__body">\n            <section class="content-section" aria-labelledby="syntax">\n    \x3C!--lit-part X3RKttXoaxo=-->\x3C!--lit-node 0--><h2 id="syntax" class="heading">\x3C!--lit-node 1--><a class="heading-anchor" href="#syntax">Syntax</a></h2>\x3C!--/lit-part-->\n    <mdn-code-example class="brush: js notranslate"></mdn-code-example>\n  </section><section class="content-section" aria-labelledby="parameters">\n    \x3C!--lit-part q+C3FhLECJw=-->\x3C!--lit-node 0--><h3 id="parameters" class="heading">\x3C!--lit-node 1--><a class="heading-anchor" href="#parameters">Parameters</a></h3>\x3C!--/lit-part-->\n    <dl>\n<dt id="names"><a href="#names"><code>names</code></a></dt>\n<dd>\n<p>A string representing the class name(s) t
// ans.innerHTML=' ';
// ' '
// log.js:15 (Glean.core.Upload.PingUploadManager) Ping 767d70ec-aba1-4bdc-9026-b6ce53b9750f successfully sent 200.
// ans.innerHTML;
// ' 


// innerHTML → element ke andar ka content badalna ho
// outerHTML → poora element hi replace karna ho (tag type samet)


