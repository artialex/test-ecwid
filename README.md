# Test Ecwid

https://github.com/Ecwid/new-job/blob/master/TypeScript.md

## Notes

- The job description mentioned Vite, Vue Router and Pinia libraries, so I decided to use them in this assessment.
- I used Hash Router for the GitHub Pages demo. In a real app, it should probably be handled using the standard Web router.
- Data fetching is implemented using the query pattern. In a real app, it would likely use the [Tanstack Query](https://tanstack.com/query/latest) library or a similar one. Pinia is used to store the cart data. Of course, it's possible to keep all the data in the store, but it seems unnecessary to me in this case.
- In a real application, the API access token should be hidden on the server side. I assumed that for this task it was unnecessary.
- I used a Pages > Views > Components hierarchy. Pages are router primitives and are the topmost components. Views contain data fetching logic. Components include everything else. Though it might be overkill for this task, it helps maintain clarity.
- I used Tailwind for CSS.
- Pagination: The test API doesn't have many items, so I decided not to implement pagination.
- By the way, there is an error in the API: in the /categories endpoint, the query parameter parentCategoryId is actually named parent.
