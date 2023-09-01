# Authentication Best Practices

## Choosing strong primary authentication

Bravura Cloud supports multiple authentication approaches. The strongest being Bravura OneAuth. Bravura OneAuth brings strongs FIDO/Webauthn authentication to Bravura Cloud and is available to all Bravura Cloud customers. 

If you choose to not deploy Bravura OneAuth then we next recommend leveraging PassKeys. PassKeys ensure a crypographically strong form of authentication that cannot be exposed in Phising attacks. 

## Choosing strong secondary authentication

Bravura Cloud supports multiple secondary forms of authentication. 

## Choosing good "forgot password" scenarios

Forgot password scenarios and more generically "forgot primary/secondary authentication factors" are a key challenge for most organizations. 

Common approaches are:
* Sending magic links to a secondary email address: Key problem is what is the secondary email? Is it the users personal email account? Can you trust the security of that personal email account that is outside of corporate control?
* Sending magic links via SMS message to a users phone: Key problem is cell phones can be cloned and so high value individuals in the company can have their accounts compomirsed by man in the middle attacks. 

Key problems include:

* If based on passwords, there is little to no chance users remember their password. 
* If based on sending magic links 



## Authentication options that should be avoided.

Q&A authentication: Knowledge based authenticaiton is insufficient since the answers users given tend to be very easily guessed using social media and online references. 

Voice print authentication: Modern AIs are able to simulate peoples speach patterns sufficienty to defeat most voice print authentication approaches.  