import * as functions from 'firebase-functions'
import { auth } from './firebase'
import { CallableContext } from 'firebase-functions/lib/providers/https'

//client needs to have functions installed
//then const addAdminRose_func = functions.httpsCallable('addAdminRose')
// ALSO, refer to firestore RULES
export const addAdminRole = functions.https.onCall(
  async (data: any, context: CallableContext) => {
    //check if  request is made by admin {IMPORTANT for security}
    const authContext: any = context.auth
    if (authContext.token.admin !== true) {
      return { err: 'only admins can add new admin' }
    }
    const user = await auth.getUserByEmail(data.email)
    await auth.setCustomUserClaims(user.uid, {
      // 'admin is the name we give, can be anything, eg 'membership: gold''
      admin: true
    })
    return {
      message: `sccuess ${data.email} has been made an admin`
    }
  }
)
