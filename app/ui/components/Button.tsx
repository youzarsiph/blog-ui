import { Button as BaseButton, ButtonProps } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

const Button = (props: ButtonProps & { variant: 'primary' | 'secondary' }) => (
  <BaseButton
    {...props}
    className={clsx(
      'relative inline-flex items-center gap-4 rounded-xl px-6 py-3 tracking-wide',
      {
        'bg-neutral-950 font-semibold text-neutral-50 hover:bg-neutral-800':
          props.variant === 'primary',
        'bg-white font-light text-neutral-950 hover:bg-neutral-200':
          props.variant === 'secondary',
      },
      props.className,
    )}
  >
    {props.children}
  </BaseButton>
)

export default Button
