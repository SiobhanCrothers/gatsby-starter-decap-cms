---

## What is the difference between Authentication and Authorization?

### Authentication

**Definition:** Authentication is the process of verifying the identity of a user, system, or entity. It answers the question, "Who are you?"

**Key Aspects:**
- Involves credentials like passwords, tokens, or biometrics.
- Common methods include something you know (password), something you have (smart card), and something you are (fingerprint).
- Ensures that users are who they claim to be.
- Typically the first step in the access control process.

### Authorization

**Definition:** Authorization determines what actions or resources an authenticated entity is allowed to access. It answers the question, "What are you allowed to do?"

**Key Aspects:**
- Occurs after successful authentication.
- Involves permissions, roles, and policies.
- Determines the level of access or the operations that an authenticated entity can perform.
- Can be based on roles (RBAC) or attributes (ABAC).

### Key Differences

1. **Purpose:** 
   - **Authentication:** Validates identity.
   - **Authorization:** Grants or denies access based on that validated identity.
   
2. **Sequence:** 
   - **Authentication:** Always occurs before authorization.
   - **Authorization:** Occurs after successful authentication.

3. **Questions Answered:** 
   - **Authentication:** Who are you?
   - **Authorization:** What are you allowed to do?

4. **Failure Consequences:** 
   - **Authentication:** Denies access entirely.
   - **Authorization:** Limits actions or resource access.

### Importance in Information Security

- **Complementary Roles:** Both authentication and authorization are vital components of a robust access control strategy.
- **Foundation of Trust:** Authentication establishes trust in an entity's identity, while authorization enforces policy based on that trust.
- **Protection Mechanisms:** Together, they protect data and resources from unauthorized access and actions.

---

