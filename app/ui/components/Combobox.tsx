import {
  Combobox as BaseCombobox,
  ComboboxButton,
  ComboboxButtonProps,
  ComboboxInput,
  ComboboxInputProps,
  ComboboxOption,
  ComboboxOptions,
  ComboboxProps,
  Description,
  Field,
  Label,
} from '@headlessui/react'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/solid'
import clsx from 'clsx'
import React from 'react'

const Combobox = (
  props: ComboboxProps<string, false> & {
    label: string
    description: string
    query: string
    onChangeQuery: (value: string) => void
    options: { key: string; value: string | number }[]
    inputProps?: ComboboxInputProps
    buttonProps?: ComboboxButtonProps
  },
) => {
  const [selected, setSelected] = React.useState(
    props.options.length !== 0 ? props.options[0].key : '',
  )

  const filteredOptions =
    props.query === ''
      ? props.options
      : props.options.filter((option) =>
          option.key.toLowerCase().includes(props.query.toLowerCase()),
        )

  return (
    <Field className="grid gap-2">
      <Label className="text-sm/6 font-medium text-neutral-950">
        {props.label}
      </Label>

      <BaseCombobox
        as="div"
        value={selected}
        onClose={() => props.onChangeQuery('')}
        onChange={(value: string) => setSelected(value)}
        {...props}
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500',
              'focus:outline-none data-[focus]:border-neutral-950 data-[focus]:ring-neutral-950/5 data-[focus]:ring-offset-2',
            )}
            displayValue={(option: string) => option}
            onChange={(event) => props.onChangeQuery(event.target.value)}
            {...props.inputProps}
          />

          <ComboboxButton
            className="group absolute inset-y-0 right-2 px-2.5"
            {...props.buttonProps}
          >
            {({ active }) =>
              active ? (
                <ChevronUpIcon className="size-6 rounded fill-neutral-950/60 group-data-[hover]:bg-neutral-950 group-data-[hover]:fill-neutral-50" />
              ) : (
                <ChevronDownIcon className="size-6 rounded fill-neutral-950/60 group-data-[hover]:bg-neutral-950 group-data-[hover]:fill-neutral-50" />
              )
            }
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'mt-4 w-[var(--input-width)] rounded-xl border border-neutral-950 bg-white p-1 shadow ring-4 [--anchor-gap:var(--spacing-1)]',
            'ring-neutral-950/5 transition duration-100 ease-in-out data-[leave]:data-[closed]:opacity-0',
          )}
        >
          {filteredOptions.map((option) => (
            <ComboboxOption
              key={option.key}
              value={option.value}
              className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-neutral-950/10"
            >
              <CheckIcon className="invisible size-6 fill-neutral-950 group-data-[selected]:visible" />

              <div className="text-sm/6 text-neutral-950">{option.key}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </BaseCombobox>

      <Description className="text-xs/6 text-neutral-950/50">
        {props.description}
      </Description>
    </Field>
  )
}

export default Combobox
