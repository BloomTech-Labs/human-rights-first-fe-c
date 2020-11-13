# Query Hooks

React Query is being used to handle data fetching from our web team's back-end server. There are a number of benefits to using React Query and you can see a comparison (in the Official React Query Docs) [here](https://react-query.tanstack.com/docs/comparison).

## What are `query_hooks` ❓

Query Hooks are simply custom hooks we are creating in order to access a reusable query across our entire application. This strategy automatically de-duplicates requests and usages of like-queries based on unique query keys. React Query will "recognize" multiple queries making the same request to the server and only send one.

This is powerful for a number of reasons. Not only does it save unnecessary requests to the server, it also ensures there are not multiple versions of the same data hanging around. There is a lot to love when using react-query. Below you can find more information.

- [React Query Docs](https://react-query.tanstack.com/docs/overview)

## Query Hooks We Use

NOTE: usage shows you how to access data inside a React component. There are many things that come back with a query. It is recommended you use the react-query-devtools to view active/stale/fetching queries.

### useIncidents()

- Parameters: none
- Returns: all incidents in database
- Usage: ⬇️

  ```js
  const incidentsQuery = useIncidents();
  ```

### useIncident()

- Parameters: {id}
- Returns: single incident per id passed in
- Usage: ⬇️

  ```js
  const id = 18;
  const incidentQuery = useIncident({ id });
  ```
