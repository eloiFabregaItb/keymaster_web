// export const api_ip = "http://172.30.5.61:3000"
// export const api_ip = "http://localhost:3000"
export const api_ip = "https://keymaster.fabrega.cat/api"

export const ERROR={
    MISSING_DATA:{
      msg:"expected field not present",
      code:400,
      error:"MISSING_DATA"
    },
    DATA_CORRUPT:{
      msg:"Data is corrupt",
      code:400,
      error:"DATA_CORRUPT"
    },
    UNAUTHORIZED:{
      msg:"you aren't authorized on this page",
      code:401,
      error:"UNAUTHORIZED"
    },
    PERMISSIONS:{
      msg:"Permission range too low",
      code:401,
      error:"PERMISSIONS"
    },
    BAD_LOGIN:{
      msg:"login not successful",
      code:400,
      error:"BAD_LOGIN"
    },
    CREDENTIALS:{
      msg:"failed to authentificate",
      code: 400,
      error:"CREDENTIALS"
    },
    PASSWORD_FORMAT:{
      msg:"password doesnt match the requirments",
      code:400,
      error:"PASSWORD_FORMAT"
    },
    DUPLICATE:{
      msg:"Duplicate data",
      code:400,
      error:"DUPLICATE"
    },
    GENERAL:{
      msg:"An error occurred",
      code:400,
      error:"GENERAL"
    },
    UNEXISTENT:{
      msg:"Data you are trying to get doesnt exist",
      code:400,
      error:"UNEXISTENT"
    },
    NO_FILE:{
      msg:"No file provided",
      code:400,
      error:"NO_FILE"
    },
    NO_FILE:{
      msg:"No file provided",
      code:400,
      error:"NO_FILE"
    },
    FILE_PROCESSING:{
      msg:"Error processing file data",
      code:500,
      error:"FILE_PROCESSING"
    },
    RATE_LIMIT: {
      msg: 'Rate limit exceeded. Please try again later.',
      code: 429,
      error: 'RATE_LIMIT',
    },
    NOT_FOUND:{
      msg:'The requested resource could not be found.',
      code:404,
      error:'NOT_FOUND'
    },
    INFORMATION_DEPENDENT:{
      msg:'The operation is restricted because this record is referenced by other records.',
      code:400,
      error:'INFORMATION_DEPENDENT'
    },
    TYPE_MISMATCH:{
      msg:'Type mismatch',
      code:400,
      error:"TYPE_MISMATCH"
    }
  }