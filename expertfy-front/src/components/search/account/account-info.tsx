import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { User } from '@/types/user';

export function AccountInfo(user : User): React.JSX.Element {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Avatar src={user.photo} sx={{ height: '100px', width: '100px' }} />
          </div>
          <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Typography variant="h5">{user.name} {user.lastName}</Typography>
            <Typography color="text.secondary" variant="body2">
              {user.office}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.seniority} 
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
