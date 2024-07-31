export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      register: { id: string } | undefined
      finished: { valid: boolean }
      meal: { id: string } | undefined
    }
  }
}
