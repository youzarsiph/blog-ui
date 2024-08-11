import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuItemsProps,
} from '@headlessui/react'
import {
  CheckCircleIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid'
import clsx from 'clsx'
import React from 'react'

const Dropdown = (
  props: MenuItemsProps & {
    label: string
    items: {
      active: boolean | undefined
      disabled: boolean | undefined
      icon: () => React.ReactNode
      label: string
      onClick: () => void
      shortcut: string | undefined
    }[]
  },
) => (
  <Menu>
    <MenuButton
      title={props.label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-950/40 bg-white text-sm/6 font-semibold text-neutral-950 shadow-sm focus:outline-none data-[hover]:bg-neutral-50 data-[focus]:outline-1 data-[focus]:outline-neutral-950/60"
      aria-label={props.label}
    >
      <EllipsisHorizontalIcon className="size-6 fill-neutral-950/75" />
    </MenuButton>

    <MenuItems
      transition
      anchor="bottom start"
      className="min-w-80shadow mt-2 origin-top-right rounded-3xl bg-white px-4 py-6 text-sm/6 text-neutral-950 shadow transition duration-100 ease-in-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[leave]:data-[closed]:opacity-0"
    >
      {props.items.map((item) => (
        <MenuItem key={item.label}>
          <button
            disabled={item.disabled}
            onClick={() => item.onClick()}
            className={clsx(
              'group flex w-full items-center justify-between gap-6 rounded-lg px-4 py-2 data-[focus]:bg-neutral-100',
              { 'opacity-50': item.disabled },
            )}
          >
            <span className="flex items-center gap-4">
              <item.icon />

              {item.label}
            </span>

            <kbd
              className={clsx(
                'flex items-center gap-1 rounded p-1 font-code text-xs font-extralight',
                {
                  'bg-neutral-950 text-neutral-50': item.active,
                  'text-neutral-600': !item.active,
                },
              )}
            >
              {item.active ? (
                <CheckCircleIcon className="size-4 fill-neutral-50" />
              ) : undefined}

              {item.shortcut ? <span>{item.shortcut}</span> : undefined}
            </kbd>
          </button>
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
)

export default Dropdown
