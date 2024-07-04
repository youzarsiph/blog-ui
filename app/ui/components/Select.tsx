import {
  Description,
  Field,
  Label,
  Select as BaseSelect,
  SelectProps,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

const Select = (
  props: SelectProps & { label: string; description: string },
) => (
  <Field className="grid gap-2">
    <Label className="text-sm/6 font-medium text-neutral-950">
      {props.label}
    </Label>

    <div className="relative">
      <BaseSelect
        className={clsx(
          'block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500',
          'data-[focus]:border-neutral-950 data-[focus]:outline-none data-[focus]:ring-neutral-950/5 data-[focus]:ring-offset-2',
          '*:text-black',
          props.className,
        )}
      >
        {props.children}
      </BaseSelect>

      <ChevronDownIcon
        className="group pointer-events-none absolute right-2.5 top-2.5 size-6 fill-neutral-50/60"
        aria-hidden="true"
      />
    </div>

    <Description className="text-xs/6 text-neutral-950/50">
      {props.description}
    </Description>
  </Field>
)

export default Select
