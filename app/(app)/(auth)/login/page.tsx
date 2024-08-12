'use client'

import React from 'react'
import { login } from '@/app/actions'
import { Button, Input, Switch } from '@/app/ui'

const Page = () => (
  <form method="post" action={login} className="grid gap-6">
    <h2 className="font-display text-base font-semibold text-neutral-950">
      Login
    </h2>

    <div className="isolate grid gap-6 -space-y-px">
      <Input
        required
        type="text"
        name="username"
        label="Username"
        description="Enter your username"
      />

      <Input
        required
        type="password"
        name="password"
        label="Password"
        description="Enter your password"
      />

      <Switch
        label="Remember me"
        description="Wether you want to be remembered"
      />
    </div>

    <Button variant="primary" type="submit">
      <span className="relative top-px">Log In</span>
    </Button>
  </form>
)

export default Page
