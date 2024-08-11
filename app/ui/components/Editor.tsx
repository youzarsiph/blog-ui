'use client'

import {
  BubbleMenu,
  EditorContent,
  EditorOptions,
  FloatingMenu,
  useEditor,
} from '@tiptap/react'
import Link from '@tiptap/extension-link'
import StarterKit from '@tiptap/starter-kit'
import clsx from 'clsx'
import { Dropdown } from '@/app/ui'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import 'highlight.js/styles/github-dark.css'
import { createLowlight, all } from 'lowlight'
import React from 'react'
import { Fonts } from '@/app/ui'
import {
  AdjustmentsHorizontalIcon,
  ArrowDownRightIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  Bars3BottomLeftIcon,
  BoldIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  ItalicIcon,
  ListBulletIcon,
  NumberedListIcon,
  SparklesIcon,
  StrikethroughIcon,
} from '@heroicons/react/24/solid'

const lowlight = createLowlight(all)

const Editor = (
  props: Partial<EditorOptions & { onChange: (content: string) => void }>,
) => {
  const editor = useEditor({
    ...props,
    editorProps: {
      attributes: {
        name: 'content',
        required: 'true',
        class:
          'prose prose-neutral max-w-full block min-h-96 w-full bg-white/50 rounded-[2.5rem] border border-neutral-300/30 backdrop-filter backdrop-blur-xl px-6 pb-4 pt-16 text-base/6 text-neutral-950 ring-4 ring-transparent transition md:prose-lg lg:prose-xl xl:prose-xl 2xl:prose-2xl focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5',
      },
    },
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: Fonts.code.className,
        },
      }),
      Link.configure({
        defaultProtocol: 'https',
        protocols: ['https', 'mailto', 'tel'],
      }),
    ],
  })

  const sharedDropdownItems = [
    {
      active: false,
      icon: () => <ArrowUturnLeftIcon className="size-5 fill-inherit" />,
      disabled: !editor?.can().undo(),
      shortcut: 'Ctrl + Z',
      label: 'Undo',
      onClick: () => editor?.chain().undo().run(),
    },
    {
      active: false,
      icon: () => <ArrowUturnRightIcon className="size-5 fill-inherit" />,
      disabled: !editor?.can().redo(),
      shortcut: 'Ctrl + Shift + Z',
      label: 'Redo',
      onClick: () => editor?.chain().redo().run(),
    },
    {
      active: editor?.isActive('paragraph'),
      disabled: !editor?.can().setParagraph(),
      icon: () => <Bars3BottomLeftIcon className="size-5 fill-inherit" />,
      label: 'Paragraph',
      onClick: () => editor?.chain().setParagraph().run(),
      shortcut: 'Ctrl + Alt + 0',
    },
    {
      active: editor?.isActive('heading', { level: 1 }),
      disabled: !editor?.can().toggleHeading({ level: 1 }),
      icon: () => <H1Icon className="size-5 fill-inherit" />,
      label: 'Heading 1',
      onClick: () => editor?.chain().toggleHeading({ level: 1 }).run(),
      shortcut: 'Ctrl + Alt + 1',
    },
    {
      active: editor?.isActive('heading', { level: 2 }),
      disabled: !editor?.can().toggleHeading({ level: 2 }),
      icon: () => <H2Icon className="size-5 fill-inherit" />,
      label: 'Heading 2',
      onClick: () => editor?.chain().toggleHeading({ level: 2 }).run(),
      shortcut: 'Ctrl + Alt + 2',
    },
    {
      active: editor?.isActive('heading', { level: 3 }),
      disabled: !editor?.can().toggleHeading({ level: 3 }),
      icon: () => <H3Icon className="size-5 fill-inherit" />,
      label: 'Heading 3',
      onClick: () => editor?.chain().toggleHeading({ level: 3 }).run(),
      shortcut: 'Ctrl + Alt + 3',
    },
  ]

  const blockDropdownItems = [
    ...sharedDropdownItems,
    {
      active: editor?.isActive('bulletList'),
      disabled: !editor?.can().toggleBulletList(),
      icon: () => <ListBulletIcon className="size-5 fill-inherit" />,
      label: 'Bullet list',
      onClick: () => editor?.chain().toggleBulletList().run(),
      shortcut: undefined,
    },
    {
      active: editor?.isActive('orderedList'),
      disabled: !editor?.can().toggleOrderedList(),
      icon: () => <NumberedListIcon className="size-5 fill-inherit" />,
      label: 'Numbered list',
      onClick: () => editor?.chain().toggleOrderedList().run(),
      shortcut: undefined,
    },
    {
      active: editor?.isActive('blockquote'),
      icon: () => <SparklesIcon className="size-5 fill-inherit" />,
      disabled: !editor?.can().toggleBlockquote(),
      shortcut: undefined,
      label: 'Blockquote',
      onClick: () => editor?.chain().toggleBlockquote().run(),
    },
    {
      active: editor?.isActive('codeBlock'),
      disabled: !editor?.can().toggleCodeBlock(),
      icon: () => <CodeBracketSquareIcon className="size-5 fill-inherit" />,
      label: 'Code block',
      onClick: () => editor?.chain().toggleCodeBlock().run(),
      shortcut: undefined,
    },
    {
      active: editor?.isActive('horizontalRule'),
      disabled: !editor?.can().setHorizontalRule(),
      icon: () => <AdjustmentsHorizontalIcon className="size-5 fill-inherit" />,
      label: 'Horizontal Rule',
      onClick: () => editor?.chain().setHorizontalRule().run(),
      shortcut: undefined,
    },
  ]

  const inlineDropDownItems = [
    ...sharedDropdownItems,
    {
      active: editor?.isActive('hardBreak'),
      disabled: !editor?.can().setHardBreak(),
      icon: () => <ArrowDownRightIcon className="size-5 fill-inherit" />,
      label: 'Hard break',
      onClick: () => editor?.chain().setHardBreak().run(),
      shortcut: 'Ctrl + Enter',
    },
    {
      active: editor?.isActive('bold'),
      disabled: !editor?.can().toggleBold(),
      icon: () => <BoldIcon className="size-5 fill-inherit" />,
      label: 'Bold',
      onClick: () => editor?.chain().toggleBold().run(),
      shortcut: 'Ctrl + B',
    },
    {
      active: editor?.isActive('italic'),
      icon: () => <ItalicIcon className="size-5 fill-inherit" />,
      disabled: !editor?.can().toggleItalic(),
      shortcut: 'Ctrl + I',
      label: 'Italic',
      onClick: () => editor?.chain().toggleItalic().run(),
    },
    {
      active: editor?.isActive('strike'),
      icon: () => <StrikethroughIcon className="size-5 fill-inherit" />,
      disabled: !editor?.can().toggleStrike(),
      shortcut: 'Ctrl + Shift + S',
      label: 'Strike',
      onClick: () => editor?.chain().toggleStrike().run(),
    },
    {
      active: editor?.isActive('code'),
      disabled: !editor?.can().toggleCode(),
      icon: () => <CodeBracketIcon className="size-5 fill-inherit" />,
      label: 'Inline code',
      onClick: () => editor?.chain().toggleCode().run(),
      shortcut: undefined,
    },
  ]

  return (
    <div className="relative w-full">
      <div className="absolute inset-x-0 z-10 flex flex-wrap items-center gap-2 px-6 pt-4">
        {blockDropdownItems.map((btn) => (
          <button
            key={btn.label}
            title={btn.label}
            onClick={() => btn.onClick()}
            className={clsx(
              'flex h-8 w-8 items-center justify-center rounded-md border border-neutral-950 shadow-sm outline-none ring-1 ring-neutral-950/10 ring-offset-1 focus:ring-2 active:scale-95 active:ring-4',
              {
                'bg-neutral-100 fill-neutral-950 hover:bg-neutral-950 hover:fill-neutral-100':
                  !btn.active,
                'bg-neutral-950 fill-neutral-50 text-neutral-50': btn.active,
              },
            )}
          >
            {btn.icon()}
          </button>
        ))}
      </div>

      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <Dropdown label="Styling" items={inlineDropDownItems} />
        </BubbleMenu>
      )}

      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <Dropdown label="Options" items={blockDropdownItems} />
        </FloatingMenu>
      )}

      <EditorContent editor={editor} />
    </div>
  )
}

export default Editor
