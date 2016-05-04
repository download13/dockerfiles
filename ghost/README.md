[Ghost](https://github.com/TryGhost/Ghost) as an Alpine-based Docker image.

#### Environment Variables

##### BLOG_URL

Specifies the base URL on which the blog is hosted. Used to create full links for pages and posts.

Examples:

* http://example.org
* http://blog.example.org
* https://example.org

##### PORT

Port on which to serve the blog from within the container. Defaults to 80.


#### Volumes

If you want your blog's contents to survive re-creation of it's container, you'll need to attach two volumes:

* ~/ghost_data/images:/ghost/content/images
* ~/ghost_data/data:/ghost/content/data

`data` contains the sqlite database file, and `images` is where all uploaded images are saved.
