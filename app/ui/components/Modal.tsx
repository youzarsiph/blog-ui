'use client'

import {
  Dialog,
  DialogPanel,
  DialogProps,
  DialogTitle,
} from '@headlessui/react'
import React from 'react'
import { Button } from '@/app/ui'

const Modal = (props: DialogProps) => (
  <Dialog {...props}>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="relative flex min-h-full items-center justify-center p-4">
        <div className="absolute inset-0 -z-10 backdrop-blur-2xl"></div>

        <DialogPanel
          transition
          className="data-[closed]:transform-[scale(95%)] grid w-full max-w-xl gap-6 rounded-[2.5rem] bg-white px-6 py-8 shadow-xl duration-300 ease-out data-[closed]:opacity-0"
        >
          <div className="flex items-center justify-between gap-6">
            <DialogTitle
              as="h3"
              className="text-3xl font-medium text-neutral-950"
            >
              {props.title}
            </DialogTitle>
          </div>

          {props.children as React.ReactNode}

          <Button variant="primary" onClick={() => props.onClose(false)}>
            Close
          </Button>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
)

export default Modal
