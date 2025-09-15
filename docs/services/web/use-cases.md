---
id: use-cases
title: Use Cases
slug: /services/web/use-cases
---
## Login & Authentication
Register, Login, Logout, Password Reset, View Profile, Update Profile, Email Verification, Refresh Token, Social Login, Account Lockout, User Management, 

Business Entities:

User: Represents an individual with an account.
Session: Represents an active user session (e.g., access and refresh tokens).
PasswordResetRequest: Tracks password reset requests (e.g., tokens sent via email).
OAuthProvider: Represents third-party authentication providers (e.g., Google, Facebook).
AuditLog: Records authentication-related events (e.g., login attempts, password changes).

User: Represents a registered user
Role: Defines user permissions (e.g., admin, user)
Token: Stores authentication tokens (refresh, reset, verification)
EmailVerificationToken: Token used for email verification
PasswordResetToken: Token used for password reset
Session: Tracks user login sessions (optional)