import {
  Description,
  Field,
  Label,
  Textarea as BaseTextarea,
  TextareaProps,
} from '@headlessui/react'
import clsx from 'clsx'

const Textarea = (
  props: TextareaProps & { label: string; description: string },
) => (
  <Field className="grid gap-2">
    <Label className="text-sm/6 font-medium text-neutral-950">
      {props.label}
    </Label>

    <BaseTextarea
      className={clsx(
        'block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500',
        'data-[focus]:border-neutral-950 data-[focus]:outline-none data-[focus]:ring-neutral-950/5 data-[focus]:ring-offset-2',
        props.className,
      )}
      {...props}
    />

    <Description className="text-xs/6 text-neutral-950/50">
      {props.description}
    </Description>
  </Field>
)

export default Textarea
