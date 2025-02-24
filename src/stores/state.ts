import { RootStateIF } from '@/interfaces'

export const state: RootStateIF = {
  authRoles: [],
  currentDate: null,
  currentJsDate: null,
  entityStatus: null,
  keycloakRoles: [],
  stateFiling: null,
  userKeycloakGuid: null,

  businessEmail: null,
  businessPhone: null,
  businessPhoneExtension: null,
  corpTypeCd: null,

  ARFilingYear: null,
  arMaxDate: null,
  arMinDate: null,
  nextARDate: null,

  businessAddress: null,
  configObject: null,
  fetchingDataSpinner: false,
  filingData: [],
  nameRequest: null,
  parties: [],
  recordsAddress: null,
  registeredAddress: null,
  tasks: [],
  userInfo: null
}
