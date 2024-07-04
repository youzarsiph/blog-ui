'use client'

import {
  Button,
  Dialog,
  DialogPanel,
  DialogProps,
  DialogTitle,
} from '@headlessui/react'
import React from 'react'

const Modal = (props: DialogProps) => (
  <Dialog {...props}>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <DialogPanel
          transition
          className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
        >
          <DialogTitle
            as="h3"
            className="text-base/7 font-medium text-neutral-50"
          >
            Payment successful
          </DialogTitle>
          <p className="mt-2 text-sm/6 text-neutral-50/50">
            Your payment has been successfully submitted. We have sent you an
            email with all of the details of your order.
          </p>
          <div className="mt-4">
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-neutral-50 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
              onClick={close}
            >
              Got it, thanks!
            </Button>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
)

export default Modal
