---
name: Tabset
icon: folder-open-o
summary: The tabset module contains directives to enhance UI Bootstrap tabs.
---

The tabset module contains directives to enhance the [Angular UI Bootstrap tabs directive](https://angular-ui.github.io/bootstrap/#/tabs). These enhancements include options to display buttons in the tab area, to make tabs collapsible, and to make tabs closeable. 

### Tabset settings ###
The tabset module includes the following attributes to enhance `uib-tabset`.

- `bb-tabset-add` &mdash; *(Optional.)* Creates an add button in the tab area and takes a callback that will be executed when users click the button.
- `bb-tabset-open` &mdash; *(Optional.)* Creates an open button in the tab area and takes a callback that will be executed when users click the button.
- `bb-tabset-collapsible` &mdash; *(Optional.)* Collapses tabs into a dropdown on small screens such as mobile devices. You include this attribute with no value in the `uib-tabset` element, and then you apply the `bb-tab-collapse-header` attribute to the `uib-tab` element to specify a title for the dropdown to display when that tab is active.

### Tab settings ###
The tabset module includes the following attributes to enhance `uib-tab`.

- `bb-tab-heading-xs` &mdash; *(Optional.)* Specifies a tab heading to display on small screen sizes.
- `bb-tab-collapse-header` &mdash; When `bb-tabset-collapsible` makes a tab collapsible, specifies a title for the dropdown to display when that tab is active.
- `bb-tab-close` &mdash; *(Optional.)* Makes a tab closeable. To display the close icon on a tab, you also add a `button` element within the `uib-tab-heading` element and apply the `bb-tab-close-icon` class to it.

### Tab heading settings ###
The tabset module includes the following classes to enhance `uib-tab-heading`.

- `bb-tab-close-icon` &mdash; When `bb-tab-close` makes a tab closeable, displays a close icon on the tab.
- `bb-tab-header-count` &mdash; *(Optional.)* Displays a counter alongside the tab header.


<!--

### Tabset settings ###

The `bb-tabset-add` attribute creates an add button in the tab area and takes a callback that will be executed when users click the button.

The `bb-tabset-open` attribute creates an open button in the tab area and takes a callback that will be executed when users click the button.

### Collapsing tabs ###

To make tabs collapse into a dropdown on small screens such as mobile devices, use the `bb-tabset-collapsible` attribute on a ui-bootstrap `tabset`.
You must then use the `bb-tab-collapse-header` attribute on your ui-bootstrap `tab` to specify a title for the dropdown that will display when a tab is active.

### Tab settings ###

The `bb-tab-heading-xs` attribute specifies a heading that will appear for a tab on small screen sizes.

### Tab close icon ###

To add a close icon to a tab, add the `bb-tab-close` class to the ui-bootstrap `tab` element, and add an `i` element with the `bb-tab-close-icon` class inside of the ui-bootstrap `tab-heading` directive.

### Tab header count ###

To display a counter alongside the tab header, you can use the `bb-tab-header-count` class.

-->