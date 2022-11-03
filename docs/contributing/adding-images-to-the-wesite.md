# Adding images to the design system website
When adding or amending guidance on the design system website and you want to add an image, it's important to be considerate of the impact images have on the website. They can have implications for web performance and accessibility if used improperly.

Before reading the following, also consult our [image guidance](https://design-system.service.gov.uk/styles/images/) for details on when it's appropriate to use images and how best to use them.

## Does your content really need images?
Ideally, we would avoid adding new images to our content.

In patterns and components, we should be using code examples when we want to convey what our pattern or component will look like. Avoid using screenshots of patterns or components wherever possible.

## Can your image be an SVG?
SVG's are better for web performance as they scale with different screen sizes and load faster than most image formats of the same size. If your image is a "graphic" aka: it isn't a photo or a screenshot, it should be converted to an SVG and added to the page directly.

## Ensure your image is an appropriate file size
Avoid adding very large file size images to the website.

If your image is larger than the context it is presented in eg: if you have an image with an intrinsic size of 1200x1200 pixels but the max width it will ever be displayed at on screens is 500 pixels, it should be resized so that it's intrinsically 500 pixels wide. You can discover what size an image is rendered on a given screen size by opening your browser's dev tools, locating the `img` tag which is rendering the image and hovering over the `src` of that tag. You can then move the screen size down to assess at what point the image is largest. Don't assume that the image is largest on desktop only as reflowing layouts can mean that a given image is filling the screen and therefore at it's largest on mobile.

You should also compress your images as much as possible to reduce their page load. There are numerous online services for this [insert content here on which service or services we recommend].

## Ensure that your image is marked up to improve web performance
If you have direct control over the markup of your image aka: the `img` tag which is rendering it, try to include the following:

- [Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)
- [The `figure` tag around your image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
- [Responsive image features such as the `srcset` and `sizes` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

