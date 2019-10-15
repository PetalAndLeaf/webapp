import * as functions from 'firebase-functions'
import { auth } from './firebase'
import { CallableContext } from 'firebase-functions/lib/providers/https'

export const addAdminRole = functions.https.onCall(
  async (data: any, context: CallableContext) => {
    const user = await auth.getUserByEmail(data.email)
    await auth.setCustomUserClaims(user.uid, {
      admin: true
    })
    return {
      message: `sccuess ${data.email} has been made an admin`
    }
  }
)
