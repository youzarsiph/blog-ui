import React from 'react'
import { Button, Input } from '@/app/ui'
import { signUp } from '@/app/actions'

const Page = async () => (
  <form action={signUp} method="post" className="grid gap-6">
    <h2 className="font-display text-base font-semibold text-neutral-950">
      Sign up
    </h2>

    <div className="isolate grid gap-6 -space-y-px rounded-2xl bg-white/50">
      <Input
        required
        type="text"
        name="username"
        label="Username"
        description="Enter your username"
      />

      <Input
        required
        type="email"
        name="email"
        label="Email address"
        description="Enter your email address"
      />

      <Input
        required
        type="password"
        name="password"
        label="Password"
        description="Enter your password"
      />
    </div>

    <Button variant="primary" type="submit">
      <span className="relative top-px">Sign Up</span>
    </Button>
  </form>
)

export default Page
