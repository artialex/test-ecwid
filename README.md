# Test Ecwid

https://github.com/Ecwid/new-job/blob/master/TypeScript.md

## Notes

- The job description mentioned Vite, Vue Router and Pinia libraries, so I decided to use them in this assessment.
- Data fetching is made using `query` pattern. In real app it would probably be [tansack-query](https://tanstack.com/query/latest) lib or similar. Pinia is used to store the cart data. Of course it's possible to keep all the data in store, but it seems unnecessary to me in this case 
- In Real application API access token should be hidden on server-side. I implied that for this task it is unnecessary 
- I used Pages > Views > Components hierarchy. Pages are router primitives, they are the topmost components. Views contain data fetching logic. Components are everything else. Though it might be an overkill for this task it helps to keep clarity
- I used Tailwind for CSS
- Pagination: Test API doesn't have a lot of items, so I decided not to implement a pagination. 
- By the way, there is an error in API: in `/categories` endpoint query param `parentCategoryId` is actually named `parent`
