# Bootstrap 4 Grid System (Flex) #

Bootstrap v4.1.3 grid system and layout utilities using Stylus

A Stylus implementation of Bootstrap 4 grid system
Original code from Twitter Bootstrap 4
https://v4-alpha.getbootstrap.com/layout/grid/#sass-mixins

#### Utlilities: ####
* display
* flex
* sizing
* spacing
* visibility

## How to use in css file ##

```css
@import "../../../node_modules/bootstrap-4-grid-styl/css/grid.min.css";
```

# How to use in *.styl files example and custom configuration ##

```stylus
$grid-breakpoints = {xs: 0, sm: 600px, md: 800px, lg: 1000px, xl: 1300px}

@import "../../../node_modules/bootstrap-4-grid-styl/stylus/grid.styl"
```

## Available variables (Default) ##

### Global styling by enabling or disabling optional features ###

```stylus
$enable-grid-classes = true
$enable-print-styles = true
```

### Spacing ###

Control the default styling of most Bootstrap elements by modifying these
variables. Mostly focused on spacing.
You can add more entries to the $spacers map, should you need more variation.

```stylus
$spacer = 1rem
$spacers = {"0": 0, "1": ($spacer * .25), "2": ($spacer * .5), "3": $spacer, "4": ($spacer * 1.5), "5": ($spacer * 3)}
```

### This variable affects the `.h-*` and `.w-*` classes ###

```stylus
$sizes := {"25": 25%, "50": 50%, "75": 75%, "100": 100%, "auto": auto}
```

### Grid breakpoints ###

Define the minimum dimensions at which your layout will change,
adapting to different screen sizes, for use in media queries.

```stylus
$grid-breakpoints = {xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px}
```

### Grid containers ###

Define the maximum width of `.container` for different screen sizes.

```stylus
$container-max-widths = {sm: 540px, md: 720px, lg: 960px, xl: 1140px}
```

### Grid columns ###

Set the number of columns and specify the width of the gutters.

```stylus
$grid-columns = 12
$grid-gutter-width = 30px
```

### Printing ###

```stylus
$print-page-size = a3
$print-body-min-width = $grid-breakpoints["lg"]
```


