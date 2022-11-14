---
title: My third blog post.
description: third episodes are the worst 🧟!
category: blog
publication_date: 
---

## How to set HTTPS for local development custom domain name with Nuxt.

Recently I had to implement the Apple SSO login into the web acquisition funnel of Nextory. Easy right!?

This is what I've learn along the way. this wasn't real an easy task but not because of it complexity.

# Apples rules for local environment.
redirect uri, no localhost and 127.0.0.1 and using port ins't allowed!
Nice, we're using ports in our monolyth project to jump between projects. 

## Pimp my host
from 127 to nextory.local

## remove the port
from :3300 to :443 the default https port YaY!

# Apple Account is easy to create not easy to test.

# Setting a https domain name is soooo simple.

Sources:
[Use HTTPS Certificate with mkcert](https://web.dev/how-to-use-local-https/)
[Set the certificate in a Nuxt project](https://nuxtjs.org/docs/configuration-glossary/configuration-server/#example-using-https-configuration)
