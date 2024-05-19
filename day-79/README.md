# Day-79 Task:

## Description
Read the following Articles with interactive video about Basics of Authentication and HTTP Basic Authentication.

- [Basics of Authentication](https://roadmap.sh/guides/basics-of-authentication)
- [HTTP Basic Authentication](https://roadmap.sh/guides/http-basic-authentication)

## Basics of Authentication
Authentication is the process of verifying the identity of a user or system. It ensures that the entity trying to gain access is who or what it claims to be. There are several methods of authentication, including:

1. **Password-based Authentication**: The most common method where a user provides a username and password.
2. **Multi-factor Authentication (MFA)**: Requires two or more verification methods, improving security.
3. **Token-based Authentication**: Uses a token (a small device or software) to provide a one-time passcode.
4. **Biometric Authentication**: Utilizes biological traits such as fingerprints or facial recognition.

Authentication factors are categorized into three types:
1. **Knowledge Factor**: What you know (e.g., username/password, security codes).
2. **Possession Factor**: What you have (e.g., hard tokens, soft tokens).
3. **Qualities Factor**: What you are (e.g., biometric authentication such as iris, facial, or voice recognition).

### Multi-factor Authentication (MFA)
MFA uses more than one factor to authenticate a user, making it more secure than single-factor authentication. For example:
- Combining a username/password (knowledge factor) with an OTP sent to a mobile phone (possession factor).

### Two-Factor Authentication (2FA)
2FA is a type of MFA with exactly two factors. It is always MFA, but MFA is not always 2FA as MFA can include more than two factors.

### Authentication vs. Authorization
- **Authentication**: Verifies identity (e.g., login credentials).
  - Failure response code: `401 Unauthorized`
- **Authorization**: Checks permissions (e.g., access to specific operations after login).
  - Failure response code: `403 Forbidden`

### Authentication Strategies
Common authentication strategies include:
- Basics of Authentication
- Session-Based Authentication
- Token-Based Authentication
- JWT Authentication
- OAuth (Open Authorization)
- Single Sign-On (SSO)


## HTTP Basic Authentication
HTTP Basic Authentication is a simple authentication scheme built into the HTTP protocol. It uses a header field to transmit credentials encoded as Base64. This method is not secure on its own because the credentials are not encrypted; it should be used in conjunction with HTTPS for security. Basic Authentication is a part of the HTTP specification (RFC7617) and is supported by all browsers.

### How HTTP Basic Authentication Works:

1. **Client Request**: The client sends a request to the server without authentication credentials.

2. **Server Response**: The server responds with a `401 Unauthorized` status code and includes a `WWW-Authenticate` header, with the value set to Basic, indicating that authentication is required.

`401 Unauthorized`  
`WWW-Authenticate: Basic realm="user_pages"`  

4. **Client Re-request**: The client resends the request, including an `Authorization` header with the username and password encoded in Base64.

5. **Server Verification**: The server decodes the credentials and verifies them. If valid, the server responds with the requested resource; if not, it returns a `401 Unauthorized` response.

### Example of an HTTP Basic Authentication Header:
Authorization: Basic base64(username:password)

## Conclusion
Today's task provided an in-depth understanding of authentication mechanisms and HTTP Basic Authentication, their importance, how they work, and the different strategies used in authentication.