---
title: 'Building a Simple Website with Cloudflare Workers'
description: 'How to create a fast, serverless website entirely on the edge with Cloudflare Workers.'
date: '2025-04-03'
---

[Cloudflare Workers](https://workers.cloudflare.com/) offers a powerful way to build and deploy web applications directly on the edge. In this post, I'll show you how to create a simple, functioning website using only Cloudflare Workers - no traditional server required!

> **Live Demo:** Check out a working example at [my-worker-site.rajtslegr.workers.dev](https://my-worker-site.rajtslegr.workers.dev)
>
> **Source Code:** Find the complete code on [GitHub](https://github.com/rajtslegr/my-worker-site)

## Why Build a Site with Cloudflare Workers?

Cloudflare Workers runs JavaScript at the edge - meaning your code executes on Cloudflare's global network of data centers, physically closer to your users. This approach provides several advantages:

- **Speed**: 50+ ms response times globally
- **Scale**: Handles traffic spikes without configuration
- **Simplicity**: No servers to maintain or scale
- **Low Cost**: Generous free tier (100,000 requests daily)

## Setting Up Your Project

First, install Wrangler, Cloudflare's command-line tool:

```bash
npm install -g wrangler
wrangler login
```

Now, let's initialize a new project:

```bash
wrangler init my-worker-site
cd my-worker-site
```

## Building a Multi-Page Website

Let's create a simple website with multiple pages. Here's our Worker script that will serve as both our server and router:

```js
// Define our page content
const pages = {
  home: {
    title: "My Worker Site",
    content: `
      <h1>Welcome to My Edge-Powered Site</h1>
      <p>This entire site runs on Cloudflare Workers!</p>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/projects">Projects</a>
      </nav>
      <div class="content">
        <h2>Edge Computing Made Simple</h2>
        <p>This website demonstrates how you can build and deploy a complete static site
        using only Cloudflare Workers. No traditional servers or hosting required!</p>
        
        <h2>Latest Updates</h2>
        <ul>
          <li>Site launched on Cloudflare's edge network</li>
          <li>Added multi-page navigation</li>
          <li>Implemented responsive design</li>
        </ul>
      </div>
    `
  },
  about: {
    title: "About | My Worker Site",
    content: `
      <h1>About This Site</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/projects">Projects</a>
      </nav>
      <div class="content">
        <p>This site demonstrates how to build a complete website using only Cloudflare Workers.</p>
        <p>No traditional servers were harmed in the making of this website.</p>
        
        <h2>How It Works</h2>
        <p>When a visitor requests a page:</p>
        <ol>
          <li>The request hits Cloudflare's edge network</li>
          <li>Our Worker script runs in the data center closest to the visitor</li>
          <li>The Worker generates HTML on-demand</li>
          <li>Content is delivered with ultra-low latency</li>
        </ol>
      </div>
    `
  },
  contact: {
    title: "Contact | My Worker Site",
    content: `
      <h1>Contact Me</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/projects">Projects</a>
      </nav>
      <div class="content">
        <p>Email me at: <a href="mailto:hello@example.com">hello@example.com</a></p>
        <p>Find me on Twitter: <a href="https://twitter.com/example" target="_blank">@example</a></p>
        <p>GitHub: <a href="https://github.com/example" target="_blank">github.com/example</a></p>
      </div>
    `
  },
  projects: {
    title: "Projects | My Worker Site",
    content: `
      <h1>My Projects</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/projects">Projects</a>
      </nav>
      <div class="content">
        <div class="project">
          <h2>Project Alpha</h2>
          <p>A serverless application built with Cloudflare Workers.</p>
          <a href="#">View Project →</a>
        </div>
        
        <div class="project">
          <h2>Project Beta</h2>
          <p>An edge-computing solution for real-time data processing.</p>
          <a href="#">View Project →</a>
        </div>
        
        <div class="project">
          <h2>Project Gamma</h2>
          <p>Exploring the possibilities of distributed computing.</p>
          <a href="#">View Project →</a>
        </div>
      </div>
    `
  }
};

// HTML template function
function generateHTML(page) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${page.title}</title>
      <style>
        body {
          font-family: system-ui, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          line-height: 1.6;
          color: #333;
        }
        nav {
          margin: 1rem 0 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eee;
        }
        nav a {
          margin-right: 1rem;
          color: #0070f3;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
        h1 {
          color: #0070f3;
        }
        .content {
          margin-top: 2rem;
        }
        .project {
          margin: 2rem 0;
          padding: 1.5rem;
          background: #f7f7f7;
          border-radius: 8px;
        }
        @media (max-width: 600px) {
          body {
            padding: 1rem;
          }
        }
      </style>
    </head>
    <body>
      ${page.content}
    </body>
    </html>
  `;
}

// Main worker function
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;
    
    // Remove trailing slash
    if (path.endsWith('/') && path.length > 1) {
      path = path.slice(0, -1);
    }
    
    // Simple router
    switch (path) {
      case '/':
        return new Response(generateHTML(pages.home), {
          headers: { 'Content-Type': 'text/html' }
        });
      case '/about':
        return new Response(generateHTML(pages.about), {
          headers: { 'Content-Type': 'text/html' }
        });
      case '/contact':
        return new Response(generateHTML(pages.contact), {
          headers: { 'Content-Type': 'text/html' }
        });
      case '/projects':
        return new Response(generateHTML(pages.projects), {
          headers: { 'Content-Type': 'text/html' }
        });
      default:
        return new Response(
          generateHTML({
            title: '404 | Not Found',
            content: `
              <h1>404 - Page Not Found</h1>
              <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/projects">Projects</a>
              </nav>
              <p>Sorry, the page you are looking for does not exist.</p>
              <p><a href="/">Return to the homepage</a></p>
            `
          }), {
            status: 404,
            headers: { 'Content-Type': 'text/html' }
          }
        );
    }
  }
};
```

## Deploying Your Worker Website

Publishing your site is as simple as:

```bash
wrangler deploy
```

Your website is now live on Cloudflare's global network! You can assign a custom domain during the first deploy or in the Cloudflare dashboard.

## Tips for a Production-Ready Site

For a more robust implementation:

1. **Use Workers Sites**: For larger projects with many static assets
2. **Add caching**: Set appropriate Cache-Control headers
3. **Implement custom error pages**: Create branded 404 and 500 error pages
4. **Add analytics**: Track page views with a simple counter
5. **Use environment variables**: Store configuration in your wrangler.toml
6. **Handle static assets**: For serving CSS, JavaScript, and images, you can either inline them as we did in our example, or for larger sites, use Workers Sites or R2 storage

## Conclusion

Building a website with Cloudflare Workers demonstrates the simplicity and power of edge computing. Your site is fast, globally distributed, and requires zero server maintenance.

This approach is perfect for personal sites, landing pages, and small business websites. All the code runs directly on Cloudflare's edge network, delivering content to your visitors with incredibly low latency.

The best part? You can build and deploy a complete website like this for free on Cloudflare's generous free tier, making it an ideal solution for projects of all sizes.

If you'd like to see this in action, check out the [live demo](https://my-worker-site.rajtslegr.workers.dev) and view the [source code on GitHub](https://github.com/rajtslegr/my-worker-site). 
