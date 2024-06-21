import axios from 'axios'
import removeFriend from './delete/removeFriend'
import getGroupMessage from './get/getGroupMessage'
import getMyProfileInfo from './get/getMyProfileInfo'
import getPrivateMessage from './get/getPrivateMessage'
import getUser from './get/getUser'
import getFriendsList from './get/getUserFriends'
import getUserGroups from './get/getUserGroups'
import addFriend from './post/addFriend'
import addMemberToGroup from './post/addMemberToGroup'
import createGroup from './post/createGroup'
import dynamicNotifications from './post/dynamicNotifications'
import removeMemberFromGroup from './post/removeMemberFromGroup'
import sendNewGroupMessage from './post/sendNewGroupMessage'
import updateMyPassword from './post/updateMyPassword'
import updateMyProfileInfo from './post/updateMyProfileInfo'

axios.defaults.withCredentials = true

export const apiFunction = {
  getUser,
  getMyProfileInfo,
  getFriendsList,
  updateMyProfileInfo,
  addFriend,
  removeFriend,
  getPrivateMessage,
  updateMyPassword,
  createGroup,
  getUserGroups,
  sendNewGroupMessage,
  getGroupMessage,
  addMemberToGroup,
  removeMemberFromGroup,
  dynamicNotifications,
}
