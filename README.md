# isUserOnline  

A lightweight React library providing hooks to check if a user is online or offline and to fetch client details like their IP address and user agent.

## Features  

- **Online Status Detection**: Monitor the user's online or offline status using the `useIsUserOnline` hook.  
- **Client Details Fetching**: Retrieve the user's IP address and user agent using the `useClientInfo` hook.  

## Installation  

Install the library via npm:  

```bash
npm install is-user-online
```

```bash
import React from 'react';
import { useIsUserOnline, useClientInfo } from 'is-user-online';

const UserStatusDemo = () => {
  const isOnline = useIsUserOnline();
  const clientInfo = useClientInfo();

  return (
    <div>
      <p>Connection Status: {isOnline ? 'Online' : 'Offline'}</p>
      <p>IP Address: {clientInfo?.ipAddress}</p>
      <p>User Agent: {clientInfo?.userAgent}</p>
    </div>
  );
};
