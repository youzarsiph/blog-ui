'use client'

import {
  BubbleMenu,
  EditorContent,
  EditorOptions,
  FloatingMenu,
  useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Dropdown } from '@/app/ui/components'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import 'highlight.js/styles/github-dark.css'
import { createLowlight, all } from 'lowlight'
import React from 'react'
import { Fonts } from '@/app/ui/styles'

const lowlight = createLowlight(all)

const Editor = (
  props: Partial<EditorOptions & { onChange: (content: string) => void }>,
) => {
  const editor = useEditor({
    ...props,
    autofocus: true,
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: Fonts.code.className,
        },
      }),
    ],
    onUpdate: ({ editor }) =>
      props.onChange ? props.onChange(editor.getHTML()) : {},
    editorProps: {
      attributes: {
        class:
          'prose prose-neutral block min-h-96 w-full rounded-[2.5rem] border border-neutral-300/30 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition md:prose-lg lg:prose-xl xl:prose-xl 2xl:prose-2xl focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5',
      },
    },
  })

  const sharedDropdownItems = [
    {
      active: false,
      icon: () => (
        <i className="bi bi-arrow-clockwise fill-neutral-950/75 text-lg" />
      ),
      disabled: !editor?.can().undo(),
      shortcut: 'Ctrl + Z',
      label: 'Undo',
      onClick: () => editor?.chain().undo().run(),
    },
    {
      active: false,
      icon: () => (
        <i className="bi bi-arrow-counterclockwise fill-neutral-950/75 text-lg" />
      ),
      disabled: !editor?.can().redo(),
      shortcut: 'Ctrl + Shift + Z',
      label: 'Redo',
      onClick: () => editor?.chain().redo().run(),
    },
    {
      active: editor?.isActive('paragraph'),
      disabled: !editor?.can().setParagraph(),
      icon: () => <i className="bi bi-paragraph fill-neutral-950/75 text-lg" />,
      label: 'Paragraph',
      onClick: () => editor?.chain().setParagraph().run(),
      shortcut: 'Ctrl + Alt + 0',
    },
    {
      active: editor?.isActive('heading', { level: 1 }),
      disabled: !editor?.can().toggleHeading({ level: 1 }),
      icon: () => <i className="bi bi-type-h1 fill-neutral-950/75 text-lg" />,
      label: 'Heading 1',
      onClick: () => editor?.chain().toggleHeading({ level: 1 }).run(),
      shortcut: 'Ctrl + Alt + 1',
    },
    {
      active: editor?.isActive('heading', { level: 2 }),
      disabled: !editor?.can().toggleHeading({ level: 2 }),
      icon: () => <i className="bi bi-type-h2 fill-neutral-950/75 text-lg" />,
      label: 'Heading 2',
      onClick: () => editor?.chain().toggleHeading({ level: 2 }).run(),
      shortcut: 'Ctrl + Alt + 2',
    },
    {
      active: editor?.isActive('heading', { level: 3 }),
      disabled: !editor?.can().toggleHeading({ level: 3 }),
      icon: () => <i className="bi bi-type-h3 fill-neutral-950/75 text-lg" />,
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
      icon: () => <i className="bi bi-list-ul fill-neutral-950/75 text-lg" />,
      label: 'Bullet list',
      onClick: () => editor?.chain().toggleBulletList().run(),
      shortcut: '',
    },
    {
      active: editor?.isActive('orderedList'),
      disabled: !editor?.can().toggleOrderedList(),
      icon: () => <i className="bi bi-list-ol fill-neutral-950/75 text-lg" />,
      label: 'Numbered list',
      onClick: () => editor?.chain().toggleOrderedList().run(),
      shortcut: '',
    },
    {
      active: editor?.isActive('blockquote'),
      icon: () => (
        <i className="bi bi-blockquote-left fill-neutral-950/75 text-lg" />
      ),
      disabled: !editor?.can().toggleBlockquote(),
      shortcut: '',
      label: 'Blockquote',
      onClick: () => editor?.chain().toggleBlockquote().run(),
    },
    {
      active: editor?.isActive('codeBlock'),
      disabled: !editor?.can().toggleCodeBlock(),
      icon: () => <i className="bi bi-code fill-neutral-950/75 text-lg" />,
      label: 'Code block',
      onClick: () => editor?.chain().toggleCodeBlock().run(),
      shortcut: '',
    },
    {
      active: editor?.isActive('horizontalRule'),
      disabled: !editor?.can().setHorizontalRule(),
      icon: () => <i className="bi bi-hr fill-neutral-950/75 text-lg" />,
      label: 'Horizontal Rule',
      onClick: () => editor?.chain().setHorizontalRule().run(),
      shortcut: '',
    },
  ]

  const inlineDropDownItems = [
    ...sharedDropdownItems,
    {
      active: editor?.isActive('hardBreak'),
      disabled: !editor?.can().setHardBreak(),
      icon: () => <i className="bi bi-br fill-neutral-950/75 text-lg" />,
      label: 'Hard break',
      onClick: () => editor?.chain().setHardBreak().run(),
      shortcut: 'Ctrl + Enter',
    },
    {
      active: editor?.isActive('bold'),
      disabled: !editor?.can().toggleBold(),
      icon: () => <i className="bi bi-type-bold fill-neutral-950/75 text-lg" />,
      label: 'Bold',
      onClick: () => editor?.chain().toggleBold().run(),
      shortcut: 'Ctrl + B',
    },
    {
      active: editor?.isActive('italic'),
      icon: () => (
        <i className="bi bi-type-italic fill-neutral-950/75 text-lg" />
      ),
      disabled: !editor?.can().toggleItalic(),
      shortcut: 'Ctrl + I',
      label: 'Italic',
      onClick: () => editor?.chain().toggleItalic().run(),
    },
    {
      active: editor?.isActive('strike'),
      icon: () => (
        <i className="bi bi-type-strikethrough fill-neutral-950/75 text-lg" />
      ),
      disabled: !editor?.can().toggleStrike(),
      shortcut: 'Ctrl + Shift + S',
      label: 'Strike',
      onClick: () => editor?.chain().toggleStrike().run(),
    },
    {
      active: editor?.isActive('code'),
      disabled: !editor?.can().toggleCode(),
      icon: () => <i className="bi bi-code fill-neutral-950/75 text-lg" />,
      label: 'Inline code',
      onClick: () => editor?.chain().toggleCode().run(),
      shortcut: undefined,
    },
  ]

  return (
    <div>
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
