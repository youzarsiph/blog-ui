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
        label="Username"
        name="username"
        description="Your username"
        placeholder="youzarsiph"
        type="text"
        required
      />

      <Input
        label="Password"
        name="password"
        description="Your password"
        placeholder="********"
        type="password"
        required
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
