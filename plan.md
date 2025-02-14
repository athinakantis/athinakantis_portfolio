# Nav Animation

## NavSize

-   Width: 280px

Upon mount, the items are initialized with the active tab icon in the middle.

Once an item in the navbar is clicked, if it it to the right of the center, all elements shift either `50.6640625` or `101,328125` pixels to the left

If it is to the left of the center, all elements shift `50.6640625` or `101,328125` pixels to the right

If an element shifts beyond the container, it is moved to the other side of the container

If it is already in the center (the element is 140px left in it's container) nothing happens. We return.

-   Change Tech stack to svg
