## Bring your own data via GraphQL federation

### What is GraphQL Federation

GraphQL Federation is an extension of the GraphQL API design pattern that allows you to build a single, unified GraphQL API by combining multiple smaller GraphQL services. It's particularly useful in a microservices architecture where different teams or services maintain their own data and functionalities. Federation helps in avoiding the monolithic approach by enabling services to be developed and scaled independently while providing a cohesive API to clients.

Here's a high-level explanation of how GraphQL Federation works:

Services: In a GraphQL Federation setup, each service represents a self-contained GraphQL API that's responsible for a specific domain or piece of functionality. Each service maintains its own schema, types, and resolvers.

Gateway: The Federation Gateway is the entry point for clients and acts as a central coordinator. It's responsible for aggregating the schemas and delegating queries to the appropriate services. It doesn't store any data itself; it just routes and coordinates requests.

Entity Types: One of the key concepts in Federation is the notion of "entity types." These are types that exist in more than one service and have a unique identifier. For example, if you have a "User" type that appears in multiple services, you mark it as an entity type.

References: Instead of embedding related data directly into a response, Federation uses references to indicate that certain fields are references to entities from other services. These references are resolved at the Gateway level.

Query Execution: When a client sends a query to the Federation Gateway, the gateway parses the query and identifies which fields are requested from which services. For entity types, it fetches the necessary data from the respective services using the unique identifiers.

Delegation: The Gateway delegates parts of the query to the appropriate service based on the type of data requested. This means that each service only handles the subset of the query relevant to its own domain.

Composition: After retrieving data from the various services, the Gateway composes the final response by assembling the data from different services into a cohesive format that matches the query structure.

Caching: Federation allows for efficient caching strategies. Since each service is responsible for a specific part of the data, caching can be more focused and fine-tuned.

In summary, GraphQL Federation allows you to create a unified GraphQL API by combining multiple GraphQL services, enabling each service to maintain its own data and functionality while providing a seamless experience for clients. This pattern promotes better organization, scalability, and maintainability in a microservices architecture. The Federation Gateway takes care of aggregating, delegating, and composing queries to provide a unified view of the data across services.

### How do I configure this?

Since Bravura Cloud is built on Hasura, GraphQL federation is trivial to establish. The steps for doing this are:

1. Install a Hasura in an environment you have control over. 
2. Configure Hasura to target our data repositories. Postgresql, Mysql, Sql Server, etc. Hasura supports a wide range of database backends including nosql databases like hadoop and vector databases. 
3. Expose the Hasura GraphQL API so its available to your Bravura Cloud deployment.
4. In Bravura Cloud create a remote schema and connect it to your Hasura deployment