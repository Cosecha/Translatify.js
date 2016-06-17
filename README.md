# Translatify.js (beta)
A translation plugin for static GitHub Pages sites that use jQuery.

## Not Production ready!

This is not meant to be used in production. This is just a newbie's attempt at creating a JS library. This plugin still needs a lot of work before it sees the light of an 'in production' day.

## How to Use

This is library depends on jQuery so make sure you have that included in your project.

Here are some basic steps to using the plugin:
#### 1. Create a directory called 'i18n' in the root of your project
#### 2. Create a file for each language your project will include. (ie en.js, es.js, fr,js)
#### 3. Reference those .js files in the page you want to translate
#### 4. Reference your main .js file afterward (you will importing global variables from the translation files).
#### 5. Create an languages object with the following structure:

```
var en = {
	"key" : "translation",
	"for_example" : "something like this",
	...
};
```

#### 6. In your main JS file, setup the options object for the plugin:

```
var options = {
	"English" : "en", // variables declared in files in ./i18n directory
	"Spanish" : "es",
	...
};
```

#### 7. Initialize the plugin, and set the language

```
_t(options).translate("English");
```
This will initialize the plugin and set the language. Now to set up the HTML file...

#### 8. Add classes and data attributes to HTML file

Now that the plugin is set, we need to set up the HTML file to translate. You need to add the class 'i18n' to anything that needs to be translated, and add a 'data-say' attribute to the HTML element as well. Here is a sample:

```
<h2 data-say="some_text_key" class="i18n"></h2>
```

(NOTE): This will completely replace all contents inside the elements with the 'i18n' class, so structure the HTML accordingly.

#### 9. Translate the content through Javascript

Depending on how you want to trigger a translation, this is the command to do so:

```
_t.translate('Spanish');
```
