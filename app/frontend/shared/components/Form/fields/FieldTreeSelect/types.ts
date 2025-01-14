// Copyright (C) 2012-2023 Zammad Foundation, https://zammad-foundation.org/

import type { FormFieldContext } from '#shared/components/Form/types/field.ts'
import type { SelectOption } from '#shared/components/CommonSelect/types.ts'
import type { SelectOptionSorting } from '../FieldSelect/types.ts'

export type TreeSelectOption = SelectOption & {
  children?: TreeSelectOption[]
}

export type FlatSelectOption = SelectOption & {
  hasChildren: boolean
  parents: (string | number | boolean)[]
}

export interface TreeSelectProps {
  clearable?: boolean
  disabled?: boolean
  historicalOptions?: Record<string, string>
  multiple?: boolean
  options: TreeSelectOption[]
  noFiltering?: boolean
  noOptionsLabelTranslation?: boolean
  rejectNonExistentValues?: boolean
  sorting?: SelectOptionSorting
}

export type TreeSelectContext = FormFieldContext<TreeSelectProps>
