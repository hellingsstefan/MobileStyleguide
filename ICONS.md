# The use of icons

Based on the research of :

* Mathias Bynens ([mathiasbynens.be/notes/touch-icons](http://mathiasbynens.be/notes/touch-icons))
* Will from Zen Web Solutions ([www.zen.co.uk/blog/setting-a-home-screen-icon-for-your-website-on-ios-and-android-devices/](http://www.zen.co.uk/blog/setting-a-home-screen-icon-for-your-website-on-ios-and-android-devices/))

## Notes
Both iOS and Android will automatically round off the corners of your image, so avoid adding any detail in those areas.
Ideally the icon should be very simple, remember that lots of detail will be hard to see, even on larger tablets.

## The no-HTML approach

Add the next lines to your root .htacces file (mod_rewrite must be enabled!):

    # Website icons
    RewriteRule ^favicon.ico$ /assets/default/img/icons/favicon.ico
    RewriteRule ^apple-touch-icon\.png$ /assets/default/img/icons/apple-touch-icon-precomposed.png
    RewriteRule ^apple-touch-icon-precomposed\.png$ /assets/default/img/icons/apple-touch-icon-precomposed.png
    RewriteRule ^apple-touch-icon-72x72-precomposed\.png$ /assets/default/img/icons/apple-touch-icon-72x72-precomposed.png
    RewriteRule ^apple-touch-icon-114x114-precomposed\.png$ /assets/default/img/icons/apple-touch-icon-114x114-precomposed.png
    RewriteRule ^apple-touch-icon-144x144-precomposed\.png$ /assets/default/img/icons/apple-touch-icon-144x144-precomposed.png


## The HTML approach (required for Android devices)

    <!-- Icon for (older) Android devices -->
    <link rel="apple-touch-icon-precomposed" href="assets/default/img/icons/apple-touch-icon-144x144-precomposed.png" />


## Windows 8 tiles

Testing and building: [www.buildmypinnedsite.com](http://www.buildmypinnedsite.com/)

Example:

    <!-- Windows tile settings -->
    <meta name="application-name" content="Inventis styleguide"/>
    <meta name="msapplication-TileColor" content="#ffffff"/> <!-- optional -->
    <meta name="msapplication-TileImage" content="windows-tile-icon-144x144.png"/>