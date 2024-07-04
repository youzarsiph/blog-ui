import {
  Switch as BaseSwitch,
  Description,
  Field,
  Label,
  SwitchProps,
} from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

const Switch = (
  props: SwitchProps & { label: string; description: string },
) => (
  <Field className="flex items-center gap-4">
    <BaseSwitch
      {...props}
      className={clsx(
        'group relative flex h-8 w-16 cursor-pointer items-center rounded-full border border-neutral-300 p-1 ring-4 ring-transparent transition-colors duration-200 ease-in-out',
        'data-[checked]:border-neutral-950 data-[focus]:border-neutral-950 data-[checked]:bg-neutral-900 data-[focus]:outline-none data-[checked]:ring-neutral-950/5 data-[focus]:ring-neutral-950/5 data-[focus]:ring-offset-2',
        props.className,
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none inline-block size-6 translate-x-0 rounded-full bg-neutral-900 ring-1 ring-neutral-950 transition duration-200 ease-in-out',
          'group-data-[checked]:translate-x-8 group-data-[checked]:bg-white group-data-[checked]:ring-white',
        )}
      />
    </BaseSwitch>

    <div className="grid">
      <Label className="text-sm/6 font-medium text-neutral-950">
        {props.label}
      </Label>

      <Description className="text-xs/6 text-neutral-950/50">
        {props.description}
      </Description>
    </div>
  </Field>
)

export default Switch
