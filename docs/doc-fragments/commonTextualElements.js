module.exports = {
  id: 'common-textual-elements',
  title: 'Common textual elements',
  tag: 'p',
  keywords: ['p', 'paragraph', 'text', 'textual elements', 'strong', 'bold', 'b', 'em', 'i', 'emphasis', 'italics', 'small', 'a', 'link', 'hr', 'horizontal rule', 'sub', 'subscript', 'sup', 'exponent', 'superscript', 'normalize', 'reset'],
  description: `<p><strong>mini.css</strong> utilizes the ruleset of <a href="http://necolas.github.io/normalize.css/" targe="_blank">Normalize.css</a> v7.0.0 to reliably deal with inconsistencies between browsers, ensuring that your web apps will look beatiful no matter on what browser or device you're at. On top of these rules, we have applied some tasteful rules, such as using <a href="https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/" target="_blank">native font stack</a> to figure out the best font for each device, slightly altering the background and foreground colors, as well as setting the size of the text to <code>16px</code> and its line height to <code>1.5</code>.</p>
  <p>All of the most common HTML5 elements, such as paragraphs, links, bold, small and slanted text, have been styled by default using clean, modern typography to make your pages look cool and stand out from the rest of the internet.</p>`,
  example: `<p>This is a paragraph with some sample text. Did you know that the latest version of <strong>mini.css</strong> is codenamed <em>Gluon</em>? Well, now you do!</p><hr/><p><small>Remember that <strong>mini.css</strong> is totally free, no fine print involved!</small></p>`,
  samples: [
`<pre><span class="code-line"><span class="highlight-a">&lt;p&gt;</span>This is a paragraph. with some <span class="highlight-a">&lt;strong&gt;</span>bold text<span class="highlight-a">&lt;/strong&gt;</span> and some <span class="highlight-a">&lt;em&gt;</span>italics text<span class="highlight-a">&lt;/em&gt;</span>.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span><span class="highlight-a">&gt;</span>This is a link.<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;small&gt;</span>This is some small text.<span class="highlight-a">&lt;/small&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;sub&gt;</span>Subscript<span class="highlight-a">&lt;/sub&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;sup&gt;</span>Superscript<span class="highlight-a">&lt;/sup&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;hr/&gt;</span></span></pre>`
  ],
  notes: [

  ],
  customization: [
    `Text color can be changed globally by changing the value of the <code>--fore-color</code> variable.`,
    `Background color can be changed globally by changing the value of the <code>--back-color</code> variable.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `You can change the color of linkss by changing the values of the <code>--a-link-color</code> and <code>--a-visited-color</code> variables.`
  ],
  modifiers: [],
  dos: [],
  donts: [
    {description: `Avoid altering the base font size of <code>16px</code> directly in your CSS code, as it can cause problems with the display of certain elements.`,
    sample:
`<pre><span class="code-line"><span class="highlight-c">/* Do not do this (use Sass instead) */</span></span>
<span class="code-line"><span class="highlight-a">html</span> {</span>
<span class="code-line">  font-size: <span class="highlight-b">14px</span>;</span>
<span class="code-line">}</span></pre>`
    }
    ]
}
