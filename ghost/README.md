[Ghost](https://github.com/TryGhost/Ghost) as an Alpine-based Docker image.

### Environment variables:

#### BLOG_URL

Specifies the base URL on which the blog is hosted. Used to create full links for pages and posts.

Examples:

1. http://example.org
2. http://blog.example.org
3. https://example.org

#### PORT

Port on which to serve the blog from within the container. Defaults to 80.
