export interface formInputValues {
  email: string | null;
  password: string | null
}

export interface userCredential {
  accessToken: string
  client: string
  expiry: string
  tokenType: string
  uid: string
}

export interface userLoginData {  
  userLogin: {
    credentials: userCredential
  }
}

export interface userLoginVars {
  email: string;
  password: string;
}