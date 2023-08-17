We are using Github and cloudflare
Sanity is our backend

#Automation

1. If a change is made in github it will automatically tigger redeply in Cloudflare.
   this is done when we need to update code or when we want to update content on the site.

2. We also have webhook setup with Sanity and cloudflare where when a change happen in
   Sanity it will re-deploy Cloudflare.

#Domain
We are using Godaddy for domain hosting and pointing the domain dns to Cloudflare

#Github
We have git actions setup in github to create a build and show the website with github pages
however `NOTE` we are not using github pages. We are using Cloudflare pages. Github pages
was used just to get us started.

#Note
Because we are using Cloudflare we can keep Github repository private.
(This also disabled Github pages, but again we are using Cloudflare pages so it does not matter)
