import {
  CheckBadgeIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import clsx from 'clsx'
import React from 'react'
import Button from '@/app/ui/components/Button'

const Message = (props: {
  onClose: () => void
  variant: 'error' | 'info' | 'success' | 'primary'
  children: React.ReactNode
}) => {
  setTimeout(() => {
    props.onClose()
  }, 6000)

  return (
    <div className="fixed bottom-8 right-8 z-10">
      <div className="relative flex items-center justify-center p-4">
        <div
          className={clsx(
            'relative z-10 max-w-xl gap-6 overflow-hidden rounded-xl border bg-white px-6 py-4 shadow-lg ring-4 backdrop-blur-3xl',
            {
              'border-rose-500 ring-rose-950/5': props.variant === 'error',
              'border-sky-500 ring-sky-950/5': props.variant === 'info',
              'border-emerald-500 ring-emerald-950/5':
                props.variant === 'success',
              'border-neutral-950 ring-neutral-950/5':
                props.variant === 'primary',
            },
          )}
        >
          <div className="absolute inset-0 -z-10 backdrop-blur-3xl"></div>

          <div className="flex items-center gap-6">
            <h3
              className={clsx(
                'flex h-8 w-8 items-center justify-center rounded-full font-medium',
                {
                  'bg-rose-500': props.variant === 'error',
                  'bg-sky-500': props.variant === 'info',
                  'bg-emerald-500': props.variant === 'success',
                  'bg-neutral-950': props.variant === 'primary',
                },
              )}
            >
              {props.variant === 'error' ? (
                <XMarkIcon className="size-6 fill-neutral-50" />
              ) : props.variant === 'info' ? (
                <InformationCircleIcon className="size-6 fill-neutral-50" />
              ) : (
                <CheckBadgeIcon className="size-6 fill-neutral-50" />
              )}
              <span className="sr-only">{props.variant}</span>
            </h3>

            {props.children}

            <Button
              className="h-8"
              variant="secondary"
              onClick={() => props.onClose()}
            >
              <XMarkIcon className="absolute size-6 fill-neutral-950" />
            </Button>
          </div>

          <div
            className={clsx(
              'absolute inset-x-0 bottom-0 h-1 w-full animate-ping',
              {
                'bg-rose-500': props.variant === 'error',
                'bg-sky-500': props.variant === 'info',
                'bg-emerald-500': props.variant === 'success',
                'bg-neutral-950': props.variant === 'primary',
              },
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default Message
